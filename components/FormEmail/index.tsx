"use client";

import React, { useState } from "react";
import ReusableInput from "../ui/input";
import Button from "../ui/button";

export default function FormEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Falha ao enviar.");
      }

      setStatus({ type: "ok", msg: "Mensagem enviada com sucesso!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus({ type: "error", msg: err?.message || "Erro ao enviar." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="
        w-full max-w-4xl mx-auto
        bg-slate_dark border-2 border-gray_light
        rounded-lg p-6 flex flex-col gap-6
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReusableInput
          label="Nome"
          iconPath="/icons/icon_user.svg"
          placeholder="Seu nome"
          width="w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <ReusableInput
          label="E-mail"
          iconPath="/icons/icon_gmail.svg"
          placeholder="seu@email.com"
          type="email"
          width="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm text-white font-medium">
          <img src="/icons/icon_message.svg" alt="" className="w-4 h-4" />
          Mensagem
        </label>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem aqui..."
          className="
            w-full min-h-[120px]
            px-4 py-3 bg-gray_light text-slate_dark
            placeholder:text-slate_medium rounded-lg
            border border-gray_dark
            focus:outline-none focus:ring-2 focus:ring-cyan_stronger
            focus:border-transparent transition resize-none
          "
        />
      </div>

      {status && (
        <p className={`text-sm ${status.type === "ok" ? "text-green-400" : "text-red-400"}`}>
          {status.msg}
        </p>
      )}

      <Button
        text={loading ? "Enviando..." : "Enviar"}
        icon="/icons/icon_submit.svg"
        type="submit"
      />
    </form>
  );
}