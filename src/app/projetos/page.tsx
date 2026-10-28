import { FolderOpen } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  PageHero,
  SectionDivider,
  SectionTitle,
} from "@/components/typography/sections";
import { PersonalProjectsSection } from "@/components/projects/PersonalProjectsSection";
import { GithubActivity } from "@/components/projects/GithubActivity";
import { CorporateProjectAccordion } from "@/components/projects/CorporateProjectAccordion";
import { corporateProjects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Projetos",
  "Projetos pessoais no GitHub e aplicações corporativas desenvolvidas por Theodor Gularte.",
  "/projetos",
);
export const revalidate = 3600;
export default function ProjectsPage() {
  return (
    <>
      <PageHero
        icon={<FolderOpen />}
        title="Projetos"
        highlightedText="Desenvolvidos"
        subtitle="Alguns dos projetos que desenvolvi ao longo da minha jornada"
      />
      <PersonalProjectsSection />
      <GithubActivity />
      <SectionDivider />
      <section id="corporativos" className="scroll-mt-8 pb-section pt-10">
        <PageContainer>
          <SectionTitle title="Projetos Corporativos" center />
          <div className="mt-16 space-y-4">
            {corporateProjects.map((project, index) => (
              <CorporateProjectAccordion
                key={project.id}
                project={project}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
