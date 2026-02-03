import { DescriptionHome } from "./descritionHome";
import Skills from "../components/Skills";
import Stacks from "../components/Stacks";

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
    <section>
      <DescriptionHome />
      <Skills softSkills={softSkills} hardSkills={hardSkills} />
      <Stacks />
    </section>
  );
}
