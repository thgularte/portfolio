import { FolderOpen, GitFork, Star } from "lucide-react";
import type { Repository } from "@/types";
import { Badge, Card, ExternalLink, IconBox } from "../ui/primitives";

export function RepositoryCard({
  repository,
  featured = false,
}: {
  repository: Repository;
  featured?: boolean;
}) {
  return (
    <Card
      variant="compact"
      className={`flex min-w-0 shrink-0 flex-col ${featured ? "md:min-h-88" : "min-h-44"}`}
    >
      <h3
        className={`mb-3 flex items-center gap-3 border-b border-line pb-3 text-primary ${featured ? "text-2xl" : "text-xl"}`}
      >
        <IconBox variant="primary" className="size-9">
          <FolderOpen size={23} />
        </IconBox>
        {featured ? (
          "Projetos destaque"
        ) : (
          <ExternalLink href={repository.url}>{repository.name}</ExternalLink>
        )}
      </h3>
      {featured && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg">{repository.name}</h4>
          <ExternalLink href={repository.url} className="text-sm">
            Ver repositório
          </ExternalLink>
        </div>
      )}
      <p className="mb-4 text-base leading-tight text-soft">
        {repository.description ||
          "Explore o código e a documentação deste projeto no GitHub."}
      </p>
      {repository.topics.length > 0 && (
        <p className="mb-3 text-sm text-soft/70">
          {repository.topics.join(" · ")}
        </p>
      )}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
        <div className="flex flex-wrap gap-2">
          {repository.language && <Badge>{repository.language}</Badge>}
          {repository.homepage && (
            <ExternalLink href={repository.homepage} className="text-sm">
              Ver projeto
            </ExternalLink>
          )}
        </div>
        <div className="flex gap-3 text-sm text-soft/80">
          <span
            className="inline-flex items-center gap-1"
            aria-label={`${repository.stars} estrelas`}
          >
            <Star size={13} aria-hidden="true" />
            {repository.stars}
          </span>
          <span
            className="inline-flex items-center gap-1"
            aria-label={`${repository.forks} forks`}
          >
            <GitFork size={13} aria-hidden="true" />
            {repository.forks}
          </span>
        </div>
      </div>
      <p className="mt-2 text-xs text-soft/65">
        Atualizado em{" "}
        <time dateTime={repository.updatedAt}>
          {new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
            new Date(repository.updatedAt),
          )}
        </time>
      </p>
    </Card>
  );
}
