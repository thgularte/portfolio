import assert from "node:assert/strict";
import { test } from "node:test";
import { POST } from "../src/app/api/contact/route";
import { CONTACT_LIMITS, validateContact } from "../src/lib/contact-validation";

const message = {
  name: "Pessoa de teste",
  email: "test@example.com",
  message: "Mensagem de teste",
  website: "",
};
const request = (body: unknown, headers: Record<string, string> = {}) =>
  new Request("https://portfolio.example/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });

test("valida nomes, e-mails, mensagens e tamanhos", () => {
  assert.equal(validateContact({ ...message, name: "  Theodor  " }).ok, true);
  for (const value of [
    null,
    [],
    {},
    { ...message, name: "Pessoa\r\nBcc: x" },
    { ...message, email: "inválido" },
    { ...message, email: "a@b.com\ncc:email@example.com" },
    { ...message, message: " " },
    { ...message, message: "a".repeat(5001) },
    { ...message, name: 123 },
  ])
    assert.equal(validateContact(value).ok, false);
});

test("endpoint rejeita corpo inválido, grande e origem externa", async () => {
  assert.equal((await POST(request({}))).status, 422);
  assert.equal(
    (await POST(request(message, { "Content-Type": "text/plain" }))).status,
    415,
  );
  assert.equal(
    (await POST(request(message, { Origin: "https://external.example" })))
      .status,
    403,
  );
  assert.equal(
    (
      await POST(
        new Request("https://portfolio.example/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "{",
        }),
      )
    ).status,
    400,
  );
  assert.equal(
    (
      await POST(
        request({ ...message, message: "x".repeat(CONTACT_LIMITS.body) }),
      )
    ).status,
    413,
  );
});

test("honeypot não chama o provedor", async () => {
  const original = global.fetch;
  let called = false;
  global.fetch = async () => {
    called = true;
    throw new Error("should not run");
  };
  try {
    assert.equal(
      (await POST(request({ ...message, website: "bot.example" }))).status,
      200,
    );
    assert.equal(called, false);
  } finally {
    global.fetch = original;
  }
});

test("envia para Resend com reply-to e idempotência; falhas são seguras", async () => {
  const original = global.fetch;
  const previous = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  };
  Object.assign(process.env, {
    RESEND_API_KEY: "test-secret",
    CONTACT_FROM_EMAIL: "Portfolio <contact@example.com>",
    CONTACT_TO_EMAIL: "owner@example.com",
  });
  const calls: RequestInit[] = [];
  global.fetch = async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    calls.push(options!);
    return Response.json({ id: "test-email-id" });
  };
  try {
    assert.equal((await POST(request(message))).status, 200);
    assert.equal((await POST(request(message))).status, 200);
    assert.deepEqual(JSON.parse(calls[0].body as string).to, [
      "owner@example.com",
    ]);
    assert.equal(JSON.parse(calls[0].body as string).reply_to, message.email);
    assert.equal(
      new Headers(calls[0].headers).get("Idempotency-Key"),
      new Headers(calls[1].headers).get("Idempotency-Key"),
    );
    global.fetch = async () =>
      new Response("provider internal error", { status: 500 });
    const error = await POST(request(message));
    assert.equal(error.status, 502);
    assert.ok(!(await error.text()).includes("test-secret"));
    delete process.env.RESEND_API_KEY;
    assert.equal((await POST(request(message))).status, 503);
  } finally {
    global.fetch = original;
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("aceita o host público quando o Next usa uma URL interna", async () => {
  const valid = await POST(
    new Request("http://localhost:3100/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Host: "127.0.0.1:3100",
        Origin: "http://127.0.0.1:3100",
      },
      body: JSON.stringify({ ...message, website: "bot.example" }),
    }),
  );
  assert.equal(valid.status, 200);
  assert.equal((await POST(request(message, { Origin: "null" }))).status, 403);
});
