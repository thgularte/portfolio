import "server-only";
import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import type { ContactData } from "./contact-validation";

export class EmailConfigurationError extends Error {}
export class EmailDeliveryError extends Error {}

function providerErrorDetail(value: unknown, apiKey: string) {
  if (!value || typeof value !== "object" || !("message" in value)) return "";
  const message = value.message;
  if (typeof message !== "string") return "";
  return message
    .replaceAll(apiKey, "[redacted]")
    .replace(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g, "[redacted-email]")
    .slice(0, 300);
}

async function sendWithResend(
  data: ContactData,
  apiKey: string,
  to: string,
  from: string,
) {
  // O Resend mantém a idempotência entre instâncias serverless por 24 horas.
  const key = createHash("sha256").update(JSON.stringify(data)).digest("hex");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    cache: "no-store",
    signal: AbortSignal.timeout(12_000),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `portfolio-contact/${key}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Contato pelo portfólio: ${data.name}`,
      text: `Nome: ${data.name}\nE-mail: ${data.email}\n\n${data.message}`,
    }),
  });
  const result: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const detail = providerErrorDetail(result, apiKey);
    throw new EmailDeliveryError(
      `Resend HTTP ${response.status}${detail ? `: ${detail}` : ""}`,
    );
  }
  if (
    !result ||
    typeof result !== "object" ||
    !("id" in result) ||
    typeof result.id !== "string"
  )
    throw new EmailDeliveryError("Resposta de envio inválida.");
}

async function sendWithSmtp(data: ContactData) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (
    !host ||
    !user ||
    !pass ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    throw new EmailConfigurationError(
      "Configuração SMTP incompleta ou inválida.",
    );
  }
  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE?.toLowerCase() === "true",
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: process.env.MAIL_TO || user,
      replyTo: data.email,
      subject: `Novo contato do portfólio: ${data.name}`,
      text: `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}\n`,
    });
  } catch {
    throw new EmailDeliveryError("SMTP delivery failed");
  }
}

export async function sendContactEmail(data: ContactData) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (apiKey && to && from) return sendWithResend(data, apiKey, to, from);
  if (process.env.SMTP_HOST) return sendWithSmtp(data);
  throw new EmailConfigurationError("Configuração de e-mail ausente.");
}
