"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import ProjectCard from "../ui/cardRepositories";
import "keen-slider/keen-slider.min.css";
import Reveal from "../effects/Reveal";

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
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 20,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  const handlePrev = () => slider?.current?.prev();
  const handleNext = () => slider?.current?.next();

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Slider com padding extra para não cortar o efeito de hover */}
      <div className="w-full px-2">
        <div ref={sliderRef} className="keen-slider">
          {projetos.map((p, i) => (
            <div className="keen-slider__slide flex justify-center px-1.5 py-1.5">
              <ProjectCard
                title={p.title}
                repoLink={p.repoLink}
                description={p.description}
                languages={p.languages}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controles melhorados */}
      <div className="flex items-center gap-6 mt-6 mb-10">
        {/* Botão Anterior */}
        <button
          onClick={handlePrev}
          className="group relative bg-gradient-to-br from-slate_medium to-slate_dark hover:from-cyan_stronger/20 hover:to-cyan_stronger/10 text-gray_light rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-cyan_stronger/20 border border-slate_medium hover:border-cyan_stronger transition-all duration-300 hover:scale-110"
          aria-label="Projeto anterior"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Indicadores de slide */}
        <div className="flex gap-2">
          {projetos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider?.current?.moveToIdx(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-8 h-2 bg-cyan_stronger"
                  : "w-2 h-2 bg-slate_medium hover:bg-gray_light/50"
              }`}
              aria-label={`Ir para projeto ${idx + 1}`}
            />
          ))}
        </div>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          className="group relative bg-gradient-to-br from-slate_medium to-slate_dark hover:from-cyan_stronger/20 hover:to-cyan_stronger/10 text-gray_light rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-cyan_stronger/20 border border-slate_medium hover:border-cyan_stronger transition-all duration-300 hover:scale-110"
          aria-label="Próximo projeto"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;