import Image from "next/image";
import { CONTACT, GITHUB_USERNAME } from "@/data/contact";
import { PageContainer } from "../layout/PageContainer";
import { Card, ExternalLink } from "../ui/primitives";

export function GithubActivity() {
  return (
    <section aria-label="Atividade no GitHub" className="pb-10">
      <PageContainer>
        <Card className="border border-primary/25">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-xl text-primary">Atividade no GitHub</h2>
            <ExternalLink href={CONTACT.github}>Ver perfil</ExternalLink>
          </div>
          <div className="overflow-x-auto">
            <Image
              src={`https://ghchart.rshah.org/3F7A35/${GITHUB_USERNAME}`}
              alt="Gráfico de contribuições de Theodor Gularte no GitHub"
              width={800}
              height={160}
              unoptimized
              data-external-chart="true"
              className="h-auto min-w-150 max-w-full"
            />
          </div>
        </Card>
      </PageContainer>
    </section>
  );
}
