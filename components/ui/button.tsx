"use client";

import React from "react";
import Image from "next/image";

interface ReusableButtonProps {
  text: string;
  icon?: string;
  width?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  text,
  icon,
  width,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${width}
        flex items-center justify-center gap-3
        px-6 py-4
        rounded-2xl
        bg-cyan_stronger
        text-gray_light
        font-semibold
        transition
        hover:brightness-110
        focus:outline-none focus:ring-2 focus:ring-cyan_stronger focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {icon && (
        <Image
          src={icon}
          alt="Ícone do botão"
          width={18}
          height={18}
        />
      )}

      <span className="leading-none">{text}</span>
    </button>
  );
};

export default ReusableButton;
