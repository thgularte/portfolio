// components/ui/TestimonialCard.tsx
import { Testimonial } from "@/content/feedbacks";
import Image from "next/image";

interface Props {
  testimonial: Testimonial;
}

export function CardFeedback({ testimonial }: Props) {
  return (
    <div className="relative h-[450px] flex flex-col rounded-2xl border border-gray_light bg-slate_dark p-8">

      <Image
        src="/icons/icon_quote.svg"
        alt="Quote"
        width={32}
        height={32}
        className="mb-4 opacity-80"
      />

      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        {testimonial.quote}
      </p>

      <div className="border-l-4 border-cyan_stronger pl-4">
        {testimonial.linkedin ? (
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray_light hover:underline"
          >
            {testimonial.name}
          </a>
        ) : (
          <span className="font-semibold text-gray_light">
            {testimonial.name}
          </span>
        )}

        <p className="text-xs text-gray_light">
          {testimonial.role}
          {testimonial.company && ` · ${testimonial.company}`}
        </p>
      </div>
    </div>
  );
}