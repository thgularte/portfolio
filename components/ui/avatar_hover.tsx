"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarHoverProps {
  primaryImage: string;
  secondaryImage: string;
}

export function AvatarHover({
  primaryImage,
  secondaryImage,
}: AvatarHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-60 h-60 md:w-80 md:h-80
                 cursor-pointer overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* AVATAR (BORDA + CORTE) */}
      <div
        className="relative w-full h-full
                   rounded-full
                   border-4 md:border-8 border-gray_light
                   shadow-2xl
                   overflow-hidden"
      >
        {/* IMAGEM PRINCIPAL */}
        <Image
          src={primaryImage}
          alt="Avatar principal"
          fill
          className={`object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          priority
        />

        {/* IMAGEM HOVER */}
        <Image
          src={secondaryImage}
          alt="Avatar secundário"
          fill
          className={`object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* BADGE */}
      <div
        className="absolute -bottom-1 -right-2 md:-right-1
                   w-16 h-16 md:w-20 md:h-20
                   bg-cyan_stronger rounded-full
                   flex items-center justify-center
                   shadow-xl border-2 md:border-4 border-gray_light
                   pointer-events-none z-10"
      >
        <span
          className="text-slate_light text-[0.65rem] md:text-xs
                     font-bold uppercase tracking-wide text-center px-1"
        >
          Full Stack
        </span>
      </div>
    </div>
  );
}
