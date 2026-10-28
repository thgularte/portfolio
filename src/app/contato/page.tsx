import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHero } from "@/components/typography/sections";
import { SecondaryButton } from "@/components/ui/primitives";
import { CONTACT } from "@/data/contact";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contato",
  "Tem algum projeto em mente? Entre em contato com Theodor Gularte pelo formulário ou e-mail.",
  "/contato",
);
export default function ContactPage() {
  return (
    <>
      <PageHero
        icon={<Mail />}
        title="Entre em"
        highlightedText="contato"
        subtitle="Tem algum projeto em mente? Vamos conversar!"
        compact
      />
      <PageContainer width="narrow" className="pb-24 pt-12">
        <ContactForm />
        <div className="mt-5 text-center">
          <p className="mb-5 text-xl">Ou entre em contato diretamente:</p>
          <SecondaryButton href={`mailto:${CONTACT.email}`}>
            <Mail size={19} aria-hidden="true" />
            {CONTACT.email}
          </SecondaryButton>
        </div>
      </PageContainer>
    </>
  );
}
