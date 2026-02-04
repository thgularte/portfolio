import { HoverEffect } from "@/components/effects/Hover";
import FormEmail from "@/components/FormEmail";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";

export default function SectionContact() {
  return (
    <section className="mt-15">
      <SectionHeader
        title="Entre em contato"
        icon={"/icons/icon_gmail.svg"}
        subtitle={"Tem algum projeto em mente ? Vamos conversar!"}
      />
      <FormEmail />
      <div className="flex flex-col items-center gap-4 mt-8">
        {/* Texto */}
        <p className="text-gray_light text-base">
          Ou entre em contato diretamente:
        </p>

        {/* Badge de e-mail */}
        <HoverEffect>
        <div
          className="
          flex items-center gap-3
          px-5 py-3
          bg-gray_light
          text-gray_dark
          rounded-full
          border border-gray_light
          shadow-sm
        "
        >
          <Image
            src="/icons/icon_gmail_gray.svg"
            alt="E-mail"
            width={18}
            height={18}
          />
          <Link
            href="mailto:theodormgularte@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <span className="text-sm font-medium select-all text-slate_medium">
              theodormgularte@gmail.com
            </span>
          </Link>
        </div>
        </HoverEffect>
      </div>
    </section>
  );
}
