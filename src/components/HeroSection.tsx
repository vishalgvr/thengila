"use client";

import React from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand.config";
import { WhatsAppButton } from "./WhatsAppButton";
import { FloatingDates } from "./FloatingDates";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:py-28 overflow-hidden bg-[#080A09]"
    >
      {/* Cinematic Atmospheric Backgrounds */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

      {/* Floating Dates Foreground */}
      <FloatingDates density="sparse" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-180px)]">
          {/* Left Column: Editorial Headline & Story intro */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8 max-w-2xl">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C6A66B]" />
              <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-ultra-wide text-[#C6A66B] font-medium">
                Kerala Gourmet Reserve
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.04] text-[#F2EBDD] font-normal tracking-[-0.015em]">
              AN ART OF
              <br />
              <span className="text-gold-gradient italic font-light">
                EXTRAORDINARY
              </span>
              <br />
              FLAVOUR.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#AAA79D] font-light leading-relaxed max-w-xl">
              Distinctive dates and fish pickles, inspired by Kerala and crafted
              for those who appreciate exceptional flavour. Handcrafted in
              artisanal small batches.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:pt-6">
              <a
                href="#collection"
                className="group inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 bg-[#C6A66B] text-[#080A09] font-sans text-xs uppercase tracking-ultra-wide font-medium transition-all duration-300 hover:bg-[#E3D2A7] shadow-[0_0_25px_rgba(198,166,107,0.25)] hover:shadow-[0_0_35px_rgba(227,210,167,0.4)]"
              >
                <span>DISCOVER OUR COLLECTION</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  ↓
                </span>
              </a>

              <WhatsAppButton
                message={BRAND_CONFIG.whatsappMessages.default}
                variant="outline"
                size="md"
                label="ENQUIRE ON WHATSAPP"
                className="w-full sm:w-auto"
              />
            </div>

            {/* Minimal Curated Note */}
            <div className="pt-6 sm:pt-8 border-t border-[#C6A66B]/15 flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase text-[#AAA79D]/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                <span>Small Batch Only</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                <span>Two Signature Products</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Image Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[4/5] sm:aspect-[3/4]">
              {/* Soft gold illuminated background accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,166,107,0.18)_0%,rgba(112,69,47,0.1)_40%,transparent_70%)] blur-2xl transform scale-110 pointer-events-none" />

              {/* Framed Hero Image Container */}
              <div className="relative w-full h-full rounded-sm overflow-hidden border border-[#C6A66B]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                <Image
                  src="/images/dates-pickle-hero.jpg"
                  alt={`${BRAND_CONFIG.displayName} Handcrafted Dates Pickle in Glass Jar`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-[#080A09]/20 opacity-60" />

                {/* Corner Metallic Gold Embellishments */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C6A66B]/60" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C6A66B]/60" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C6A66B]/60" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C6A66B]/60" />

                {/* Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.22em] text-[#F2EBDD]/90 bg-[#080A09]/80 backdrop-blur-md px-4 py-2.5 border border-[#C6A66B]/30">
                  <span className="text-[#C6A66B]">Reserve 01</span>
                  <span>Artisanal Dates Pickle</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Scroll Indicator with gentle vertical bounce */}
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
