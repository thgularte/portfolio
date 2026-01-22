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
    <section id="skills" className="py-8 bg-brown_light border border-brown_medium/20"> 
      <Container>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-center text-brown_medium"> 
          Minhas habilidades
        </h2>

        <div className="grid md:grid-cols-2 gap-6"> 
          {/* Soft Skills */}
          <div className="bg-gray_light p-6 rounded-xl border border-details/30 shadow-md"> 
            <h3 className="text-xl font-bold mb-4 text-details flex items-center gap-2">
              <span className="w-1.5 h-8 bg-details rounded-full"></span>
              {softSkills.title}
            </h3>
            <ul className="space-y-2 text-base text-details/80">
              {softSkills.items.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>

          {/* Hard Skills */}
          <div className="bg-gray_light p-6 rounded-xl border border-details/30 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-details flex items-center gap-2">
              <span className="w-1.5 h-8 bg-details rounded-full"></span>
              {hardSkills.title}
            </h3>
            <ul className="space-y-2 text-base text-details/80">
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
