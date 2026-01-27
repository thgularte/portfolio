import Image from "next/image";
import SectionHeader from "@/components/Section_Header";
import HobbiesSection from "@/components/ui/dropHobbies";
import { Container } from "@/components/layout/container";

export default function SectionAbout() {
   const profileData = [
    {
      title: "Hobbies",
      content:
        "Meus hobbies são assistir os jogos do meu time Sport Club Internacional, assistir filmes, buscando sempre filmes que sejam interessantes e marcantes, ou só de terror mesmo.",
    },
    {
      title: "Diversão",
      content:
        "Para me divertir costumo ir ao cinema, passear com meu fusca curtindo uma música usando meus CD's. Assim como curto assistir vários filmes aleatórios de atores e atrizes que gosto, jogar alguns jogos de video game mais antigo.",
    },
    {
      title: "Descrição física",
      content:
        "Sou um homem jovem, de pele clara, cabelos curtos e loiros, levemente cacheados, e olhos azuis. Costumo usar roupas casuais, como camisetas de cores lisas e poucos detalhes. Tenho uma expressão tranquila, com um leve sorriso. Minha estatura é mediana e meu rosto é arredondado.",
    },
  ];

  return (
    <section className="mt-20">
      <Container>
        <SectionHeader
          icon="icons/icon_about.svg"
          title="Sobre Mim"
          subtitle="Conheça um pouco mais sobre quem eu sou"
        />
        <div className="flex flex-row gap-12 max-w-7xl mx-auto items-stretch">

          <div className="flex-1 h-full space-y-6">
            <div className="text-lg text-brown_medium space-y-4 leading-relaxed h-full">
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
            <HobbiesSection data={profileData} />
          </div>
          
          <div className="w-[250px] h-[350px] flex-shrink-0">  
            <Image
              src="/image_about.png"
              alt="Foto de perfil"
              width={300}  
              height={400}
              className="rounded-2xl object-cover shadow-2xl border-4 border-brown_medium w-full h-full"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
