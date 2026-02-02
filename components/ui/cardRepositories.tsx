import React from "react";
import Image from "next/image";

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
    <div className="w-full max-w-xs bg-slate_dark border border-gray_light rounded-lg shadow-md overflow-hidden mx-auto mb-4 flex flex-col justify-between h-[380px]">
      {/* Header com ícones */}
      <div className="bg-slate_dark px-3 py-3 flex items-center justify-between">
        <Image
          src={"/icons/icon_repo.svg"}
          alt={"Ícone de uma pasta"}
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div className="flex items-center">
          <Image
            src={"/icons/icon_github.svg"}
            alt={"Logo do GitHub"}
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="px-3 pb-4 flex flex-col flex-1">
        {/* Título */}
        <h3 className="font-bold text-base text-gray_light mb-1">
          {title}
        </h3>

        {/* Repositório clicável */}
        <div className="mb-2">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray_light hover:text-cyan_stronger text-xs font-medium hover:underline flex items-center"
          >
            Repositório
            <svg
              className="w-3 h-3 ml-1"
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

        {/* Descrição com altura fixa e overflow auto */}
        <div className="flex-1 mb-2">
          <p className="text-xs text-gray_light leading-relaxed h-[140px] overflow-auto">
            <span className="font-semibold">Descrição:</span> {description}
          </p>
        </div>

        {/* Linguagens */}
        <div>
          <p className="text-xs text-gray_light mb-1 font-medium">
            Linguagens usadas:
          </p>
          <div className="flex flex-wrap gap-1">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray_light text-slate_medium text-xs font-bold rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
