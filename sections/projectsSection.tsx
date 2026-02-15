import ProjectCarousel from "@/components/ProjectsCarousel";
import SectionHeader from "@/components/SectionHeader";
import { Container } from "@/components/layout/container";
import GithubContributions from "@/components/PaintingGibhub";
import { useRepos } from "@/hook/useGithubProjects";
import Reveal from "@/components/effects/Reveal";
import {
  CorporateProject
} from "@/content/projectsCorporate";
import { useState } from "react";
import ProjectsCorporate from "@/components/CardsCorporate";

export default function SectionProjects() {
  // chama o hook
  const { repos, loading, error } = useRepos();

  // transforma os repos no formato que ProjectCarousel espera
  const projects = repos.map((r) => ({
    title: r.name,
    repoLink: r.html_url,
    description: r.description || "Sem descrição",
    languages: r.language ? [r.language] : [],
  }));
  const [selectedProject, setSelectedProject] =
    useState<CorporateProject | null>(null);

  const openModal = (project: CorporateProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <Reveal>
      <section className="mt-15">
        <Container>
          <SectionHeader
            icon="icons/icon_project.svg"
            title="Projetos desenvolvidos"
            subtitle="Alguns dos projetos que desenvolvi ao longo da minha jornada"
          />

          <GithubContributions />

          <div className="flex items-center gap-4 mb-10">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <span className="px-5 py-2 bg-blue-500/5 border border-blue-500/20 rounded-full text-xs text-blue-400 uppercase tracking-wider font-semibold font-mono">
              Projetos pessoais
            </span>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          {loading && <p>Carregando projetos...</p>}
          {error && <p>Erro ao carregar projetos: {error}</p>}

          {!loading && !error && <ProjectCarousel projetos={projects} />}

          <div className="flex items-center gap-4 mb-10">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <span className="px-5 py-2 bg-blue-500/5 border border-blue-500/20 rounded-full text-xs text-blue-400 uppercase tracking-wider font-semibold font-mono">
              🏢 Projetos Corporativos
            </span>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          <ProjectsCorporate />
        </Container>
      </section>
    </Reveal>
  );
}
