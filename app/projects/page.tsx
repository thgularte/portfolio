"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import SectionProjects from "@/sections/projectsSection";

export default function ProjectsPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="projects" />
      <main className="flex-1">
        <Container>
          <SectionProjects/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
