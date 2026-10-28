import assert from "node:assert/strict";
import { createServer, type Socket } from "node:net";
import { test } from "node:test";
import { sendContactEmail } from "../src/lib/email";

test("SMTP legado entrega contato quando Resend não está configurado", async () => {
  const previous = Object.fromEntries(
    [
      "RESEND_API_KEY",
      "CONTACT_TO_EMAIL",
      "CONTACT_FROM_EMAIL",
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_SECURE",
      "SMTP_USER",
      "SMTP_PASS",
      "MAIL_FROM",
      "MAIL_TO",
    ].map((key) => [key, process.env[key]]),
  );
  const sockets = new Set<Socket>();
  const commands: string[] = [];
  const message: string[] = [];
  const server = createServer((socket) => {
    sockets.add(socket);
    socket.on("close", () => sockets.delete(socket));
    socket.write("220 localhost ESMTP\r\n");
    let buffer = "";
    let readingMessage = false;
    socket.on("data", (chunk) => {
      buffer += chunk.toString();
      while (buffer.includes("\r\n")) {
        const end = buffer.indexOf("\r\n");
        const line = buffer.slice(0, end);
        buffer = buffer.slice(end + 2);
        if (readingMessage) {
          if (line === ".") {
            readingMessage = false;
            socket.write("250 2.0.0 queued\r\n");
          } else {
            message.push(line);
          }
        } else {
          commands.push(line);
          if (/^EHLO |^HELO /i.test(line))
            socket.write("250-localhost\r\n250 AUTH PLAIN\r\n");
          else if (/^AUTH PLAIN/i.test(line))
            socket.write("235 2.7.0 authenticated\r\n");
          else if (/^MAIL FROM:|^RCPT TO:/i.test(line))
            socket.write("250 2.1.0 ok\r\n");
          else if (line === "DATA") {
            readingMessage = true;
            socket.write("354 End data\r\n");
          } else if (line === "QUIT") {
            socket.write("221 bye\r\n");
            socket.end();
          } else {
            socket.write("250 ok\r\n");
          }
        }
      }
    });
  });
  try {
    await new Promise<void>((resolve) =>
      server.listen(0, "127.0.0.1", resolve),
    );
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_TO_EMAIL;
    delete process.env.CONTACT_FROM_EMAIL;
    Object.assign(process.env, {
      SMTP_HOST: "127.0.0.1",
      SMTP_PORT: String(address.port),
      SMTP_SECURE: "false",
      SMTP_USER: "owner@example.com",
      SMTP_PASS: "test-password",
      MAIL_FROM: "portfolio@example.com",
      MAIL_TO: "owner@example.com",
    });
    await sendContactEmail({
      name: "Pessoa de teste",
      email: "visitor@example.com",
      message: "Mensagem pela configuração SMTP antiga",
    });
    assert.ok(
      commands.some((line) =>
        line.includes("MAIL FROM:<portfolio@example.com>"),
      ),
    );
    assert.ok(
      commands.some((line) => line.includes("RCPT TO:<owner@example.com>")),
    );
    assert.match(message.join("\n"), /Reply-To: visitor@example.com/i);
    assert.match(message.join("\n"), /Mensagem pela configura/);
  } finally {
    for (const socket of sockets) socket.destroy();
    await new Promise<void>((resolve) => server.close(() => resolve()));
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});
