"use client";

/**
 * Componente Header para navegação do portfolio.
 * 
 * Exibe logo à esquerda e links de navegação à direita.
 * O link ativo recebe fundo escuro e texto branco para destaque.
 * 
 * @param props - Propriedades do componente
 * @param props.activeLinkId - ID do link atualmente ativo (ex: "home", "projetos")
 * 
 * @example
 * ```tsx
 * <Header activeLinkId="home" />
 * ```
 * 
 * @returns Elemento header com navegação responsiva.
 */

import Image from "next/image";
import { Container } from "./container";

const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#experiencias", id: "experiencias", label: "Experiências" },
  { href: "#sobre", id: "sobre", label: "Sobre mim" },
  { href: "#projetos", id: "projetos", label: "Projetos" },
  { href: "#contato", id: "contato", label: "Contato" },
];

type HeaderProps = {
  activeLinkId?: string;
};

export function Header({ activeLinkId }: HeaderProps) {
  return (
    <header className="border-b">
      <Container className="flex justify-between items-center py-4">
        <Image
          src="/icone_vermelho.png"
          alt="Logo com iniciais do desenvolvedor"
          width={40}
          height={40}
          priority
        />

        <nav className="flex gap-4 text-sm font-medium">
          {links.map((link) => {
            const isActive = activeLinkId === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={
                  isActive
                    ? "rounded-full bg-[#6b2a26] text-white px-4 py-1 transition-colors"
                    : "px-4 py-1 rounded-full text-[#6b2a26] hover:bg-[#6b2a26]/10 transition-colors"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
