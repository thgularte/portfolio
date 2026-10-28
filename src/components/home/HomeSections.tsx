import { featuredProjects } from "@/data/projects";
import { skillGroups, technologies } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import { PageContainer } from "../layout/PageContainer";
import { TestimonialCarousel } from "../testimonials/TestimonialCarousel";
import { SectionDivider, SectionTitle } from "../typography/sections";
import { BulletList, Card, ProjectLink, TechTags } from "../ui/primitives";
export function FeaturedProjectsSection() {
  return (
    <section
      className="bg-surface pb-section pt-10"
      aria-label="Projetos em destaque"
    >
      <PageContainer width="narrow">
        <SectionTitle highlightedText="PROJETOS" center />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              variant="outlined"
              className={`flex flex-col ${index === 0 ? "md:col-span-2 md:min-h-56" : "md:min-h-66"}`}
            >
              <p className="text-sm text-soft">{project.label}</p>
              <h3 className="mb-3 mt-3 text-2xl leading-tight text-primary">
                {project.title}
              </h3>
              <p className="mb-6 text-base leading-tight text-soft">
                {project.description}
              </p>
              <div className="mt-auto text-base">
                <ProjectLink href={project.href}>
                  {project.linkLabel}
                </ProjectLink>
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
export function SkillsSection() {
  return (
    <section
      className="pb-section pt-10"
      aria-label="Habilidades e tecnologias"
    >
      <PageContainer width="wide">
        <SectionTitle highlightedText="SKILLS" trailingText=" & STACK" center />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="mb-4 border-b border-line pb-4 text-2xl text-primary">
                <span className="border-l-[3px] border-primary pl-2">
                  {group.title}
                </span>
              </h3>
              <BulletList
                items={group.skills}
                className="space-y-2.5 text-xl"
              />
            </Card>
          ))}
          <Card className="md:col-span-2">
            <h3 className="mb-4 border-b border-line pb-4 text-2xl text-primary">
              <span className="border-l-[3px] border-primary pl-2">
                Stack&apos;s
              </span>
            </h3>
            <TechTags items={technologies} highlightOnHover />
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}
export function TestimonialsSection() {
  return (
    <section className="bg-surface pb-12" aria-label="Depoimentos">
      <SectionDivider />
      <PageContainer width="wide" className="pt-10">
        <SectionTitle highlightedText="DEPOIMENTOS" center />
        <TestimonialCarousel items={testimonials} />
      </PageContainer>
    </section>
  );
}
