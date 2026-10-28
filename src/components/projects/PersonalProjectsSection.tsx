import { getGithubProjects } from "@/lib/github";
import { CONTACT } from "@/data/contact";
import { PageContainer } from "../layout/PageContainer";
import { SectionTitle } from "../typography/sections";
import { Card, ExternalLink } from "../ui/primitives";
import { RepositoryCard } from "./RepositoryCard";

export async function PersonalProjectsSection() {
  const { repositories, unavailable, complete } = await getGithubProjects();
  const featured =
    repositories.find((repo) => repo.featured) || repositories[0];
  const others = repositories.filter((repo) => repo !== featured);
  return (
    <section className="pb-section pt-10" aria-label="Projetos pessoais">
      <PageContainer>
        <SectionTitle highlightedText="Projetos pessoais" center />
        {featured ? (
          <div className="mt-16 grid gap-6 md:grid-cols-[1fr_1.85fr]">
            <RepositoryCard repository={featured} featured />
            <div
              className="flex flex-col gap-6 md:max-h-110 md:overflow-y-auto md:pr-3"
              tabIndex={others.length > 2 ? 0 : undefined}
              role={others.length > 2 ? "region" : undefined}
              aria-label={
                others.length > 2
                  ? "Mais repositórios — role para explorar"
                  : undefined
              }
            >
              {others.map((repo) => (
                <RepositoryCard key={repo.url} repository={repo} />
              ))}
            </div>
          </div>
        ) : (
          <Card className="mt-12 text-center">
            <p className="mb-4">Não foi possível carregar os projetos agora.</p>
            <ExternalLink href={CONTACT.github}>
              Ver projetos no GitHub
            </ExternalLink>
          </Card>
        )}
        {!complete && featured && (
          <p className="mt-5 text-base text-soft">
            A lista completa está temporariamente indisponível. Exibindo os
            projetos selecionados.{" "}
            <ExternalLink href={CONTACT.github}>Visite o GitHub</ExternalLink>
          </p>
        )}
        {complete && unavailable > 0 && featured && (
          <p className="mt-5 text-base text-soft">
            Alguns repositórios estão indisponíveis no momento.{" "}
            <ExternalLink href={CONTACT.github}>Visite o GitHub</ExternalLink>
          </p>
        )}
        {featured && (
          <div className="mt-6 text-center">
            <ExternalLink href={CONTACT.github}>
              Abrir perfil no GitHub
            </ExternalLink>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
