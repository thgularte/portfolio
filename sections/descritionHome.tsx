"use client";

import { InitialIntroduction } from "@/components/InitialIntroduction";
import { Container } from "@/components/layout/container";

/**
 * Seção inicial home com avatar rotativo, nome, descrição e ícones redes sociais.
 *
 * Ícones: GitHub (link pro perfil), LinkedIn, Instagram, Gmail.
 *
 * @example
 * <DescriptionHome />
 */
export function DescriptionHome() {
  return (
    <section>
      <Container>
        <InitialIntroduction />
      </Container>
    </section>
  );
}
