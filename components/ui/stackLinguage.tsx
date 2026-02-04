import Image from "next/image";
import { HoverEffect } from "@/components/effects/Hover";

interface TechStackItem {
  name: string;
  icon: string;
  alt: string;
}

interface TechStackProps {
  technologies: TechStackItem[];
  title?: string;
}

export default function TechStack({
  technologies,
  title = "Stack's",
}: TechStackProps) {
  return (
    <div className="p-6 md:p-15">
      <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center items-center pb-4 max-w-3xl mx-auto">
        {technologies.map((tech, index) => (
          <HoverEffect key={index}>
            <div
              className="
                flex items-center gap-2 md:gap-3
                px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3
                rounded-full
                bg-slate_dark
                border border-details/20
                backdrop-blur-sm
                cursor-pointer
                transition-colors
                hover:bg-slate_light/20
                hover:border-details/40
              "
            >
              <Image
                src={tech.icon}
                alt={tech.alt}
                width={24}
                height={24}
                className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity md:w-[28px] md:h-[28px]"
              />
              <span className="text-xs md:text-sm text-dark_deepest font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </HoverEffect>
        ))}
      </div>
    </div>
  );
}
