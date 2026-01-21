import Link from "next/link";
import Image from "next/image";
import { AvatarRotation } from "@/components/ui/avatar_rotation";

export function InitialIntroduction() {
  return (
    <div className="rounded-2xl">
      <div className="flex items-center gap-30 p-8"> 
        <AvatarRotation
          primaryImage="/formatura.jpg"
          secondaryImage="/secundary.jpg"
        />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-details mb-2">
            Olá, eu sou Theodor Gularte
          </h1>

          <p className="text-lg text-details/80 mb-6">
            Desenvolvedor Full-stack
          </p>

          {/* Ícones redes sociais com links */}
          <div className="flex gap-4">
            {/* GitHub */}
            <Link
              href="https://github.com/thgularte"
              target="_blank"
              rel="noopener"
            >
              <div className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center cursor-pointer transition-all p-1 group">
                <Image
                  src="/icone_github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
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
              <div className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center cursor-pointer transition-all p-1 group">
                <Image
                  src="/icone_linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
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
              <div className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center cursor-pointer transition-all p-1 group">
                <Image
                  src="/icone_instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
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
              <div className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center cursor-pointer transition-all p-1 group">
                <Image
                  src="/icone_email.png"
                  alt="Gmail"
                  width={24}
                  height={24}
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
