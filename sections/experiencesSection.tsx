import CardInformation from "@/components/Card_Information";
import SectionHeader from "@/components/Section_Header";
import { experiencesItems, formationItem } from "@/content/experiences";

export default function SectionExperiences() {
    return (
        <section className="mt-15 pb-10 md:pb-14">
        <SectionHeader
          icon="icons/icon_cap.svg"
          title="Formação e Experiências"
          subtitle="Minha trajetória acadêmica e formação profissional"
        />
          {/* Formação Acadêmica */}
                <CardInformation
                  icon="icons/icon_cap.svg"
                  categoryTitle="Formação Acadêmica"
                  items={[formationItem]}
                />
                
                {/* Experiências Profissionais */}
                <CardInformation
                  icon="icons/icon_case.svg"
                  categoryTitle="Experiências Profissionais"
                  items={experiencesItems}
                />
              
        </section>
    )
}