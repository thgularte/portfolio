"use client";

import { useState } from "react";

interface ProfileItemProps {
  title: string;
  content: string;
}

interface ProfileSectionProps {
  data: ProfileItemProps[];
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="flex mb-1 border-b border-gray_light/10">
        {data.map((item, index) => {
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                flex-1
                py-1 px-2
                flex items-center justify-center gap-1
                text-lg font-medium
                transition-colors
                cursor-pointer
                ${
                  isActive
                    ? "text-gray_light font-bold border-b-2 border-gray_light"
                    : "text-gray_light/60 hover:text-gray_light"
                }
              `}
            >
              {item.title}

              <div
                className={`
                  w-0 h-0
                  border-l-[4px] border-l-transparent
                  border-r-[4px] border-r-transparent
                  border-b-[6px] border-b-current
                  transition-transform duration-300
                  ${isActive ? "rotate-0" : "rotate-180"}
                `}
              />
            </button>
          );
        })}
      </div>

      {/* Conteúdo */}
      <div className="pt-3">
        <p className="text-lg leading-relaxed text-gray_light">
          {data[activeTab].content}
        </p>
      </div>
    </div>
  );
}
