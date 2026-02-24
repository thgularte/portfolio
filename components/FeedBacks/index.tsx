// components/sections/TestimonialsSection.tsx
"use client";

import { testimonials } from "@/content/feedbacks";
import { useEffect, useState } from "react";
import { CardFeedback } from "../ui/cardFeedbacks";

const AUTO_SLIDE_TIME = 5000;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 2 : 1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  function next() {
    setIndex((prev) => (prev + 1) % totalSlides);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(next, AUTO_SLIDE_TIME);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const start = index * itemsPerSlide;
  const visibleItems = testimonials.slice(start, start + itemsPerSlide);

  return (
    <section className="relative w-full py-10 px-4 bg-slate_dark">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray_light">
          O que dizem sobre meu trabalho
        </h2>

        {/* Slider */}
        <div
          className="relative grid gap-6 md:grid-cols-2 mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleItems.map((item) => (
            <CardFeedback key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-6 mb-10">
          {/* Botão Anterior */}
          <button
            onClick={prev}
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

          {/* Botão Próximo */}
          <button
            onClick={next}
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
    </section>
  );
}