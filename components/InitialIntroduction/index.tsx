import { AvatarHover } from "../ui/avatarHover";
import SocialIcon from "../ui/socialIcon";


export function InitialIntroduction() {
  return (
    <div className="rounded-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30 p-6 md:p-20">
        <div className="flex-shrink-0">
          <AvatarHover
            primaryImage="/image_primary.png"
            secondaryImage="/image_secondary.png"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-gray_light">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black block">
              Olá,
            </span>
            eu sou o <span className="font-black">Theodor Gularte</span>
          </h1>

          <p className="text-base md:text-lg text-gray_light/80 mb-6">
            Desenvolvedor Full-stack
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            <SocialIcon
              href="https://github.com/thgularte"
              icon="/icon_github.svg"
              alt="GitHub"
            />
            <SocialIcon
              href="https://br.linkedin.com/in/theodor-gularte-b3759623a"
              icon="/icon_linkedin.svg"
              alt="LinkedIn"
            />
            <SocialIcon
              href="https://www.instagram.com/th_gularte"
              icon="/icon_insta.svg"
              alt="Instagram"
            />
            <SocialIcon
              href="mailto:theodormgularte@gmail.com"
              icon="/icon_gmail.svg"
              alt="Gmail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
