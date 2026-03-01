"use client";

import { useState } from "react";

interface ProfileItemProps {
  title: string;
  content: string;
}

interface ProfileSectionProps {
  profileData: ProfileItemProps[];
}

export default function ProfileSection({ profileData }: ProfileSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {profileData.map((item, i) => (
        <div
          key={i}
          className="bg-gray_dark p-6 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
        >
          <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
          <p className="text-gray_light text-sm leading-relaxed">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}
