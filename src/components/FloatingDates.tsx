"use client";

import React from "react";
import Image from "next/image";

interface FloatingDatesProps {
  density?: "sparse" | "moderate";
  className?: string;
}

export function FloatingDates({
  density = "sparse",
  className = "",
}: FloatingDatesProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Date 1: Top Right - Medium Depth */}
      <div
        className="absolute top-[12%] right-[4%] sm:right-[10%] w-20 sm:w-28 md:w-36 aspect-square animate-float-1 opacity-80 transition-transform will-change-transform"
        style={{ animationDuration: "14s" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/floating-date-1.png"
            alt=""
            fill
            sizes="(max-width: 768px) 112px, 144px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Date 2: Deep Background - Small, subtle blur for depth of field */}
      <div
        className="absolute top-[48%] left-[5%] sm:left-[8%] w-14 sm:w-18 md:w-24 aspect-square animate-float-2 opacity-45 blur-[0.6px] will-change-transform"
        style={{ animationDuration: "18s", animationDelay: "-4s" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/floating-date-2.png"
            alt=""
            fill
            sizes="(max-width: 768px) 72px, 96px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Date 3: Lower Right - Foreground subtle drift */}
      <div
        className="absolute bottom-[16%] right-[12%] sm:right-[18%] w-16 sm:w-24 md:w-28 aspect-square animate-float-3 opacity-65 will-change-transform"
        style={{ animationDuration: "16s", animationDelay: "-8s" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/floating-date-1.png"
            alt=""
            fill
            sizes="(max-width: 768px) 96px, 112px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Date 4 (If moderate): Mid-left accent */}
      {density === "moderate" && (
        <div
          className="absolute top-[75%] left-[16%] w-16 sm:w-20 aspect-square animate-float-1 opacity-50 blur-[0.4px] will-change-transform"
          style={{ animationDuration: "20s", animationDelay: "-11s" }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/floating-date-2.png"
              alt=""
              fill
              sizes="80px"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
