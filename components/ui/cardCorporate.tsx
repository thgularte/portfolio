// cardCorporate.tsx
import { CorporateProject } from "@/content/projectsCorporate";
import React from "react";
import { HoverEffect } from "../effects/Hover";

interface CorporateProjectCardProps {
  project: CorporateProject;
  onClick: () => void;
}

export const CorporateProjectCard: React.FC<CorporateProjectCardProps> = ({
  project,
  onClick,
}) => {
  return (
    <HoverEffect className="rounded-2xl h-full" scale={1.02}>
      <div
        onClick={onClick}
        className="group relative bg-slate_dark/40 border border-cyan_stronger rounded-2xl p-8 cursor-pointer transition-all duration-300 h-full flex flex-col"
      >
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Private badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-cyan_stronger/15 border border-cyan_stronger/30 rounded-xl text-[10px] text-cyan_stronger uppercase tracking-wider font-semibold font-mono">
          Privado
        </div>

        {/* Icon */}
        <div className="w-12 h-12 bg-cyan_stronger/10 border border-cyan_stronger/20 rounded-xl flex items-center justify-center text-2xl mb-4">
          {project.icon}
        </div>

        {/* Content */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-slate-100 mb-2 font-mono">
            {project.title}
          </h3>
          <span className="text-xs text-slate-500 block mb-4 font-mono opacity-60">
            {project.subtitle}
          </span>
          <p className="text-sm text-slate-400 leading-relaxed font-mono">
            {project.description}
          </p>
        </div>

        {/* View details button */}
        <button className="mt-auto w-full px-3 py-3 bg-cyan_stronger/8 border border-cyan_stronger/20 rounded-xl text-cyan_stronger text-[13px] font-semibold font-mono flex items-center justify-center gap-2 transition-all duration-300 hover:bg-cyan_stronger/15 hover:border-cyan_stronger">
          Ver detalhes
        </button>
      </div>
    </HoverEffect>
  );
};
