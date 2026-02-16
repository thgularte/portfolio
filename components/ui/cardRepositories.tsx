import React from "react";
import Image from "next/image";
import { HoverEffect } from "../effects/Hover";

interface CardProps {
  title: string;
  repoLink: string;
  description: string;
  languages: string[];
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  repoLink,
  description,
  languages,
}) => {
  return (
    <HoverEffect className="group bg-slate_dark border border-slate_medium hover:border-cyan_stronger rounded-xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-between h-[480px] w-full transition-all duration-300">
      {/* Header com ícones e gradiente sutil */}
      <div className="relative bg-gradient-to-br from-slate_medium/30 to-slate_dark px-4 py-4 flex items-center justify-between border-b border-slate_medium/50">
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/icon_repo.svg"}
            alt={"Ícone de uma pasta"}
            width={36}
            height={36}
            className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src={"/icons/icon_github.svg"}
            alt={"Logo do GitHub"}
            width={36}
            height={36}
            className="w-8 h-8 opacity-80 hover:opacity-100"
          />
        </a>
        {/* Detalhe decorativo */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan_stronger/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col flex-1">
        {/* Título */}
        <h3 className="font-bold text-lg text-gray_light mb-2 group-hover:text-cyan_stronger transition-colors">
          {title}
        </h3>

        {/* Repositório clicável com melhor estilo */}
        <div className="mb-3">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray_light/80 hover:text-cyan_stronger text-xs font-medium transition-all group/link"
          >
            <span className="group-hover/link:underline">Ver repositório</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Descrição com estilo melhorado */}
        <div className="flex-1">
          <div className="relative">
            <p className="text-sm text-gray_light/90 leading-relaxed h-[230px] overflow-auto pr-2 custom-scrollbar">
              {description}
            </p>
            {/* Gradiente de fade no final */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate_dark to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Linguagens com design melhorado */}
        <div className="pt-5 border-t border-slate_medium/30">
          <p className="text-xs text-gray_light/70 mb-2 font-medium uppercase tracking-wide">
            Tecnologias
          </p>
          <div className="flex flex-wrap gap-1.5 min-h-[28px]">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-cyan_stronger/10 to-cyan_stronger/5 border border-cyan_stronger/30 text-gray_light text-xs font-semibold rounded-full hover:border-cyan_stronger/60 hover:bg-cyan_stronger/20 transition-all cursor-default whitespace-nowrap"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </HoverEffect>
  );
};

export default ProjectCard;