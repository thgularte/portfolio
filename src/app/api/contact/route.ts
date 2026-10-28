import { CONTACT_LIMITS, validateContact } from "@/lib/contact-validation";
import {
  EmailConfigurationError,
  EmailDeliveryError,
  sendContactEmail,
} from "@/lib/email";
export const runtime = "nodejs";
export const maxDuration = 20;
const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

async function readLimitedBody(request: Request) {
  if (Number(request.headers.get("content-length")) > CONTACT_LIMITS.body)
    throw new RangeError("Body too large");
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("Missing body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > CONTACT_LIMITS.body) {
        await reader.cancel();
        throw new RangeError("Body too large");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(
    new TextDecoder("utf-8", { fatal: true }).decode(bytes),
  ) as unknown;
}

export async function POST(request: Request) {
  if (
    request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !==
    "application/json"
  )
    return json({ message: "Envie os dados no formato JSON." }, 415);
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const originUrl = new URL(origin);
      // Next.js pode usar o hostname interno em request.url; Host é o destino público da requisição.
      const requestHost =
        request.headers.get("host") || new URL(request.url).host;
      if (
        !["https:", "http:"].includes(originUrl.protocol) ||
        originUrl.origin !== origin ||
        originUrl.host !== requestHost.toLowerCase()
      ) {
        return json({ message: "Origem da solicitação inválida." }, 403);
      }
    } catch {
      return json({ message: "Origem da solicitação inválida." }, 403);
    }
  }
  let body: unknown;
  try {
    body = await readLimitedBody(request);
  } catch (error) {
    return json(
      {
        message:
          error instanceof RangeError
            ? "A mensagem excede o tamanho permitido."
            : "Não foi possível ler a mensagem.",
      },
      error instanceof RangeError ? 413 : 400,
    );
  }
  const validation = validateContact(body);
  if (!validation.ok)
    return json(
      { message: "Revise os campos indicados.", errors: validation.errors },
      422,
    );
  if (validation.honeypot)
    return json({ message: "Mensagem enviada com sucesso!" });
  try {
    await sendContactEmail(validation.data);
    return json({
      message: "Mensagem enviada com sucesso! Obrigado pelo contato.",
    });
  } catch (error) {
    // Não retornar nem registrar payloads, endereços de configuração ou credenciais.
    console.error(
      "[contact]",
      error instanceof EmailConfigurationError
        ? "Email service not configured"
        : error instanceof EmailDeliveryError
          ? error.message
          : "Email delivery failed",
    );
    return json(
      {
        message:
          "Não foi possível enviar agora. Tente novamente ou use o contato direto por e-mail.",
      },
      error instanceof EmailConfigurationError ? 503 : 502,
    );
  }
}
