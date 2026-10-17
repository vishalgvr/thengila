"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand.config";
import { WhatsAppButton } from "./WhatsAppButton";
import { FloatingDates } from "./FloatingDates";

interface SlideData {
  id: "dates" | "fish";
  number: string;
  badge: string;
  headlineLine1: string;
  headlineEmphasized: string;
  headlineLine2: string;
  description: string;
  bottleImage: string;
  bottleAlt: string;
  anchor: string;
  whatsappMessage: string;
  glowColor: string;
  ambientGrad: string;
  flavorProfile: string;
}

const SLIDES: SlideData[] = [
  {
    id: "dates",
    number: "01",
    badge: "KERALA GOURMET RESERVE",
    headlineLine1: "AN ART OF",
    headlineEmphasized: "EXTRAORDINARY",
    headlineLine2: "FLAVOUR.",
    description:
      "Distinctive dates pickle, inspired by Kerala and crafted for those who appreciate exceptional flavour. Sun-ripened sweetness balanced by slow-tempered Malabar spice.",
    bottleImage: "/images/dates-jar-transparent.png",
    bottleAlt: `${BRAND_CONFIG.displayName} Handcrafted Dates Pickle Luxury Glass Jar`,
    anchor: "#dates-pickle",
    whatsappMessage: BRAND_CONFIG.whatsappMessages.datesPickle,
    glowColor: "rgba(198, 166, 107, 0.22)",
    ambientGrad:
      "radial-gradient(circle at 60% 45%, rgba(112, 69, 47, 0.32) 0%, rgba(198, 166, 107, 0.12) 35%, transparent 70%)",
    flavorProfile: "Rich Medjool Dates • Cold-Pressed Sesame • Roasted Spices",
  },
  {
    id: "fish",
    number: "02",
    badge: "COASTAL HERITAGE RESERVE",
    headlineLine1: "A BOLD TASTE OF",
    headlineEmphasized: "KERALA COASTAL",
    headlineLine2: "HERITAGE.",
    description:
      "Selected marine catch slow-shallow fried and steeped in fiery garlic, curry leaves, and stone-ground spices. Traditional Malabar coastal culinary craft.",
    bottleImage: "/images/fish-jar-transparent.png",
    bottleAlt: `${BRAND_CONFIG.displayName} Handcrafted Kerala Fish Pickle Luxury Glass Jar`,
    anchor: "#fish-pickle",
    whatsappMessage: BRAND_CONFIG.whatsappMessages.fishPickle,
    glowColor: "rgba(23, 63, 53, 0.45)",
    ambientGrad:
      "radial-gradient(circle at 60% 45%, rgba(23, 63, 53, 0.5) 0%, rgba(198, 166, 107, 0.15) 35%, transparent 70%)",
    flavorProfile: "Wild Marine Catch • Fresh Malabar Curry Leaves • Stone-Ground Mustard",
  },
];

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = SLIDES[currentSlideIndex];

  // Auto-advance slider every 7s when not hovered
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      id="hero"
      aria-label="Hero Luxury Showcase Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:py-28 overflow-hidden bg-[#080A09]"
    >
      {/* Dynamic Ambient Background Glow matched to current product */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-out pointer-events-none"
        style={{ background: current.ambientGrad }}
      />
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

      {/* Floating Dates in foreground for Dates Pickle */}
      {current.id === "dates" && <FloatingDates density="sparse" />}

      {/* Ambient underwater caustics if Fish Pickle slide */}
      {current.id === "fish" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[25%] w-[400px] h-[400px] bg-[#173F35]/25 rounded-full blur-3xl animate-pulse" />
        </div>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-190px)]">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7 max-w-2xl">
            {/* Slide Index & Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C6A66B]" />
              <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-ultra-wide text-[#C6A66B] font-medium">
                {current.badge}
              </span>
              <span className="text-xs text-[#AAA79D]/50 font-serif">
                [{current.number} / 02]
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.04] text-[#F2EBDD] font-normal tracking-[-0.015em] transition-all duration-500">
              {current.headlineLine1}
              <br />
              <span className="text-gold-gradient italic font-light">
                {current.headlineEmphasized}
              </span>
              <br />
              {current.headlineLine2}
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#AAA79D] font-light leading-relaxed max-w-xl transition-opacity duration-500">
              {current.description}
            </p>

            {/* Flavor Profile Micro-note */}
            <div className="py-2.5 px-4 bg-[#101411]/80 border-l-2 border-[#C6A66B] text-xs text-[#E3D2A7]/90 font-sans tracking-wide">
              <span className="text-[#C6A66B] font-medium uppercase tracking-wider block text-[10px] mb-0.5">
                Artisanal Profile
              </span>
              {current.flavorProfile}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={current.anchor}
                className="group inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 bg-[#C6A66B] text-[#080A09] font-sans text-xs uppercase tracking-ultra-wide font-medium transition-all duration-300 hover:bg-[#E3D2A7] shadow-[0_0_25px_rgba(198,166,107,0.25)] hover:shadow-[0_0_35px_rgba(227,210,167,0.4)]"
              >
                <span>EXPLORE THIS RECIPE</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  ↓
                </span>
              </a>

              <WhatsAppButton
                message={current.whatsappMessage}
                variant="outline"
                size="md"
                label="ENQUIRE ON WHATSAPP"
                className="w-full sm:w-auto"
              />
            </div>

            {/* Slider Switcher Tabs */}
            <div className="pt-6 sm:pt-8 border-t border-[#C6A66B]/15 flex items-center justify-between">
              <div className="flex items-center gap-6">
                {SLIDES.map((slide, idx) => {
                  const isActive = currentSlideIndex === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-all relative pb-2 text-left ${
                        isActive
                          ? "text-[#C6A66B] font-medium"
                          : "text-[#AAA79D]/60 hover:text-[#F2EBDD]"
                      }`}
                    >
                      <span className="mr-2 text-[#C6A66B]/60">0{idx + 1}</span>
                      <span>
                        {slide.id === "dates" ? "Dates Pickle" : "Fish Pickle"}
                      </span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A66B]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Product Slide"
                  className="w-9 h-9 flex items-center justify-center border border-[#C6A66B]/30 text-[#AAA79D] hover:text-[#C6A66B] hover:border-[#C6A66B] transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Product Slide"
                  className="w-9 h-9 flex items-center justify-center border border-[#C6A66B]/30 text-[#AAA79D] hover:text-[#C6A66B] hover:border-[#C6A66B] transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: FREE-STANDING REAL PICKLE BOTTLE (NO BOX, NO BORDER) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6">
            {/* The Jar Container — Completely borderless, box-free, floating in dark space */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[3/4] flex items-center justify-center group select-none">
              {/* Radial Backlight behind the bottle to accentuate glass translucency */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-70 transition-all duration-700 pointer-events-none transform scale-90"
                style={{
                  background:
                    current.id === "dates"
                      ? "radial-gradient(circle, rgba(198,166,107,0.28) 0%, rgba(112,69,47,0.18) 40%, transparent 70%)"
                      : "radial-gradient(circle, rgba(23,63,53,0.55) 0%, rgba(198,166,107,0.18) 45%, transparent 70%)",
                }}
              />

              {/* Realistic Ground Pedestal Shadow Beneath the Jar Base */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[72%] h-8 bg-black/90 rounded-[50%] blur-md pointer-events-none transition-all duration-500 group-hover:scale-95 group-hover:opacity-80" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[55%] h-4 bg-black rounded-[50%] blur-sm pointer-events-none" />

              {/* Photorealistic Isolated Glass Jar — No border, no box */}
              <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                <Image
                  src={current.bottleImage}
                  alt={current.bottleAlt}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 340px, (max-width: 1200px) 400px, 440px"
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter transition-all duration-700 will-change-transform"
                />
              </div>

              {/* Floating Minimal Gold Stamp beside the bottle — Zero box, zero border */}
              <div className="absolute top-2 right-0 sm:-right-4 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[#C6A66B] font-medium pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B] animate-pulse" />
                <span>350g Artisanal Jar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative mt-8 sm:mt-12 flex flex-col items-center justify-center">
          <a
            href="#collection"
            aria-label="Scroll to Signature Collection"
            className="group flex flex-col items-center gap-2 text-[#AAA79D] hover:text-[#C6A66B] transition-colors"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-[#C6A66B]/40 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-[#C6A66B] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
