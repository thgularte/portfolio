import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import HobbiesSection from "@/components/ui/dropHobbies";
import { Container } from "@/components/layout/container";
import { profileData } from "@/content/about";
import Reveal from "@/components/effects/Reveal";
import { HoverEffect } from "@/components/effects/Hover";

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

          {/* Layout Desktop: foto à direita */}
          <div className="hidden lg:flex flex-row gap-12 mt-10 max-w-7xl mx-auto items-stretch">
            <div className="flex-1 h-full space-y-6">
              <div className="text-lg text-gray_light space-y-4 leading-relaxed h-full">
                <p>
                  Sou uma pessoa tranquila, gosto de ficar na minha e ajudar os
                  outros sempre que posso. Durante a faculdade, descobri o
                  quanto gosto de programar e hoje isso faz parte do meu dia a
                  dia.
                </p>
                <p>
                  Gosto de aprender com calma, entender o porquê das coisas e
                  compartilhar o que sei. Curto ambientes colaborativos e estou
                  sempre buscando evoluir.
                </p>
                <p>No tempo livre, gosto de filmes, leitura e silêncio.</p>
              </div>
              <HobbiesSection data={profileData} />
            </div>

            <HoverEffect scale={1.15}>
              <div className="w-[250px] h-[350px] flex-shrink-0">
                <Image
                  src="/image_about.png"
                  alt="Foto de perfil"
                  width={300}
                  height={400}
                  className="rounded-2xl object-cover shadow-2xl border-4 border-gray_light w-full h-full"
                  priority
                />
              </div>
            </HoverEffect>
          </div>

          {/* Layout Mobile: foto centralizada entre texto e abas */}
          <div className="lg:hidden flex flex-col items-center space-y-8 max-w-2xl mx-auto px-4">
            {/* Texto introdutório */}
            <div className="text-base text-gray_light space-y-4 leading-relaxed text-justify">
              <p>
                Sou uma pessoa tranquila, gosto de ficar na minha e ajudar os
                outros sempre que posso. Durante a faculdade, descobri o quanto
                gosto de programar e hoje isso faz parte do meu dia a dia.
              </p>
              <p>
                Gosto de aprender com calma, entender o porquê das coisas e
                compartilhar o que sei. Curto ambientes colaborativos e estou
                sempre buscando evoluir.
              </p>
              <p>No tempo livre, gosto de filmes, leitura e silêncio.</p>
            </div>

            {/* Foto centralizada */}
            <div className="w-[200px] h-[250px] sm:w-[240px] sm:h-[300px]">
              <Image
                src="/image_about.png"
                alt="Foto de perfil"
                width={240}
                height={300}
                className="rounded-2xl object-cover shadow-2xl border-4 border-gray_light w-full h-full"
                priority
              />
            </div>

            {/* Seção de abas (Hobbies, Diversão, Descrição física) */}
            <div className="w-full">
              <HobbiesSection data={profileData} />
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
