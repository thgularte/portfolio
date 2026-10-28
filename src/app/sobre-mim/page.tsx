import { Info } from "lucide-react";
import { PageHero } from "@/components/typography/sections";
import { AboutContent } from "@/components/about/AboutContent";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Sobre Mim",
  "Conheça Theodor Gularte: desenvolvimento full-stack, colaboração, organização técnica e evolução profissional.",
  "/sobre-mim",
);
export default function AboutPage() {
  return (
    <>
      <PageHero
        icon={<Info />}
        title="Sobre"
        highlightedText="Mim"
        subtitle="Conheça minha trajetória, forma de trabalhar e interesses"
      />
      <AboutContent />
    </>
  );
}
