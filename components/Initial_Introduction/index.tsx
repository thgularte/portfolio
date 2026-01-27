import Link from "next/link";
import Image from "next/image";
import { AvatarRotation } from "@/components/ui/avatar_rotation";

export function InitialIntroduction() {
  return (
    <div className="rounded-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30 p-6 md:p-20">
        <div className="flex-shrink-0">
          <AvatarRotation
            primaryImage="/formatura.jpg"
            secondaryImage="/secundary.jpg"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-brown_medium">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black block">
              Olá,
            </span>{" "}
            eu sou o <span className="font-black">Theodor Gularte</span>
          </h1>

          <p className="text-base md:text-lg text-brown_medium/80 mb-6">
            Desenvolvedor Full-stack
          </p>

          {/* Ícones redes sociais com links */}
          <div className="flex gap-3 justify-center md:justify-start">
            {/* GitHub */}
            <Link
              href="https://github.com/thgularte"
              target="_blank"
              rel="noopener"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all group">
                <Image
                  src="/icone_github.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://br.linkedin.com/in/theodor-gularte-b3759623a"
              target="_blank"
              rel="noopener"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all group">
                <Image
                  src="/icone_linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </Link>
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/th_gularte"
              target="_blank"
              rel="noopener"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all group">
                <Image
                  src="/icone_instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </Link>
            {/* Gmail */}
            <Link
              href="mailto:theodormgularte@gmail.com"
              target="_blank"
              rel="noopener"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all group">
                <Image
                  src="/icone_email.png"
                  alt="Gmail"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}