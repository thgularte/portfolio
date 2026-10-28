export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
  body: 24_576,
} as const;
export type ContactField = "name" | "email" | "message";
export type ContactErrors = Partial<Record<ContactField, string>>;
export interface ContactData {
  name: string;
  email: string;
  message: string;
}
type ValidationResult =
  | { ok: true; data: ContactData; honeypot: boolean }
  | { ok: false; errors: ContactErrors };

export function validateContact(value: unknown): ValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return {
      ok: false,
      errors: {
        name: "Informe seu nome.",
        email: "Informe um e-mail válido.",
        message: "Escreva sua mensagem.",
      },
    };
  const input = value as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const errors: ContactErrors = {};
  if (
    !name ||
    name.length > CONTACT_LIMITS.name ||
    /[\r\n\x00-\x1f\x7f]/.test(name)
  )
    errors.name = "Informe um nome de até 100 caracteres.";
  if (
    !email ||
    email.length > CONTACT_LIMITS.email ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
    /[\x00-\x1f\x7f]/.test(email)
  )
    errors.email = "Informe um e-mail válido de até 254 caracteres.";
  if (
    !message ||
    message.length > CONTACT_LIMITS.message ||
    message.includes("\0")
  )
    errors.message = "Escreva uma mensagem de até 5.000 caracteres.";
  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: { name, email, message },
    honeypot: input.website !== undefined && input.website !== "",
  };
}
