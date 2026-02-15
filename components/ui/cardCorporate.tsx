// cardCorporate.tsx
import { CorporateProject } from '@/content/projectsCorporate';
import React from 'react';

interface CorporateProjectCardProps {
  project: CorporateProject;
  onClick: () => void;
}

export const CorporateProjectCard: React.FC<CorporateProjectCardProps> = ({ 
  project, 
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-slate-800/40 border border-blue-500/15 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:bg-slate-800/60 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_var(--accent-color)] overflow-hidden"
      style={
        {
          '--accent-color': project.accentColor,
        } as React.CSSProperties
      }
    >
      {/* Top gradient line on hover */}
      <div 
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, transparent)`
        }}
      />

      {/* Private badge */}
      <div className="absolute top-4 right-4 px-2.5 py-1 bg-blue-500/15 border border-blue-500/30 rounded-xl text-[10px] text-blue-400 uppercase tracking-wider font-semibold font-mono">
        Privado
      </div>

      {/* Icon */}
      <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-4">
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
      <button className="w-full px-3 py-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-blue-400 text-[13px] font-semibold font-mono flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-500/15 hover:border-blue-500">
        Ver detalhes
      </button>
    </div>
  );
};