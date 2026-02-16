// index.tsx (CardsCorporate/index.tsx)
import {
  CorporateProject,
  corporateProjectsContent,
} from "@/content/projectsCorporate";
import { CorporateProjectCard } from "../ui/cardCorporate";
import { CorporateProjectModal } from "../ui/modalCorporate";
import { useState } from "react";


export default function ProjectsCorporate() {
  const [selectedProject, setSelectedProject] =
    useState<CorporateProject | null>(null);

  const openModal = (project: CorporateProject) => {


    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {corporateProjectsContent.map((project) => (
          <CorporateProjectCard
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

        
      {/* Modal */}
      <CorporateProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}