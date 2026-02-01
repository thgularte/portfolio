import ProjectCarousel from "@/components/ProjectsCarousel";
import SectionHeader from "@/components/Section_Header";
import { Container } from "@/components/layout/container";
import { useRepos } from "@/hook/useGithubProjects";

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
    <section className="mt-20">
      <Container>
        <SectionHeader
          icon="icons/icon_project.svg"
          title="Projetos desenvolvidos"
          subtitle="Alguns dos projetos que desenvolvi ao longo da minha jornada"
        />

        {loading && <p>Carregando projetos...</p>}
        {error && <p>Erro ao carregar projetos: {error}</p>}

        {!loading && !error && <ProjectCarousel projetos={projects} />}
      </Container>
    </section>
  );
}
