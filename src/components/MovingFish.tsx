"use client";

import React from "react";

export function MovingFish() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Underwater Caustic Light Rays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#173F35]/25 via-transparent to-[#080A09] opacity-70" />
      <div className="absolute -top-24 left-[15%] w-[450px] h-[750px] bg-gradient-to-b from-[#C6A66B]/8 via-[#173F35]/15 to-transparent blur-3xl transform -rotate-12 animate-caustic pointer-events-none" />
      <div className="absolute -top-32 right-[20%] w-[380px] h-[650px] bg-gradient-to-b from-[#173F35]/25 via-[#C6A66B]/5 to-transparent blur-3xl transform rotate-6 animate-caustic [animation-delay:-5s] pointer-events-none" />

      {/* Floating Micro-particles */}
      <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-[#C6A66B]/30 blur-[0.5px] animate-float-1" />
      <div className="absolute top-[65%] left-[65%] w-1 h-1 rounded-full bg-[#E3D2A7]/20 blur-[0.5px] animate-float-2 [animation-delay:-3s]" />
      <div className="absolute top-[40%] right-[15%] w-2 h-2 rounded-full bg-[#173F35]/40 blur-[1px] animate-float-3 [animation-delay:-7s]" />

      {/* Fish 1: Upper Midground - Swimming Right */}
      <div className="absolute top-[18%] left-0 w-36 sm:w-44 h-14 animate-swim-right-1 opacity-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        <FishSilhouette direction="right" />
      </div>

      {/* Fish 2: Deep Background - Smaller, Slower, Swimming Left */}
      <div className="absolute top-[35%] left-0 w-24 sm:w-28 h-10 animate-swim-left-1 opacity-12 blur-[0.5px]">
        <FishSilhouette direction="left" />
      </div>

      {/* Fish 3: Lower Midground - Swimming Right */}
      <div className="absolute top-[72%] left-0 w-40 sm:w-48 h-16 animate-swim-right-2 opacity-18 filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.8)]">
        <FishSilhouette direction="right" />
      </div>

      {/* Fish 4: Deep Background - Lower Left */}
      <div className="absolute top-[82%] left-0 w-28 sm:w-32 h-12 animate-swim-left-2 opacity-10 blur-[0.8px]">
        <FishSilhouette direction="left" />
      </div>
    </div>
  );
}

/**
 * Realistic Marine Fish Silhouette (Kingfish / Seer Fish aerodynamic profile)
 */
function FishSilhouette({ direction = "right" }: { direction?: "right" | "left" }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="currentColor"
      className={`w-full h-full text-[#080A09]/80 stroke-[#C6A66B]/25 stroke-[0.8] ${
        direction === "left" ? "scale-x-[-1]" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Streamlined Marine Fish Body Contour */}
      <path
        d="M10 30 C 35 15, 80 12, 140 22 C 165 26, 185 28, 195 30 C 185 32, 165 34, 140 38 C 80 48, 35 45, 10 30 Z"
        fill="currentColor"
      />
      {/* Dorsal Fin */}
      <path
        d="M75 14 C 95 6, 125 10, 135 22 C 115 18, 90 16, 75 14 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Pectoral Fin */}
      <path
        d="M50 30 C 70 34, 85 44, 80 46 C 70 44, 58 38, 50 30 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Pelvic Fin */}
      <path
        d="M90 42 C 105 48, 115 50, 112 43 C 102 41, 95 41, 90 42 Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Forked Caudal (Tail) Fin */}
      <path
        d="M10 30 C 4 20, -2 10, 0 8 C 2 18, 6 26, 10 30 C 6 34, 2 42, 0 52 C -2 50, 4 40, 10 30 Z"
        fill="currentColor"
      />
      {/* Subtle Lateral Line Contour */}
      <path
        d="M30 30 Q 95 28, 160 30"
        stroke="#C6A66B"
        strokeWidth="0.6"
        strokeOpacity="0.4"
        fill="none"
      />
    </svg>
  );
}
