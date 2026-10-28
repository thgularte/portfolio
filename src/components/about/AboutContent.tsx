import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  Film,
  FolderOpen,
  Gamepad2,
  Mail,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import {
  aboutParagraphs,
  personalInterests,
  personalStories,
  workPrinciples,
} from "@/data/about";
import { PageContainer } from "../layout/PageContainer";
import { SectionTitle } from "../typography/sections";
import { Card, IconBox } from "../ui/primitives";

const workIcons = {
  code: Code2,
  collaboration: UsersRound,
  growth: TrendingUp,
};

const interestIcons = {
  film: Film,
  gamepad: Gamepad2,
  folder: FolderOpen,
  technology: Cpu,
};

function WorkCard({ item }: { item: (typeof workPrinciples)[number] }) {
  const Icon = workIcons[item.icon];

  return (
    <Card
      variant="outlined"
      className="h-full rounded-panel bg-surface/70 transition-colors hover:border-primary hover:bg-surface"
    >
      <IconBox variant="primary" className="mb-6">
        <Icon size={21} />
      </IconBox>
      <h3 className="mb-3 text-xl text-ink">{item.title}</h3>
      <p className="text-base leading-relaxed text-soft">{item.description}</p>
    </Card>
  );
}

function InterestTag({ item }: { item: (typeof personalInterests)[number] }) {
  const Icon = interestIcons[item.icon];

  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-surface/50 px-4 py-2 text-base text-soft">
      <Icon size={17} className="text-primary" aria-hidden="true" />
      {item.label}
    </li>
  );
}

export function AboutContent() {
  return (
    <PageContainer width="wide" className="pb-28 pt-12 sm:pb-40">
      <section
        aria-label="Apresentação profissional"
        className="grid gap-8 lg:grid-cols-[minmax(0,2.05fr)_minmax(17rem,1fr)] lg:gap-12"
      >
        <Card
          variant="outlined"
          className="flex flex-col justify-center gap-7 rounded-panel bg-surface/70 text-lg leading-relaxed sm:gap-8 sm:text-xl"
        >
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Card>

        <div className="flex flex-col gap-6">
          <div className="relative min-h-72 flex-1 overflow-hidden rounded-panel border border-primary sm:min-h-88 lg:min-h-0">
            <Image
              src="/images/about.jpeg"
              alt="Mesa de trabalho de Theodor, com código no monitor e uma caneca de café"
              fill
              sizes="(max-width: 1023px) 90vw, 360px"
              className="object-cover"
            />
          </div>

          <Card
            variant="outlined"
            className="rounded-panel bg-surface/70 px-6 py-5 sm:px-7 sm:py-6"
          >
            <div className="flex items-start gap-4">
              <IconBox variant="primary" className="size-10">
                <Mail size={19} />
              </IconBox>
              <div className="min-w-0">
                <h2 className="text-xl">Vamos conversar?</h2>
                <p className="mt-1 text-sm leading-relaxed text-soft">
                  Conheça meu trabalho ou fale comigo sobre uma oportunidade.
                </p>
                <Link
                  href="/contato"
                  className="mt-3 inline-flex items-center gap-2 rounded-sm text-base text-primary hover:underline"
                >
                  Entre em contato
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section aria-labelledby="work-title" className="mt-20 sm:mt-24">
        <div id="work-title">
          <SectionTitle title="Como eu trabalho" />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {workPrinciples.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="personal-title"
        className="mt-20 border-t border-line pt-12 sm:mt-24 sm:pt-14"
      >
        <div id="personal-title">
          <SectionTitle title="Além do código" />
        </div>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-soft">
          Quando não estou programando, provavelmente estou assistindo a algum
          filme, jogando ou experimentando alguma ideia nova.
        </p>
        <ul
          className="mt-6 flex flex-wrap gap-3"
          aria-label="Interesses pessoais"
        >
          {personalInterests.map((item) => (
            <InterestTag key={item.label} item={item} />
          ))}
        </ul>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {personalStories.map((story) => (
            <Card
              key={story.title}
              variant="compact"
              className="border border-primary/35 bg-surface/55 sm:p-6"
            >
              <h3 className="text-lg text-ink">{story.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-soft">
                {story.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
