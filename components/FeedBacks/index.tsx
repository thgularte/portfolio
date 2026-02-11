// components/sections/TestimonialsSection.tsx
"use client";

import { testimonials } from "@/content/feedbacks";
import { useEffect, useState } from "react";
import { CardFeedback } from "../ui/cardFeedbacks";

const ITEMS_PER_SLIDE = 2;
const AUTO_SLIDE_TIME = 3000; // 6s

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

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

  const start = index * ITEMS_PER_SLIDE;
  const visibleItems = testimonials.slice(
    start,
    start + ITEMS_PER_SLIDE
  );

  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          O que dizem sobre meu trabalho
        </h2>

        {/* Slider */}
        <div className="relative grid gap-6 md:grid-cols-2 items-stretch mb-8">
          {visibleItems.map((item) => (
            <CardFeedback key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Setas abaixo dos cards */}
        <div className="flex justify-center gap-4 mt-4 mb-10">
          <button
            onClick={prev}
            className="bg-gray_dark text-gray_light rounded-full w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="bg-gray_dark text-gray_light rounded-full w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer"
          >
            &#8250;
          </button>
        </div>

      
      </div>
    </section>
  );
}