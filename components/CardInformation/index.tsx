import Image from "next/image";
import { HoverEffect } from "../effects/Hover";

interface CardItem {
  logoCard: string;
  titleCard: string;
  subTitleCard: string;
  additional?: string;
  descriptionCard?: string;
  statusIcon?: string;
}

interface CardInformationProps {
  icon: string;
  categoryTitle: string;
  items: CardItem[]; // Array de cards (1 ou mais)
}

export default function CardInformation({
  icon,
  categoryTitle,
  items,
}: CardInformationProps) {
  return (
    <>
      {/* Header da categoria (único) */}
      <div className="flex items-center gap-3 pb-4 mt-2">
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
          <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
        </div>
        <h2 className="text-details font-bold text-lg tracking-wide">
          {categoryTitle}
        </h2>
      </div>

      {/* Múltiplos cards */}
      <div className="space-y-5 w-full mb-6">
        {items.map((item, index) => (
          <HoverEffect>
            <div
              key={index}
              className="bg-slate_dark p-4 px-6 rounded-2xl border border-gray_light w-full"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Image
                    src={item.logoCard}
                    alt={item.titleCard}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col min-w-0 flex-1">
                  {/* Título */}
                  <h3 className="text-cyan_stronger font-bold text-lg">
                    {item.titleCard}
                  </h3>

                  {/* Subtítulo */}
                  <p className="text-gray_light text-xs">{item.subTitleCard}</p>

                  {/* Status */}
                  {item.statusIcon && (
                    <div className="flex items-center gap-2 pt-2 border-t border-slate_dark">
                      <Image
                        src={item.statusIcon}
                        alt=""
                        width={12}
                        height={12}
                        className="h-3 w-3 flex-shrink-0"
                      />
                      <span className="text-gray_light text-xs font-medium">
                        {item.additional}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Descrição (abaixo se presente) */}
              {item.descriptionCard && (
                <p className="pt-3 border-t border-slate_dark text-gray_light text-lg">
                  {item.descriptionCard}
                </p>
              )}
            </div>{" "}
          </HoverEffect>
        ))}
      </div>
    </>
  );
}
