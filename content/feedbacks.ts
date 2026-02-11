export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  linkedin?:string;
  company?: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Trabalhei com o Theodor durante meu estágio na SIAPESQ, onde ele atuou como meu supervisor. Mesmo diante do desafio de liderar uma equipe com grande volume de demandas e responsabilidade pela primeira vez, ele demonstrou uma maturidade impressionante. O Theodor foi excelente no repasse e acompanhamento de tarefas, sempre aberto a ouvir a equipe e integrando sugestões com sua visão estratégica para o desenvolvimento. Além da competência técnica — com destaque para o Front-end, mas com sólida noção de Back-end e facilidade em aprender novas tecnologias — ele é um profissional de extrema integridade e confiança. É alguém com quem se pode contar tanto para conselhos técnicos quanto para resolver problemas complexos com flexibilidade, imparcialidade e empatia.",
    name: "Micael Lima",
    role: "Desenvolvedor Full Stack",
    linkedin: "https://www.linkedin.com/in/micael-lima-backend-dados/"
  },
  {
    id: 2,
    quote:
      "Ao longo desses 10 meses trabalhando junto, ele foi um excelente líder. Essencial para meu crescimento profissional. Na solução de problemas e ajuda durante esse período, foi imprescindível. Eu agradeço muito por todo esse tempo. Ele foi exemplo de liderança.",
    name: "Felipe Vasconcelos",
    role: "Desenvolvedor Full Stack",
    linkedin: "https://www.linkedin.com/in/felipe-vasconcelos-607063207/"
  },
  {
    id: 3,
    quote:
      "Trabalhar com o Theodor é muito tranquilo. Ele é o tipo de líder que realmente está presente no dia a dia do time, escuta, troca ideia e faz questão de entender os problemas antes de tomar qualquer decisão. Além disso, ele tem uma visão muito boa de produto e de negócio, o que ajuda bastante a dar direção pro time. Uma coisa que eu admiro bastante é a forma como ele consegue equilibrar cobrança e apoio. Ao mesmo tempo que puxa o time pra entregar com qualidade, ele também se preocupa com o crescimento individual de cada pessoa. Dá pra sentir que ele se importa de verdade com quem está trabalhando com ele, e isso faz muita diferença no ambiente.",
    name: "Flávio Wallefy",
    role: "Desenvolvedor",
  },
];
