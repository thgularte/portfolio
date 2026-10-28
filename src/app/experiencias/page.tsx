import { GraduationCap } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHero, SectionTitle } from "@/components/typography/sections";
import {
  ExperienceRole,
  Timeline,
  TimelineItem,
} from "@/components/experience/Timeline";
import { education, experiences } from "@/data/experiences";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Experiências",
  "Formação acadêmica na FURG, experiência full-stack na SIAPESQ e liderança de equipe de Theodor Gularte.",
  "/experiencias",
);
export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        icon={<GraduationCap />}
        title="Formação e"
        highlightedText="Experiências"
        subtitle="Minha trajetória acadêmica e formação profissional"
        compact
      />
      <PageContainer width="narrow" className="pb-section pt-14">
        <section aria-label="Formação acadêmica">
          <SectionTitle title="Formação acadêmica" small />
          <Timeline>
            {education.map((item) => (
              <TimelineItem key={item.title} {...item} type="education" />
            ))}
          </Timeline>
        </section>
        <section aria-label="Experiências profissionais" className="mt-8">
          <SectionTitle highlightedText="Experiências" small />
          <Timeline>
            {experiences.map((item) => (
              <TimelineItem key={item.title} {...item} type="work">
                {item.roles.map((role) => (
                  <ExperienceRole key={role.title} {...role} />
                ))}
              </TimelineItem>
            ))}
          </Timeline>
        </section>
      </PageContainer>
    </>
  );
}
