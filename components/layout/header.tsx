"use client";

/**
 * Componente Header para navegação do portfolio.
 * 
 * Exibe logo à esquerda e links de navegação à direita.
 * O link ativo recebe fundo escuro e texto branco para destaque.
 * Em mobile, exibe um botão de menu que abre navegação lateral.
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
import { useState } from "react";

const links = [
  { href: "/", id: "home", label: "Home" },
  { href: "/experiences", id: "experiences", label: "Experiências" },
  { href: "/projects", id: "projects", label: "Projetos" },
  { href: "/about", id: "about", label: "Sobre mim" },
  { href: "/contact", id: "contact", label: "Contato" },
];

type HeaderProps = {
  activeLinkId?: string;
};

export function Header({ activeLinkId }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <Container className="flex justify-between items-center py-4">
        <Image
          src="/icon_tg.svg"
          alt="Logo com iniciais do desenvolvedor"
          width={60}
          height={60}
          priority
        />

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-4 text-lg font-medium">
          {links.map((link) => {
            const isActive = activeLinkId === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={
                  isActive
                    ? "rounded-full bg-gray_light text-slate_dark px-4 py-1 transition-colors"
                    : "px-4 py-1 rounded-full text-gray_light hover:bg-gray_light/10 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu de navegação"
        >
          <span className="w-6 h-0.5 bg-gray_light transition-all"></span>
          <span className="w-6 h-0.5 bg-gray_light transition-all"></span>
          <span className="w-6 h-0.5 bg-gray_light transition-all"></span>
        </button>
      </Container>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menu Lateral Mobile */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-slate_dark shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-3xl text-gray_light"
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-6">
          {links.map((link) => {
            const isActive = activeLinkId === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={
                  isActive
                    ? "rounded-lg bg-gray_light text-slate_dark px-4 py-3 text-lg font-medium transition-colors"
                    : "px-4 py-3 rounded-lg text-gray_light text-lg font-medium hover:bg-gray_light/10 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </header>
  );
}