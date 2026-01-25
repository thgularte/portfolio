import CardInformation from "@/components/Card_Information";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import SectionHeader from "@/components/Section_Header";
import SectionExperiences from "@/sections/experiencesSection";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="experiences" />

      {/* Conteúdo principal */}
      <main className="flex-1">
        <Container>
          <SectionExperiences />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
