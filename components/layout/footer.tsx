import Image from "next/image";
import { Container } from "./container";

/**
 * Componente Footer para o portfolio.
 * 
 * Exibe logo à esquerda e copyright a direita.
 * O link ativo recebe fundo escuro e texto branco para destaque.
 * 
 * @example
 * ```tsx
 * <Footer/>
 * <Footer showBorderTop={false}/>
 * ```
 * 
 * @returns Elemento footer com informações de copyright.
 */

interface FooterProps {
  /**
   * Controla se a borda superior deve ser exibida.
   * @default true
   */
  showBorderTop?: boolean;
}

export function Footer({ showBorderTop = true }: FooterProps) {
  return (
    <footer className={`bg-slate_dark ${showBorderTop ? "border-t border-text" : ""}`}>
      <Container className="flex items-center justify-between py-4 text-sm">
        <Image
          src="/icon_tg.svg"
          alt="Logo com iniciais do desenvolvedor"
          width={60}
          height={60}
          priority
        />

        <span className="text-gray_light">
          Copyright © {new Date().getFullYear()} - Theodor M Gularte
        </span>
      </Container>
    </footer>
  );
}