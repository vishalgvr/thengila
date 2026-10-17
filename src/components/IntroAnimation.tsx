"use client";

import React, { useEffect, useState } from "react";
import { BRAND_CONFIG } from "@/config/brand.config";

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro during this session
    try {
      const hasSeen = sessionStorage.getItem("thengila_intro_viewed");
      if (!hasSeen) {
        setIsVisible(true);
        // Begin fade out at 1.4s
        const fadeTimer = setTimeout(() => {
          setIsFadingOut(true);
        }, 1400);

        // Remove from DOM at 1.9s
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem("thengila_intro_viewed", "true");
        }, 1900);

        return () => {
          clearTimeout(fadeTimer);
          clearTimeout(hideTimer);
        };
      }
    } catch {
      // In case sessionStorage is restricted (e.g. strict privacy mode)
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem("thengila_intro_viewed", "true");
      } catch {}
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080A09] transition-opacity duration-500 ease-out cursor-pointer ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Welcome to Thengila intro screen (click or tap to skip)"
      role="dialog"
      aria-modal="true"
    >
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,166,107,0.12)_0%,transparent_65%)] pointer-events-none" />

      {/* Skip button for immediate access */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}
        className="absolute top-6 right-6 font-sans text-[11px] tracking-[0.25em] text-[#AAA79D] hover:text-[#C6A66B] uppercase transition-colors px-3 py-1 border border-[#C6A66B]/20 rounded-none z-10"
      >
        Skip [ESC]
      </button>

      <div className="flex flex-col items-center text-center px-4 relative z-10">
        {/* Animated Botanical Emblem */}
        <div className="w-12 h-12 mb-6 text-[#C6A66B] animate-pulse">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4C20 4 27 15 27 23C27 27.4 23.8 31 20 31C16.2 31 13 27.4 13 23C13 15 20 4 20 4Z"
              stroke="#C6A66B"
              strokeWidth="1.5"
            />
            <path
              d="M20 10V27"
              stroke="#C6A66B"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M20 18C22.5 17 24.5 19 24.5 19"
              stroke="#C6A66B"
              strokeWidth="1"
            />
            <path
              d="M20 22C17.5 21 15.5 23 15.5 23"
              stroke="#C6A66B"
              strokeWidth="1"
            />
            <circle cx="20" cy="36" r="1.5" fill="#C6A66B" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl tracking-[0.35em] text-[#F2EBDD] uppercase font-light">
          {BRAND_CONFIG.name}
        </h1>

        {/* Thin Gold Line Reveal */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent my-4" />

        {/* Tagline */}
        <p className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#C6A66B] font-light">
          {BRAND_CONFIG.tagline}
        </p>

        <p className="font-sans text-[9px] tracking-[0.25em] text-[#AAA79D]/60 uppercase mt-8">
          Kerala Gourmet Label
        </p>
      </div>
    </div>
  );
}
