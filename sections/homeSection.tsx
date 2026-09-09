import { DescriptionHome } from "./descritionHome";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsAndStacks from "@/components/SkillsAndStacks";
import Reveal from "@/components/effects/Reveal";
import { TestimonialsSection } from "@/components/FeedBacks";
import { Container } from "@/components/layout/container";
import { CustomDivider } from "@/components/ui/customDivider";

export default function SectionHome() {
  const softSkills = {
    title: "Habilidades Interpessoais",
    items: [
      "Liderança",
      "Gestão de equipe",
      "Aprendizado contínuo",
      "Autonomia e proatividade",
      "Comunicação e compartilhamento de conhecimento",
      "Planejamento e organização",
    ],
  };

  const hardSkills = {
    title: "Habilidades Técnicas",
    items: [
      "Desenvolvimento Full Stack",
      "Typescript e JavaScript",
      "React e Next.js",
      "Python",
      "CSS3, Tailwind CSS",
      "Banco de dados SQL",
      "Pesquisa e otimização de código",
    ],
  };

  return (
    <div className="bg-slate_light min-h-screen">
      <Reveal>
        <section>
          <DescriptionHome />
        </section>
      </Reveal>

      <CustomDivider />

      <FeaturedProjects />

      <CustomDivider />

      <SkillsAndStacks softSkills={softSkills} hardSkills={hardSkills} />

      <CustomDivider />

      <section className="bg-slate_dark py-12">
        <Container>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-mono text-center mb-8 text-gray_light font-bold">
              <span className="text-cyan_stronger">//</span> DEPOIMENTOS
            </h2>
          </Reveal>
        </Container>
        <TestimonialsSection />
      </section>
    </div>
  );
}