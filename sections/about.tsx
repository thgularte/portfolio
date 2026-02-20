import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Container } from "@/components/layout/container";
import Reveal from "@/components/effects/Reveal";
import PresetantionSection from "@/components/Presentation";

export default function SectionAbout() {
  return (
    <Reveal>
      <section className="mt-15">
        <Container>
          <SectionHeader
            icon="icons/icon_about.svg"
            title="Sobre Mim"
            subtitle="Conheça um pouco mais sobre quem eu sou"
          />

          <PresetantionSection />

        </Container>
      </section>
    </Reveal>
  );
}
