// modalCorporate.tsx
import { CorporateProject } from '@/content/projectsCorporate';
import React, { useEffect } from 'react';

interface CorporateProjectModalProps {
  project: CorporateProject | null;
  onClose: () => void;
}

export const CorporateProjectModal: React.FC<CorporateProjectModalProps> = ({
  project,
  onClose
}) => {

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="inset-0 flex items-start justify-center z-1000 p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-blue-500/20 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto p-10 relative shadow-xl"
        style={
          {
            '--accent-color': project.accentColor,
          } as React.CSSProperties
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 bg-white/5 border border-white/10 rounded-lg text-slate-400 flex items-center justify-center transition-all duration-300 hover:bg-red-500/15 hover:border-red-500 hover:text-red-500"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-start gap-6 mb-8 pb-6 border-b border-white/10">
          <div
            className="text-5xl"
            style={{
              filter: `drop-shadow(0 0 15px ${project.accentColor})`
            }}
          >
            {project.icon}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-slate-100 mb-2 font-mono">
              {project.title}
            </h2>

            <p
              className="text-sm mb-3 font-mono"
              style={{ color: project.accentColor }}
            >
              {project.subtitle}
            </p>

            <span className="inline-block px-3 py-1 bg-white/5 rounded-md text-xs text-slate-400 font-mono">
              {project.company}
            </span>
          </div>
        </div>

         <div className="flex flex-wrap gap-2.5 mb-8">
          {project.fullData.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-500/8 border border-blue-500/20 rounded-lg text-xs text-blue-400 font-semibold font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview section */}
        <div className="mb-8">
          <h3 
            className="text-sm uppercase tracking-wide mb-4 font-semibold font-mono flex items-center gap-2.5"
            style={{ color: project.accentColor }}
          >
            <span 
              className="w-0.5 h-4.5 rounded"
              style={{ background: project.accentColor }}
            />
            Visão Geral
          </h3>
          <p className="text-sm leading-relaxed text-slate-400 mb-3 font-mono">
            {project.description}
          </p>
          <p 
            className="text-sm leading-relaxed text-slate-500 mt-3 p-4 bg-blue-500/5 rounded-lg font-mono"
            style={{ borderLeft: `3px solid ${project.accentColor}` }}
          >
            {project.fullData.context}
          </p>
        </div>

        {/* Role section */}
        <div className="mb-8">
          <h3 
            className="text-sm uppercase tracking-wide mb-4 font-semibold font-mono flex items-center gap-2.5"
            style={{ color: project.accentColor }}
          >
            <span 
              className="w-0.5 h-4.5 rounded"
              style={{ background: project.accentColor }}
            />
            Minha Atuação
          </h3>
          <ul className="space-y-3">
            {project.fullData.role.map((item, idx) => (
              <li 
                key={idx}
                className="text-sm leading-relaxed text-slate-400 pl-6 relative font-mono"
              >
                <span 
                  className="absolute left-0 font-bold"
                  style={{ color: project.accentColor }}
                >
                  ▹
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges section */}
        <div className="mb-8">
          <h3 
            className="text-sm uppercase tracking-wide mb-4 font-semibold font-mono flex items-center gap-2.5"
            style={{ color: project.accentColor }}
          >
            <span 
              className="w-0.5 h-4.5 rounded"
              style={{ background: project.accentColor }}
            />
            Desafios Técnicos
          </h3>
          <ul className="space-y-3">
            {project.fullData.challenges.map((item, idx) => (
              <li 
                key={idx}
                className="text-sm leading-relaxed text-slate-400 pl-6 relative font-mono"
              >
                <span 
                  className="absolute left-0 font-bold"
                  style={{ color: project.accentColor }}
                >
                  ▹
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact section */}
        <div className="mb-8">
          <h3 
            className="text-sm uppercase tracking-wide mb-4 font-semibold font-mono flex items-center gap-2.5"
            style={{ color: project.accentColor }}
          >
            <span 
              className="w-0.5 h-4.5 rounded"
              style={{ background: project.accentColor }}
            />
            Impacto
          </h3>
          <ul className="space-y-3">
            {project.fullData.impact.map((item, idx) => (
              <li 
                key={idx}
                className="text-sm leading-relaxed text-slate-400 pl-6 relative font-mono"
              >
                <span 
                  className="absolute left-0 font-bold"
                  style={{ color: project.accentColor }}
                >
                  ▹
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights section */}
        <div>
          <h3 
            className="text-sm uppercase tracking-wide mb-4 font-semibold font-mono flex items-center gap-2.5"
            style={{ color: project.accentColor }}
          >
            <span 
              className="w-0.5 h-4.5 rounded"
              style={{ background: project.accentColor }}
            />
            Destaques do Projeto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            {project.fullData.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-[13px] text-slate-400 font-medium font-mono flex items-center gap-2.5"
              >
                <span 
                  className="font-bold text-base"
                  style={{ color: project.accentColor }}
                >
                  ✓
                </span>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar */
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(74, 133, 255, 0.05);
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(74, 133, 255, 0.2);
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 133, 255, 0.3);
        }
      `}</style>
      </div>
  );
};
