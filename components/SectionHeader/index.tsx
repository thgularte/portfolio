import Image from "next/image";

interface SectionHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  icon,
  title,
  subtitle
}: SectionHeaderProps) {
  return (
    <div className="w-full pt-10 pb-3 relative">
      {/* Ícone */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="w-14 h-14 flex items-center justify-center bg-slate_dark rounded-lg shadow-md">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="text-center">
        <h2 className="text-gray_light font-semibold text-4xl leading-tight mb-1">
          {title}
        </h2>

        <p className="text-gray_light text-sm leading-relaxed max-w-md mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
