"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import ProjectCarousel from "@/components/ProjectsCarousel";
import { useRepos } from "@/hook/useGithubProjects";

export default function ProjectsPage() {
  const { repos, loading, error } = useRepos();

  // Mapeia os repositórios pro formato que o ProjectCarousel espera
  const projetos = repos.map((r) => ({
    title: r.name,
    repoLink: r.html_url,
    description: r.description || "Sem descrição",
    languages: r.language ? [r.language] : [],
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="projects" />
      <main className="flex-1">
        <Container>
          <h1 className="mb-4 text-xl font-bold">Meus Projetos</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
