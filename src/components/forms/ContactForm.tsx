"use client";
import { useRef, useState, type FormEvent } from "react";
import { Mail, MessageSquare, Send, UserRound } from "lucide-react";
import {
  CONTACT_LIMITS,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact-validation";
import { Card, PrimaryButton } from "../ui/primitives";
import { FormField, TextArea, TextInput } from "./fields";

class ContactSubmissionError extends Error {}

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState("");
  const sending = useRef(false);
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const validation = validateContact(payload);
    setErrors({});
    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("error");
      setFeedback("Revise os campos indicados.");
      const field = Object.keys(validation.errors)[0];
      (form.elements.namedItem(field) as HTMLElement | null)?.focus();
      return;
    }
    sending.current = true;
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(18_000),
      });
      const result = await response.json();
      if (!response.ok) {
        if (result.errors) setErrors(result.errors as ContactErrors);
        throw new ContactSubmissionError(
          typeof result.message === "string"
            ? result.message
            : "Não foi possível enviar a mensagem.",
        );
      }
      setStatus("success");
      setFeedback("Mensagem enviada com sucesso! Obrigado pelo contato.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof ContactSubmissionError
          ? error.message
          : error instanceof Error && error.name === "TimeoutError"
            ? "O envio demorou mais que o esperado. Tente novamente ou use o e-mail abaixo."
            : "Não foi possível enviar agora. Confira sua conexão e tente novamente, ou use o e-mail abaixo.",
      );
    } finally {
      sending.current = false;
      requestAnimationFrame(() => feedbackRef.current?.focus());
    }
  }
  function fieldProps(name: ContactField) {
    return {
      id: name,
      name,
      required: true,
      maxLength: CONTACT_LIMITS[name],
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      disabled: status === "sending",
    };
  }
  return (
    <Card variant="outlined" className="rounded-panel bg-surface/70 p-6 sm:p-7">
      <form
        noValidate
        onSubmit={submit}
        aria-label="Formulário de contato"
        aria-busy={status === "sending"}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            id="name"
            label="Nome"
            icon={<UserRound size={19} aria-hidden="true" />}
            error={errors.name}
          >
            <TextInput
              {...fieldProps("name")}
              autoComplete="name"
              placeholder="Seu nome"
            />
          </FormField>
          <FormField
            id="email"
            label="E-mail"
            icon={<Mail size={19} aria-hidden="true" />}
            error={errors.email}
          >
            <TextInput
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              placeholder="seuemail@gmail.com"
            />
          </FormField>
        </div>
        <div className="mt-5">
          <FormField
            id="message"
            label="Mensagem"
            icon={<MessageSquare size={19} aria-hidden="true" />}
            error={errors.message}
          >
            <TextArea
              {...fieldProps("message")}
              rows={3}
              placeholder="Escreva sua mensagem aqui ..."
            />
          </FormField>
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            maxLength={200}
          />
        </div>
        <PrimaryButton
          type="submit"
          loading={status === "sending"}
          icon={<Send size={18} aria-hidden="true" />}
          className="mt-5 w-full"
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </PrimaryButton>
        <p
          ref={feedbackRef}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          tabIndex={-1}
          className={
            feedback
              ? `mt-4 rounded-sm border-l-2 pl-3 text-lg ${status === "success" ? "border-education" : "border-work"}`
              : "sr-only"
          }
        >
          {feedback}
        </p>
      </form>
    </Card>
  );
}
