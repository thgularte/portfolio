"use client";

/**
 * Componente AvatarRotation com efeito hover giratório.
 * 
 * Avatar circular que gira como moeda no hover, trocando entre duas imagens.
 * Badge "Full Stack" circular fixo sobre imagem no canto inferior direito.
 * 
 * @param props - Propriedades do componente
 * @param props.primaryImage - Imagem inicial (ex: foto formatura)
 * @param props.secondaryImage - Imagem do hover (ex: foto tech)
 * 
 * @example
 * ```tsx
 * <AvatarRotation 
 *   primaryImage="/formatura.jpg"
 *   secondaryImage="/tech.jpg" 
 * />
 * ```
 */

import { useState } from "react";
import Image from "next/image";

interface AvatarRotationProps {
  primaryImage: string;
  secondaryImage: string;
}

export function AvatarRotation({ primaryImage, secondaryImage }: AvatarRotationProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 md:border-8 border-dark_medium shadow-2xl overflow-visible cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
          isHovered ? 'rotateY-180 opacity-0 scale-110' : 'rotateY-0 opacity-100 scale-100'
        }`}
      >
        <Image src={primaryImage} alt="Principal" fill className="object-cover rounded-full" priority />
      </div>
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
          isHovered ? 'rotateY-0 opacity-100 scale-100' : 'rotateY-180 opacity-0 scale-110'
        }`}
      >
        <Image src={secondaryImage} alt="Secundária" fill className="object-cover rounded-full" priority />
      </div>

      <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-16 h-16 md:w-20 md:h-20 bg-dark_light rounded-full flex items-center justify-center shadow-xl border-2 md:border-4 border-dark_medium pointer-events-none z-10">
        <span className="text-dark_medium text-[0.65rem] md:text-xs font-bold uppercase tracking-wide text-center px-1">Full Stack</span>
      </div>
    </div>
  );
}