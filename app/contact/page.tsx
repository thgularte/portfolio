import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import SectionContact from "@/sections/contact";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="contact" />

      {/* Conteúdo principal */}
      <main className="flex-1">
        <Container>
          <SectionContact />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
