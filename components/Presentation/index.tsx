import Image from "next/image";
import { HoverEffect } from "../effects/Hover";
import HobbiesSection from "../ui/dropHobbies";
import { profileData } from "@/content/about";

export default function PresetantionSection() {
  return (
    <div className="mt-12 max-w-7xl mx-auto space-y-16">
      
      {/* ====== BLOCO SUPERIOR ====== */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* TEXTO */}
        <div className="flex-1 text-lg text-gray_light leading-relaxed">
          <p className="text-justify">
            Sou desenvolvedor full-stack apaixonado por criar soluções que fazem
            sentido na prática, usando principalmente TypeScript, React,
            Electron e Next.js. Durante a faculdade, percebi que programar não é
            só uma atividade técnica, mas também uma forma de explorar
            criatividade, aprender constantemente e colaborar com outras
            pessoas.
          </p>

          <p className="mt-4 text-justify">
            Gosto de ambientes calmos e colaborativos, onde posso entender os
            desafios com profundidade e ajudar a equipe a evoluir. Fora do mundo
            do código, encontro inspiração em livros, filmes e nos pequenos
            momentos de silêncio que ajudam a organizar ideias e recarregar a
            criatividade.
          </p>
        </div>

        {/* FOTO */}
        <div className="relative w-[260px] h-[320px] flex-shrink-0">
          {/* glow sutil atrás */}
          <div className="absolute inset-0 bg-cyan_stronger/20 blur-3xl rounded-full"></div>

          <HoverEffect scale={1.08}>
            <Image
              src="/about.jpeg"
              alt="Foto de perfil"
              width={300}
              height={400}
              className="relative rounded-2xl object-cover shadow-2xl border border-cyan_stronger/90 w-full h-full"
              priority
            />
          </HoverEffect>

          <span className="block text-center text- text-gray_light mt-5">
            Entre códigos e cafés ☕
          </span>
        </div>
      </div>

      {/* ====== BLOCO INFERIOR - HOBBIES EM CARDS ====== */}
      <div className="mt-20">
        <HobbiesSection profileData={profileData} />
      </div>
    </div>
  );
}