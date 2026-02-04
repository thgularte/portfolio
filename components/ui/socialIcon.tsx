import Link from "next/link";
import Image from "next/image";
import { HoverEffect } from "../effects/Hover";

interface SocialIconProps {
  href: string;
  icon: string;
  alt: string;
}

export default function SocialIcon({ href, icon, alt }: SocialIconProps) {
  return (
    <Link href={href} target="_blank" rel="noopener">
      <HoverEffect scale={1.15}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer">
          <Image
            src={icon}
            alt={alt}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </HoverEffect>
    </Link>
  );
}
