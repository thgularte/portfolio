import ProjectCarousel from "@/components/ProjectsCarousel";
import SectionHeader from "@/components/Section_Header";
import { Container } from "@/components/layout/container";
import GithubContributions from "@/components/PaintingGibhub";
import { useRepos } from "@/hook/useGithubProjects";
import Reveal from "@/components/effects/Reveal";

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

          {loading && <p>Carregando projetos...</p>}
          {error && <p>Erro ao carregar projetos: {error}</p>}

          {!loading && !error && <ProjectCarousel projetos={projects} />}
        </Container>
      </section>
    </Reveal>
  );
}
