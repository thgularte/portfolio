import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/metadata";
import "./globals.css";
const portfolioFont = localFont({
  src: "../../node_modules/@fontsource/lxgw-wenkai-mono-tc/files/lxgw-wenkai-mono-tc-latin-400-normal.woff2",
  variable: "--font-portfolio",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Theodor Gularte | Desenvolvedor Full Stack",
    template: "%s | Theodor Gularte",
  },
  description:
    "Portfólio de Theodor Gularte. Projetos, experiências e desenvolvimento full-stack com TypeScript, React, Next.js e Python.",
  applicationName: "Portfólio Theodor Gularte",
  authors: [{ name: "Theodor Gularte" }],
  robots: { index: true, follow: true },
  icons: { icon: "/images/icon_tg.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={portfolioFont.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-24 rounded-card bg-ink p-3 text-bg focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
