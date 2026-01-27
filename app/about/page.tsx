import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import SectionHeader from "@/components/Section_Header";
import SectionAbout from "@/sections/about";
import SectionExperiences from "@/sections/experiencesSection";

export default function AboutPage() {
  return (
    <>
      <Header activeLinkId="about" />
      <main className="flex-1">
          <SectionAbout />
      </main>
    </>
  );
}
