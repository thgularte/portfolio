import type { CorporateProject, GithubProjectConfig } from "@/types";
import { GITHUB_USERNAME } from "./contact";

export const githubProjects: GithubProjectConfig[] = [
  {
    url: `https://github.com/${GITHUB_USERNAME}/analise-sentimento`,
    featured: true,
  },
  { url: `https://github.com/${GITHUB_USERNAME}/calculator-c` },
  {
    url: `https://github.com/${GITHUB_USERNAME}/gestao-financeira-analise-gastos`,
  },
  { url: `https://github.com/${GITHUB_USERNAME}/app-mobile_lojas` },
];

export const featuredProjects = [
  {
    id: "tcc",
    label: "PROJETO PRINCIPAL · TCC",
    title: "Análise de Sentimento em Tweets sobre Transfobia",
    description:
      "Ferramenta acadêmica de Processamento de Linguagem Natural para análise de discurso de ódio em língua portuguesa. Classifica polaridade emocional em tweets usando abordagem léxico-baseada com OpLexicon e léxico customizado construído manualmente.",
    href: githubProjects[0].url,
    linkLabel: "Link para repositório",
  },
  {
    id: "mobile",
    label: "DESTAQUE MOBILE",
    title: "App Mobile — Lojas Próximas",
    description:
      "Aplicativo mobile que localiza automaticamente o usuário e exibe lojas próximas em mapa interativo via Leaflet. Backend tipado em TypeScript com Node.js e comunicação via Axios.",
    href: githubProjects[3].url,
    linkLabel: "Link para repositório",
  },
  {
    id: "siapesq",
    label: "EXPERIÊNCIA CORPORATIVA",
    title: "Siapesq — Aplicativos de monitoramento por satélite",
    description:
      "Atuação em ambiente corporativo real: implementação de páginas, estruturação de projetos e acompanhamento de entregas. Experiência com trabalho em equipe, fluxo profissional e responsabilidade sobre produto em produção.",
    href: "/projetos#corporativos",
    linkLabel: "Link para aplicativos",
  },
];

export const corporateProjects: CorporateProject[] = [
  {
    id: "siapreps",
    name: "SIAPREPS",
    subtitle: "Sistema Nacional de Registro Pesqueiro",
    company: "SIAPESQ",
    icon: "fish",
    private: true,
    description:
      "Sistema desktop desenvolvido para modernizar o registro pesqueiro nacional, permitindo coleta estruturada de dados mesmo em ambientes offline, como alto mar.",
    context:
      "O projeto foi criado para apoiar a retomada da coleta estruturada de dados pesqueiros no Brasil. A aplicação permite que pescadores registrem digitalmente informações de captura, inclusive em ambientes sem conexão com internet, garantindo sincronização posterior com a base central.",
    technologies: [
      "TypeScript",
      "Electron",
      "React",
      "React-PDF",
      "Offline-first",
    ],
    responsibilities: [
      "Desenvolvimento das principais telas e fluxos",
      "Definição da arquitetura desktop offline-first",
      "Integração com APIs de autenticação e sincronização",
      "Criação de componentes reutilizáveis",
      "Geração automatizada de PDF do mapa de bordo com React-PDF",
    ],
    challenges: [
      "Garantir funcionamento offline confiável",
      "Estruturar sincronização com backend",
      "Organizar fluxo de dados de forma escalável",
    ],
    impact: [
      "Digitalização do preenchimento do mapa de bordo",
      "Redução de erros manuais no processo de registro",
      "Maior organização e confiabilidade na coleta de dados pesqueiros",
    ],
    highlights: [
      "Atuação em projeto de impacto nacional",
      "Definição e manutenção de arquitetura offline-first",
      "Automação de geração documental",
      "Responsabilidade sobre fluxo crítico de dados",
    ],
    result:
      "O sistema foi utilizado em ambiente de produção para digitalização do processo de coleta de dados pesqueiros nacionais, contribuindo para maior organização, padronização e confiabilidade dos registros realizados em campo.",
  },
  {
    id: "phytobloom",
    name: "PHYTOBLOOM",
    subtitle: "Sistema de Monitoramento Ambiental",
    company: "SIAPESQ / COPEL (Parceria)",
    icon: "waves",
    private: true,
    description:
      "Aplicação desktop para monitoramento de indicadores ambientais em usinas hidrelétricas, com processamento e análise de dados geoespaciais (TIF).",
    context:
      "Sistema desenvolvido em parceria com a COPEL para análise de dados geoespaciais provenientes de arquivos TIF. A aplicação calcula índices como NDVI e TSI, além de identificar padrões relacionados à presença de microalgas, auxiliando na tomada de decisão ambiental.",
    technologies: [
      "Electron",
      "React",
      "Geoprocessamento",
      "TIF",
      "NDVI",
      "TSI",
    ],
    responsibilities: [
      "Desenvolvimento do projeto desde a concepção inicial",
      "Definição da arquitetura em Electron e React",
      "Geração automática de alertas ambientais",
      "Integração do processamento de dados com a interface",
    ],
    challenges: [
      "Processar grandes arquivos geoespaciais",
      "Transformar dados técnicos em visualizações compreensíveis",
      "Implementar regras confiáveis para alertas",
    ],
    impact: [
      "Automatização do monitoramento ambiental",
      "Melhoria na visualização de indicadores críticos",
      "Apoio estratégico à tomada de decisão em usinas hidrelétricas",
    ],
    highlights: [
      "Implementação de processamento geoespacial",
      "Estruturação de lógica de alertas automáticos",
      "Integração entre camada científica e UI",
      "Desenvolvimento orientado a dados ambientais",
    ],
    result:
      "Automatização do monitoramento ambiental e melhoria na visualização de indicadores críticos, apoiando a tomada de decisão em usinas hidrelétricas.",
  },
  {
    id: "siapesq-ste",
    name: "SIAPESQ-STE",
    subtitle: "Sistema de Monitoramento de Fauna",
    company: "STE & Hubittat",
    icon: "trees",
    private: true,
    description:
      "Sistema desenvolvido para apoiar o monitoramento de espécies de primatas em regiões impactadas por obras rodoviárias, com foco em liderança técnica e definição arquitetural.",
    context:
      "A aplicação permite registrar, acompanhar e organizar dados sobre a localização e movimentação de espécies, auxiliando no planejamento ambiental e mitigação de impactos causados por obras de infraestrutura.",
    technologies: ["React", "Figma", "UX Design", "Arquitetura de Software"],
    responsibilities: [
      "Estruturação inicial do projeto e definição técnica",
      "Prototipação e definição visual no Figma",
      "Organização da arquitetura de desenvolvimento",
      "Revisão técnica e acompanhamento da equipe",
    ],
    challenges: [
      "Criar uma interface simples para dados ambientais complexos",
      "Organizar as informações de forma escalável",
      "Preparar a arquitetura para expansão futura",
    ],
    impact: [
      "Facilitação do monitoramento de fauna em campo",
      "Suporte ao planejamento ambiental estratégico",
      "Mitigação de impactos ambientais em obras rodoviárias",
    ],
    highlights: [
      "Liderança técnica",
      "Arquitetura sólida",
      "Responsabilidade ambiental",
      "Visão estratégica de produto",
    ],
    result:
      "Facilitação do monitoramento de fauna em campo e suporte ao planejamento ambiental para mitigação de impactos em obras rodoviárias.",
  },
];
