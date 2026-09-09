import React from "react";

export function CustomDivider() {
  return (
    <div className="w-full flex items-center justify-center my-10 px-6">
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* Linha da esquerda para o meio (Branco -> Azul) */}
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-white/10 via-white to-cyan_stronger" />
        
        {/* Ponto de encontro central */}
        <div className="absolute w-2.5 h-2.5 rounded-full bg-cyan_stronger shadow-[0_0_10px_#1393ca] z-10" />

        {/* Linha da direita para o meio (Branco -> Azul, espelhado: Azul <- Branco) */}
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-cyan_stronger via-white to-white/10" />
      </div>
    </div>
  );
}
