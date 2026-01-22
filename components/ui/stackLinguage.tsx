import Image from "next/image";

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
    <div className="p-15">
      <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-details">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center pb-4 max-w-3xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full bg-secondary hover:bg-gray_light/20 hover:scale-110 transition-all duration-300 cursor-pointer border border-details/20 hover:border-details/40 backdrop-blur-sm"
          >
            <Image
              src={tech.icon}
              alt={tech.alt}
              width={28}
              height={28}
              className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
            <span className="text-xs md:text-sm font-medium text-details/90 group-hover:text-details transition-colors whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
