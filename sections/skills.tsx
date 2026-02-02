import { Container } from "@/components/layout/container";

interface SkillSection {
  title: string;
  items: string[];
}

interface SkillsProps {
  softSkills: SkillSection;
  hardSkills: SkillSection;
}

export default function Skills({ 
  softSkills, 
  hardSkills 
}: SkillsProps) { 
  return (
    <section id="skills" className="py-8 md:py-12 bg-slate_dark border border-cyan_medium_transparent-alpha/20"> 
      <Container>
        <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 text-center text-cyan_medium_transparent-alpha"> 
          Minhas habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"> 
          {/* Soft Skills */}
          <div className="bg-slate_light p-4 md:p-6 rounded-xl border border-details/30 shadow-md"> 
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-details flex items-center gap-2">
              <span className="w-1 md:w-1.5 h-6 md:h-8 bg-details rounded-full"></span>
              {softSkills.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-details/80 text-dark_deepest">
              {softSkills.items.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>

          {/* Hard Skills */}
          <div className="bg-slate_light p-4 md:p-6 rounded-xl border border-details/30 shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-details flex items-center gap-2">
              <span className="w-1 md:w-1.5 h-6 md:h-8 bg-details rounded-full"></span>
              {hardSkills.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-details/80 text-dark_deepest">
              {hardSkills.items.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}