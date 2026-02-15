// components/sections/TestimonialsSection.tsx
"use client";

import { testimonials } from "@/content/feedbacks";
import { useEffect, useState } from "react";
import { CardFeedback } from "../ui/cardFeedbacks";

const AUTO_SLIDE_TIME = 5000;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

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
    const interval = setInterval(next, AUTO_SLIDE_TIME);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const start = index * itemsPerSlide;
  const visibleItems = testimonials.slice(start, start + itemsPerSlide);

  return (
    <section className="relative w-full py-10 px-4 bg-slate_dark">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray_light">
          O que dizem sobre meu trabalho
        </h2>

        {/* Slider */}
        <div className="relative grid gap-6 md:grid-cols-2 mb-8">
          {visibleItems.map((item) => (
            <CardFeedback key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Controles */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="bg-gray_dark text-gray_light rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="bg-gray_dark text-gray_light rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}