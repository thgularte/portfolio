"use client";

import React, { ChangeEvent } from "react";
import Image from "next/image";

interface ReusableInputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  width: string;
  value?: string;
  type?: string;
  id?: string;

  label?: string;
  iconPath?: string; // 👈 caminho do ícone
}

const ReusableInput: React.FC<ReusableInputProps> = ({
  placeholder,
  onChange,
  width,
  value = "",
  type = "text",
  id = "reusable-input",
  label,
  iconPath,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${width}`}>
      {/* Label com ícone */}
      {(label || iconPath) && (
        <label
          htmlFor={id}
          className="flex items-center gap-2 text-sm text-white font-medium"
        >
          {iconPath && (
            <Image
              src={iconPath}
              alt={label ?? "icon"}
              width={14}
              height={14}
            />
          )}
          {label}
        </label>
      )}

      {/* Input */}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          px-4 py-2
          bg-gray_light
          text-slate_dark
          placeholder:text-slate_medium
          rounded-2xl
          border border-gray_dark
          focus:outline-none
          focus:ring-2 focus:ring-cyan_stronger
          focus:border-transparent
          transition
        "
      />
    </div>
  );
};

export default ReusableInput;
