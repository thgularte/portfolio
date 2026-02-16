// corporateProjects.content.ts

export interface CorporateProject {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  company: string;
  description: string;
  tags: string[];
  accentColor: string;
  fullData: {
    tags: string[];
    context: string;
    role: string[];
    challenges: string[];
    impact: string[];
    highlights: string[];
  };
}

export const corporateProjectsContent: CorporateProject[] = [
  {
    id: 'siapreps',
    icon: '🐟',
    title: 'SIAPREPS',
    subtitle: 'Sistema Nacional de Registro Pesqueiro',
    company: 'SIAPESQ',
    description:
      'Sistema desktop desenvolvido para modernizar o registro pesqueiro nacional, permitindo coleta estruturada de dados mesmo em ambientes offline, como alto mar.',
    tags: ['React', 'Electron', 'Offline-first'],
    accentColor: '#00d4ff',
    fullData: {
      tags: [
        'React',
        'Electron',
        'React-PDF',
        'Offline-first',
        'Nextron',
        'Arquitetura Desktop'
      ],
      context:
        'O projeto foi criado para apoiar a retomada da coleta estruturada de dados pesqueiros no Brasil. A aplicação permite que pescadores registrem digitalmente informações de captura, inclusive em ambientes sem conexão com internet, garantindo sincronização posterior com a base central.',
      role: [
        'Desenvolvimento das principais telas e fluxos da aplicação',
        'Implementação de autenticação integrada à API (login e registro)',
        'Criação de componentes reutilizáveis para formulários complexos',
        'Geração automatizada de PDF do mapa de bordo utilizando React-PDF',
        'Suporte e manutenção da arquitetura baseada em Electron + React (Nextron)'
      ],
      challenges: [
        'Garantir funcionamento offline confiável',
        'Estruturar dados para exportação e sincronização posterior',
        'Criar experiência de uso simples para público não técnico'
      ],
      impact: [
        'Digitalização do preenchimento do mapa de bordo',
        'Redução de erros manuais no processo de registro',
        'Maior organização e confiabilidade na coleta de dados pesqueiros'
      ],
      highlights: [
        'Atuação em projeto de impacto nacional',
        'Definição e manutenção de arquitetura offline-first',
        'Automação de geração documental',
        'Responsabilidade sobre fluxo crítico de dados'
      ]
    }
  },
  {
    id: 'phytobloom',
    icon: '🌊',
    title: 'PHYTOBLOOM',
    subtitle: 'Sistema de Monitoramento Ambiental',
    company: 'SIAPESQ / COPEL (Parceria)',
    description:
      'Aplicação desktop para monitoramento de indicadores ambientais em usinas hidrelétricas, com processamento e análise de dados geoespaciais (TIF).',
    tags: ['Electron', 'React', 'Geoespacial'],
    accentColor: '#00ff88',
    fullData: {
      tags: [
        'Electron',
        'React',
        'Geoprocessamento',
        'TIF Processing',
        'NDVI',
        'TSI'
      ],
      context:
        'Sistema desenvolvido em parceria com a COPEL para análise de dados geoespaciais provenientes de arquivos TIF. A aplicação calcula índices como NDVI e TSI, além de identificar padrões relacionados à presença de microalgas, auxiliando na tomada de decisão ambiental.',
      role: [
        'Desenvolvimento do projeto desde a concepção inicial',
        'Definição e implementação da arquitetura base em Electron + React',
        'Criação da lógica de geração automática de alertas ambientais',
        'Integração entre camada de processamento de dados e interface visual',
        'Estruturação do fluxo de análise e visualização dos indicadores'
      ],
      challenges: [
        'Processamento eficiente de grandes arquivos geoespaciais',
        'Conversão de dados técnicos complexos em visualizações compreensíveis',
        'Implementação de regras confiáveis para geração automática de alertas'
      ],
      impact: [
        'Automatização do monitoramento ambiental',
        'Melhoria na visualização de indicadores críticos',
        'Apoio estratégico à tomada de decisão em usinas hidrelétricas'
      ],
      highlights: [
        'Implementação de processamento geoespacial',
        'Estruturação de lógica de alertas automáticos',
        'Integração entre camada científica e UI',
        'Desenvolvimento orientado a dados ambientais'
      ]
    }
  },
  {
    id: 'ste',
    icon: '🐒',
    title: 'SIAPESQ-STE',
    subtitle: 'Sistema de Monitoramento de Fauna',
    company: 'STE & Hubittat',
    description:
      'Sistema desenvolvido para apoiar o monitoramento de espécies de primatas em regiões impactadas por obras rodoviárias, com foco em liderança técnica e definição arquitetural.',
    tags: ['React', 'UX Design', 'Arquitetura'],
    accentColor: '#ff8c00',
    fullData: {
      tags: [
        'React',
        'Figma',
        'Liderança Técnica',
        'Arquitetura de Software',
        'UX Design'
      ],
      context:
        'A aplicação permite registrar, acompanhar e organizar dados sobre a localização e movimentação de espécies, auxiliando no planejamento ambiental e mitigação de impactos causados por obras de infraestrutura.',
      role: [
        'Estruturação inicial do projeto e definição técnica',
        'Definição da base visual e prototipação no Figma',
        'Organização da arquitetura de desenvolvimento',
        'Planejamento das etapas de implementação',
        'Revisão técnica e acompanhamento da equipe'
      ],
      challenges: [
        'Construção de interface simples para dados ambientais complexos',
        'Organização clara e escalável das informações coletadas',
        'Definição de arquitetura preparada para expansão futura'
      ],
      impact: [
        'Facilitação do monitoramento de fauna em campo',
        'Suporte ao planejamento ambiental estratégico',
        'Mitigação de impactos ambientais em obras rodoviárias'
      ],
      highlights: [
        'Liderança técnica',
        'Arquitetura sólida',
        'Responsabilidade ambiental',
        'Visão estratégica de produto'
      ]
    }
  }
];
