"use client";

import React, { useState } from "react";
import ReusableInput from "../ui/input";
import Button from "../ui/button";

export default function FormEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="
        w-full
        max-w-4xl
        mx-auto
        bg-slate_dark
        border-2 border-gray_light
        rounded-2xl
        p-6
        flex flex-col gap-6
      "
    >
      {/* Linha Nome + Email */}
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

      {/* Mensagem */}
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
            w-full
            min-h-[120px]
            px-4 py-3
            bg-gray_light
            text-slate_dark
            placeholder:text-slate_medium
            rounded-2xl
            border border-gray_dark
            focus:outline-none
            focus:ring-2 focus:ring-cyan_stronger
            focus:border-transparent
            transition
            resize-none
          "
        />
      </div>

      {/* Botão */}
      <Button text="Enviar" icon="/icons/icon_submit.svg" type="submit" />
    </form>
  );
}
