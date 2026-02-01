"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="projects" />
      <main className="flex-1">
        <Container>
          <h1>Aqui vai entrar a seção da pagina</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
