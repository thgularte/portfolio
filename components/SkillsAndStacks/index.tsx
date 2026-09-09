import { Container } from "@/components/layout/container";
import Reveal from "@/components/effects/Reveal";
import { HoverEffect } from "@/components/effects/Hover";
import Image from "next/image";

interface SkillSection {
  title: string;
  items: string[];
}

interface SkillsAndStacksProps {
  softSkills: SkillSection;
  hardSkills: SkillSection;
}

const technologies = [
  { name: "TypeScript", icon: "/icons/icon_typescript.svg", alt: "TypeScript" },
  { name: "Python", icon: "/icons/icon_python.svg", alt: "Python" },
  { name: "Electron", icon: "/icons/icon_electron.svg", alt: "Electron" },
  { name: "JavaScript", icon: "/icons/icon_javascript.svg", alt: "JavaScript" },
  { name: "Node.js", icon: "/icons/icon_node.svg", alt: "Node.js" },
  { name: "React", icon: "/icons/icon_react.svg", alt: "React" },
  { name: "Tailwind", icon: "/icons/icon_tailwind.svg", alt: "Tailwind CSS" },
  { name: "PostgreSQL", icon: "/icons/icon_postgres.svg", alt: "PostgreSQL" },
];

export default function SkillsAndStacks({ softSkills, hardSkills }: SkillsAndStacksProps) {
  return (
    <section id="skills" className="py-12 bg-slate_dark">
      <Container>
        {/* Cabeçalho da Seção */}
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-mono text-center mb-10 text-gray_light font-bold">
            <span className="text-cyan_stronger">//</span> SKILLS & STACK
          </h2>
        </Reveal>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* Soft Skills */}
          <Reveal>
            <HoverEffect scale={1.02} className="h-full">
              <div className="h-full bg-slate_light p-6 md:p-8 rounded-2xl border border-cyan_stronger/20 hover:border-cyan_stronger/40 shadow-lg transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan_stronger flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-cyan_stronger rounded-full"></span>
                  {softSkills.title}
                </h3>
                <ul className="space-y-3 text-base md:text-lg leading-relaxed text-gray_light/95 font-mono">
                  {softSkills.items.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan_stronger">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverEffect>
          </Reveal>

          {/* Hard Skills */}
          <Reveal>
            <HoverEffect scale={1.02} className="h-full">
              <div className="h-full bg-slate_light p-6 md:p-8 rounded-2xl border border-cyan_stronger/20 hover:border-cyan_stronger/40 shadow-lg transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan_stronger flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-cyan_stronger rounded-full"></span>
                  {hardSkills.title}
                </h3>
                <ul className="space-y-3 text-base md:text-lg leading-relaxed text-gray_light/95 font-mono">
                  {hardSkills.items.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan_stronger">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverEffect>
          </Reveal>
        </div>

        {/* Seção de Stacks Unificada */}
        <Reveal>
          <div className="p-6 md:p-8 rounded-2xl border border-slate_medium/30 bg-slate_light/40 backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-mono font-bold mb-6 text-center text-gray_light/95">
              Stack's
            </h3>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center">
              {technologies.map((tech) => (
                <HoverEffect key={tech.name} scale={1.1}>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate_dark border border-slate_medium/30 hover:border-cyan_stronger/50 transition-colors duration-200 cursor-pointer">
                    <Image
                      src={tech.icon}
                      alt={tech.alt}
                      width={24}
                      height={24}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <span className="text-xs md:text-sm text-gray_light font-mono font-medium">
                      {tech.name}
                    </span>
                  </div>
                </HoverEffect>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
