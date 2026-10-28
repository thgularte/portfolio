import { CONTACT } from "@/data/contact";
import { PageContainer } from "../layout/PageContainer";
import { SocialLinks } from "../social/SocialLinks";
import { HeroPortrait } from "./HeroPortrait";
export function HomeHero() {
  return (
    <section
      aria-label="Apresentação"
      className="pb-16 pt-10 sm:pb-18 sm:pt-16"
    >
      <PageContainer className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-10 lg:gap-20">
        <HeroPortrait />
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-hero leading-[1.12]">
            <span className="block font-bold">Olá,</span>eu sou o{" "}
            <span className="text-primary">{CONTACT.name}</span>
          </h1>
          <p className="mt-7 text-lg uppercase">Desenvolvedor Full-stack</p>
          <p className="mt-2 text-lg leading-tight text-soft/75">
            Foco em aplicações escaláveis, APIs bem estruturadas e interfaces
            modernas com boa experiência de usuário.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
