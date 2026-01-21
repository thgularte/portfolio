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
 * ```
 * 
 * @returns Elemento footer com informações de copyright.
 */

export function Footer() {
  return (
    <footer className="border-t bg-[#f4ecdf]">
      <Container className="flex items-center justify-between py-4 text-sm">
        <Image
          src="/icone_vermelho.png"
          alt="Logo com iniciais do desenvolvedor"
          width={40}
          height={40}
          priority
        />

        <span className="text-[#3b3b3b]">
          Copyright © {new Date().getFullYear()} - Theodor M Gularte
        </span>
      </Container>
    </footer>
  );
}
