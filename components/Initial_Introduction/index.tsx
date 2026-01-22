import Link from "next/link";
import Image from "next/image";
import { AvatarRotation } from "@/components/ui/avatar_rotation";

export function InitialIntroduction() {
  return (
    <div className="rounded-2xl">
      <div className="flex items-center gap-30 p-20">
        <AvatarRotation
          primaryImage="/formatura.jpg"
          secondaryImage="/secundary.jpg"
        />

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl mb-2 text-brown_medium">
            <span className="text-4xl md:text-5xl font-black block md:inline">
              Olá,
            </span>{" "}
            eu sou o <span className="font-black">Theodor Gularte</span>
          </h1>

          <p className="text-lg text-brown_medium/80 mb-6">
            Desenvolvedor Full-stack
          </p>

          {/* Ícones redes sociais com links */}
          <div className="flex gap-3">
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
