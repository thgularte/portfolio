import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import SectionHeader from "@/components/Section_Header";
import SectionAbout from "@/sections/about";
import SectionExperiences from "@/sections/experiencesSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="about" />
      <main className="flex-1 mb-15">
          <SectionAbout />
      </main>
      <Footer/>
    </div>
  );
}
