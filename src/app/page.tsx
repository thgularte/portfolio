import { HomeHero } from "@/components/home/HomeHero";
import {
  FeaturedProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/home/HomeSections";
import { SectionDivider } from "@/components/typography/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Desenvolvedor Full Stack",
  "Conheça Theodor Gularte: desenvolvimento full-stack, projetos, tecnologias e experiências profissionais.",
  "/",
);
export default function Home() {
  return (
    <>
      <HomeHero />
      <SectionDivider />
      <FeaturedProjectsSection />
      <SectionDivider />
      <SkillsSection />
      <TestimonialsSection />
    </>
  );
}
