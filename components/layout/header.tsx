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
import Link from "next/link";

const links = [
  { href: "/", id: "home", label: "Home" },
  { href: "/experiences", id: "experiences", label: "Experiências" },
  { href: "/about", id: "about", label: "Sobre mim" },
  { href: "/projects", id: "projects", label: "Projetos" },
  { href: "/contact", id: "contact", label: "Contato" },
];

type HeaderProps = {
  activeLinkId?: string;
};

export function Header({ activeLinkId }: HeaderProps) {
  return (
    <header>
      <Container className="flex justify-between items-center py-4">
        <Image
          src="/icone_vermelho.png"
          alt="Logo com iniciais do desenvolvedor"
          width={60}
          height={60}
          priority
        />

        <nav className="flex gap-4 text-lg font-medium">
          {links.map((link) => {
            const isActive = activeLinkId === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={
                  isActive
                    ? "rounded-full bg-[#6b2a26] text-white px-4 py-1 transition-colors"
                    : "px-4 py-1 rounded-full text-brown_medium hover:bg-[#6b2a26]/10 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
