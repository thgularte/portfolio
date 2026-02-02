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
      <div className="flex mb-1 border-b border-cyan_medium_transparent-alpha/10">
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
                    ? "text-cyan_medium_transparent-alpha font-bold border-b-2 border-cyan_medium_transparent-alpha"
                    : "text-cyan_medium_transparent-alpha/60 hover:text-cyan_medium_transparent-alpha"
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
        <p className="text-lg leading-relaxed text-cyan_medium_transparent-alpha">
          {data[activeTab].content}
        </p>
      </div>
    </div>
  );
}
