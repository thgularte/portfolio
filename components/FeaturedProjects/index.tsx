import { Container } from "@/components/layout/container";
import Reveal from "@/components/effects/Reveal";
import { HoverEffect } from "@/components/effects/Hover";

interface FeaturedProjectCardProps {
  category: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

function FeaturedProjectCard({
  category,
  title,
  description,
  linkLabel,
  linkHref,
}: FeaturedProjectCardProps) {
  return (
    <HoverEffect scale={1.02} className="h-full">
      <div className="group h-full flex flex-col justify-between p-6 bg-slate_dark/40 hover:bg-slate_dark/60 border border-slate_medium/30 hover:border-cyan_stronger/50 rounded-2xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(19,147,202,0.1)]">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold font-mono text-cyan_stronger/80 block mb-2">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-gray_light group-hover:text-cyan_stronger transition-colors duration-300 mb-3">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray_light/80 leading-relaxed font-mono">
            {description}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate_medium/20">
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-cyan_stronger hover:text-cyan_stronger/80 hover:underline transition-colors duration-200"
          >
            <span>{linkLabel}</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </HoverEffect>
  );
}

export default function FeaturedProjects() {
  const projects: FeaturedProjectCardProps[] = [
    {
      category: "PROJETO PRINCIPAL - TCC",
      title: "Análise de Sentimento em Tweets sobre Transfobia",
      description:
        "Ferramenta Acadêmica de Processamento de Linguagem Natural para análise de discurso de ódio em língua portuguesa. Classifica polaridade emocional em tweets usando abordagem léxico-baseada com SentiLex e léxico customizado construído manualmente.",
      linkLabel: "Link para repositório",
      linkHref: "https://github.com/thgularte/Analise-de-Sentimento-em-Tweets-sobre-Transfobia",
    },
    {
      category: "DESTAQUE MOBILE",
      title: "App Mobile — Lojas Próximas",
      description:
        "Aplicativo mobile que localiza automaticamente o usuário e exibe lojas próximas em mapa interativo via Leaflet. Backend ligado em TypeScript com Node.js e comunicação via Axios.",
      linkLabel: "Link para repositório",
      linkHref: "https://github.com/thgularte",
    },
    {
      category: "EXPERIÊNCIA CORPORATIVA",
      title: "Siapesq - Aplicativos de monitoramento por satélite",
      description:
        "Atuação em ambiente corporativo real: implementação de páginas, estruturação de projetos e acompanhamento de entregas. Experiência com trabalho em equipe, fluxo profissional e responsabilidade sobre produto em produção.",
      linkLabel: "Link para aplicativos",
      linkHref: "/experiences",
    },
  ];

  return (
    <section className="py-12 bg-slate_light">
      <Container>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-mono text-center mb-10 text-gray_light font-bold">
            <span className="text-cyan_stronger">//</span> PROJETOS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main TCC Card - spans full width on md/lg */}
          <div className="md:col-span-2">
            <Reveal>
              <FeaturedProjectCard {...projects[0]} />
            </Reveal>
          </div>

          {/* Left: Mobile Card */}
          <Reveal>
            <FeaturedProjectCard {...projects[1]} />
          </Reveal>

          {/* Right: Corporate Card */}
          <Reveal>
            <FeaturedProjectCard {...projects[2]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
