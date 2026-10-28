import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="relative shrink-0">
      <button
        type="button"
        aria-label="Foto de Theodor Gularte. Passe o mouse ou foque para ver outra foto"
        className="group relative block size-70 overflow-hidden rounded-full border-[6px] border-soft focus-visible:outline-offset-4 md:size-72 lg:size-95"
      >
        <Image
          src="/images/formatura1.png"
          alt="Theodor Gularte em sua formatura, com beca e faixa azul"
          fill
          sizes="(max-width: 767px) 280px, (max-width: 1023px) 288px, 380px"
          preload
          className="object-cover transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 motion-reduce:transition-none"
        />
        <Image
          src="/images/portrait-secondary.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 767px) 280px, (max-width: 1023px) 288px, 380px"
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 motion-reduce:transition-none"
        />
      </button>
      <span className="pointer-events-none absolute -bottom-3 right-0 flex size-24 items-center justify-center rounded-full border-4 border-soft bg-primary text-base text-bg">
        FULL STACK
      </span>
    </div>
  );
}
