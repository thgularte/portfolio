import { ChevronDown, Fish, Trees, Waves } from "lucide-react";
import type { CorporateProject } from "@/types";
import {
  Badge,
  BulletList,
  Card,
  ExternalLink,
  IconBox,
  TechTags,
} from "../ui/primitives";
const icons = { fish: Fish, waves: Waves, trees: Trees };

export function CorporateProjectAccordion({
  project,
  defaultOpen = false,
}: {
  project: CorporateProject;
  defaultOpen?: boolean;
}) {
  const Icon = icons[project.icon];
  return (
    <details
      className="corporate-details group"
      open={defaultOpen}
      id={project.id}
    >
      <summary className="corporate-summary list-none rounded-card bg-surface p-5 hover:bg-soft/15 sm:p-6">
        <div className="flex items-center gap-5">
          <IconBox variant="primary">
            <Icon size={25} />
          </IconBox>
          <div>
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm text-soft">
              {project.subtitle} · {project.company}
            </p>
          </div>
          <span className="ml-auto">
            {project.private && <Badge>Privado</Badge>}
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-base leading-tight text-soft">
          {project.description}
        </p>
        <span className="mt-1 flex items-center justify-end gap-1 text-base text-primary">
          Mais
          <ChevronDown
            className="accordion-chevron"
            size={18}
            aria-hidden="true"
          />
        </span>
      </summary>
      <Card className="mt-4 sm:p-10">
        <div className="mb-5">
          <h4 className="mb-3 text-xl text-primary">{"// "}Contexto</h4>
          <p className="mb-6 text-base leading-relaxed text-soft">
            {project.context}
          </p>
          <h4 className="mb-3 text-xl text-primary">{"// "}Tecnologias</h4>
          <TechTags items={project.technologies} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-xl text-primary">
              {"// "}Responsabilidades
            </h4>
            <BulletList items={project.responsibilities} />
          </div>
          <div>
            <h4 className="mb-3 text-xl text-primary">{"// "}Desafios</h4>
            <BulletList items={project.challenges} />
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-xl text-primary">{"// "}Impacto</h4>
            <BulletList items={project.impact} />
          </div>
          <div>
            <h4 className="mb-3 text-xl text-primary">{"// "}Destaques</h4>
            <BulletList items={project.highlights} />
          </div>
        </div>
        <div className="mt-8">
          <h4 className="mb-4 text-xl text-primary">{"// "}Resultado</h4>
          <p>{project.result}</p>
          {project.url && (
            <ExternalLink href={project.url} className="mt-4">
              Conheça o projeto
            </ExternalLink>
          )}
        </div>
      </Card>
    </details>
  );
}
