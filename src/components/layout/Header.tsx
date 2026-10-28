"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { BrandLogo } from "./BrandLogo";
import { PageContainer } from "./PageContainer";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="relative z-20 py-6 sm:py-7"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <PageContainer
        width="narrow"
        className="flex min-h-12 items-center justify-between gap-6"
      >
        <BrandLogo />
        <button
          ref={menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="inline-flex size-11 items-center justify-center rounded-card border border-line hover:border-primary hover:text-primary md:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`${open ? "flex" : "hidden"} absolute inset-x-4 top-full flex-col gap-2 rounded-card border border-line bg-surface p-4 shadow-xl md:static md:flex md:flex-row md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={pathname === href ? "page" : undefined}
              className={`rounded-sm px-3 py-1 text-lg ${pathname === href ? "bg-ink text-bg hover:bg-soft hover:text-bg" : "hover:bg-soft/10 hover:text-ink"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </PageContainer>
    </header>
  );
}
