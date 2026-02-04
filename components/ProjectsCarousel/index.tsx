"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import ProjectCard from "../ui/cardRepositories";
import "keen-slider/keen-slider.min.css";
import Reveal from "../effects/Reveal";
import { HoverEffect } from "../effects/Hover";

interface Projeto {
  title: string;
  repoLink: string;
  description: string;
  languages: string[];
}

interface CarouselProps {
  projetos: Projeto[];
}

const ProjectCarousel: React.FC<CarouselProps> = ({ projetos }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  const handlePrev = () => slider?.current?.prev();
  const handleNext = () => slider?.current?.next();

  return (
    <HoverEffect>
      <div className="flex flex-col items-center mt-10">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full">
          {projetos.map((p, i) => (
            <div key={i} className="keen-slider__slide">
              <ProjectCard
                title={p.title}
                repoLink={p.repoLink}
                description={p.description}
                languages={p.languages}
              />
            </div>
          ))}
        </div>

        {/* Setas abaixo */}
        <div className="flex gap-4 mt-4 mb-10">
          <button
            onClick={handlePrev}
            className="bg-gray_dark text-gray_light rounded-full w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray_dark text-gray_light rounded-full w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer"
          >
            &#8250;
          </button>
        </div>
      </div>
    </HoverEffect>
  );
};

export default ProjectCarousel;
