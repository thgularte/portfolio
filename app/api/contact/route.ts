import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    
    const host = process.env.SMTP_HOST;
    const portStr = process.env.SMTP_PORT;
    const secure = String(process.env.SMTP_SECURE).toLowerCase() === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !portStr || !user || !pass) {
      return Response.json(
        {
          ok: false,
          error:
            "SMTP não configurado. Verifique .env.local na raiz e reinicie o servidor (npm run dev).",
          missing: {
            SMTP_HOST: !host,
            SMTP_PORT: !portStr,
            SMTP_USER: !user,
            SMTP_PASS: !pass,
          },
        },
        { status: 500 }
      );
    }

    const port = Number(portStr);
    if (Number.isNaN(port)) {
      return Response.json(
        { ok: false, error: "SMTP_PORT inválida no .env.local." },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();

    const n = String(name ?? "").trim();
    const e = String(email ?? "").trim();
    const m = String(message ?? "").trim();

    if (!n || !e || !m) {
      return Response.json(
        { ok: false, error: "Preencha nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    if (!emailOk) {
      return Response.json({ ok: false, error: "E-mail inválido." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: process.env.MAIL_TO || user,
      replyTo: e,
      subject: `Novo contato do portfólio: ${n}`,
      text: `Nome: ${n}\nEmail: ${e}\n\nMensagem:\n${m}\n`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return Response.json(
      { ok: false, error: "Erro ao enviar e-mail. Veja o terminal do servidor." },
      { status: 500 }
    );
  }
}