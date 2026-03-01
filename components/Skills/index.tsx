import { Container } from "@/components/layout/container";
import { HoverEffect } from "../effects/Hover";

interface SkillSection {
  title: string;
  items: string[];
}

interface SkillsProps {
  softSkills: SkillSection;
  hardSkills: SkillSection;
}

export default function Skills({ softSkills, hardSkills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-10 md:py-14 bg-slate_dark border-t border-b border-gray_light"
    >
      <Container>
        <h2 className="text-3xl md:text-3xl font-black mb-8 text-center text-gray_light">
          Minhas habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Soft Skills */}
          <HoverEffect>
            <div className="bg-slate_light p-5 md:p-7 rounded-xl border border-cyan_stronger/30 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan_stronger flex items-center gap-3">
                <span className="w-1.5 h-8 bg-cyan_stronger rounded-full"></span>
                {softSkills.title}
              </h3>

              <ul className="space-y-2 text-xl md:text-xl leading-relaxed text-dark_deepest">
                {softSkills.items.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </HoverEffect>

          {/* Hard Skills */}
          <HoverEffect>
            <div className="bg-slate_light p-5 md:p-7 rounded-xl border border-cyan_stronger/30 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan_stronger flex items-center gap-3">
                <span className="w-1.5 h-8 bg-cyan_stronger rounded-full"></span>
                {hardSkills.title}
              </h3>

              <ul className="space-y-2 text-xl md:text-xl leading-relaxed text-dark_deepest">
                {hardSkills.items.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </HoverEffect>
        </div>
      </Container>
    </section>
  );
}
