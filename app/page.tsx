import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AvatarRotation } from "@/components/ui/avatar_rotation";
import { DescriptionHome } from "@/sections/descritionHome";
import Skills from "@/sections/skills";
import Stacks from "@/sections/stacks";

export default function Home() {
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
      "Pesquisa e otimização de código"
    ],
  };
  return (
    <>
      <Header activeLinkId="home" />
        <DescriptionHome />
        <Skills softSkills={softSkills} hardSkills={hardSkills} />
        <Stacks />
      <Footer />
    </>
  );
}
