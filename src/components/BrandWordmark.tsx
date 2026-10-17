import React from "react";
import { BRAND_CONFIG } from "@/config/brand.config";

interface BrandWordmarkProps {
  size?: "sm" | "md" | "lg" | "hero";
  withTagline?: boolean;
  className?: string;
  light?: boolean;
}

export function BrandWordmark({
  size = "md",
  withTagline = false,
  className = "",
  light = false,
}: BrandWordmarkProps) {
  const sizeMap = {
    sm: {
      emblem: "w-5 h-5",
      title: "text-lg tracking-[0.24em]",
      tagline: "text-[9px] tracking-[0.3em]",
      gap: "gap-2",
    },
    md: {
      emblem: "w-6 h-6",
      title: "text-xl sm:text-2xl tracking-[0.28em]",
      tagline: "text-[10px] tracking-[0.32em]",
      gap: "gap-2.5",
    },
    lg: {
      emblem: "w-8 h-8",
      title: "text-3xl sm:text-4xl tracking-[0.3em]",
      tagline: "text-xs tracking-[0.35em]",
      gap: "gap-3",
    },
    hero: {
      emblem: "w-10 h-10 sm:w-12 sm:h-12",
      title: "text-4xl sm:text-6xl md:text-7xl tracking-[0.32em]",
      tagline: "text-xs sm:text-sm tracking-[0.38em]",
      gap: "gap-4",
    },
  };

  const current = sizeMap[size];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
    >
      <div className={`flex items-center ${current.gap}`}>
        {/* Minimal Luxury Botanical / Spice Leaf Emblem */}
        <svg
          className={`${current.emblem} text-[#C6A66B] flex-shrink-0`}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Central slender date-seed / droplet silhouette */}
          <path
            d="M20 4C20 4 27 15 27 23C27 27.4 23.8 31 20 31C16.2 31 13 27.4 13 23C13 15 20 4 20 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          {/* Internal spine and delicate spice vein */}
          <path
            d="M20 10V27"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Lateral delicate spice botanical flourishes */}
          <path
            d="M20 18C22.5 17 24.5 19 24.5 19"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M20 22C17.5 21 15.5 23 15.5 23"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Outer antique gold micro-accent dots */}
          <circle cx="20" cy="36" r="1.5" fill="currentColor" />
          <circle cx="8" cy="20" r="1" fill="currentColor" fillOpacity="0.6" />
          <circle cx="32" cy="20" r="1" fill="currentColor" fillOpacity="0.6" />
        </svg>

        <span
          className={`font-serif-luxury font-medium uppercase ${
            light ? "text-[#F2EBDD]" : "text-[#F2EBDD]"
          } ${current.title}`}
        >
          {BRAND_CONFIG.name}
        </span>
      </div>

      {withTagline && (
        <span
          className={`font-sans uppercase font-light text-[#C6A66B] mt-1 ${current.tagline}`}
        >
          {BRAND_CONFIG.tagline}
        </span>
      )}
    </div>
  );
}
