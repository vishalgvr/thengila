"use client";

import React from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand.config";

export function BrandStory() {
  return (
    <section
      id="story"
      aria-label="Our Brand Story"
      className="relative py-24 sm:py-32 bg-[#080A09] border-t border-[#C6A66B]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A66B]" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
              The Thengila Philosophy
            </span>
            <span className="w-8 h-[1px] bg-[#C6A66B]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.02em] text-[#F2EBDD] font-normal leading-[1.08]">
            ROOTED IN NATURE.
            <br />
            <span className="text-gold-gradient italic font-light">
              DEFINED BY FLAVOUR.
            </span>
          </h2>

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent mx-auto mt-6" />
        </div>

        {/* Wide Full-Width Ingredient Flatlay Showcase */}
        <div className="relative aspect-[16/9] w-full max-h-[520px] rounded-none overflow-hidden border border-[#C6A66B]/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] mb-16 sm:mb-20 group">
          <Image
            src="/images/gourmet-spices-dates.jpg"
            alt="Thengila Artisanal Kerala Spices and Selected Dates"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-[#080A09]/30 opacity-70" />

          {/* Caption Tag */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-[#080A09]/85 backdrop-blur-md px-5 py-3 border border-[#C6A66B]/30 max-w-md">
            <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-[#C6A66B] font-medium">
              Authentic Malabar Flora
            </span>
            <p className="font-serif italic text-sm sm:text-base text-[#F2EBDD] mt-0.5">
              Curated whole spices, sun-ripened dates & cold-pressed oils.
            </p>
          </div>
        </div>

        {/* Three Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 01 */}
          <div className="space-y-4 p-8 bg-[#101411]/70 border border-[#C6A66B]/20 relative group hover:border-[#C6A66B]/60 transition-colors">
            <span className="text-xs font-serif text-[#C6A66B] tracking-[0.25em]">
              01 / HERITAGE
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F2EBDD] uppercase">
              Kerala Culinary Memory
            </h3>
            <p className="font-sans text-sm text-[#AAA79D] leading-relaxed">
              In Kerala, a pickle is never merely a side accompaniment — it is
              the defining punctuation of a meal. We honour this generational
              tradition by preserving flavours the slow, patient way.
            </p>
            <div className="w-8 h-[1px] bg-[#C6A66B]/40 group-hover:w-16 transition-all duration-300" />
          </div>

          {/* Pillar 02 */}
          <div className="space-y-4 p-8 bg-[#101411]/70 border border-[#C6A66B]/20 relative group hover:border-[#C6A66B]/60 transition-colors">
            <span className="text-xs font-serif text-[#C6A66B] tracking-[0.25em]">
              02 / SMALL BATCH
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F2EBDD] uppercase">
              Micro-Crafted Batches
            </h3>
            <p className="font-sans text-sm text-[#AAA79D] leading-relaxed">
              By producing solely two signature recipes in strictly limited
              quantities, every jar receives attentive scrutiny. Spices are
              freshly roasted and oils are tempered by hand.
            </p>
            <div className="w-8 h-[1px] bg-[#C6A66B]/40 group-hover:w-16 transition-all duration-300" />
          </div>

          {/* Pillar 03 */}
          <div className="space-y-4 p-8 bg-[#101411]/70 border border-[#C6A66B]/20 relative group hover:border-[#C6A66B]/60 transition-colors">
            <span className="text-xs font-serif text-[#C6A66B] tracking-[0.25em]">
              03 / PURITY
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F2EBDD] uppercase">
              Nothing Hidden
            </h3>
            <p className="font-sans text-sm text-[#AAA79D] leading-relaxed">
              We decline synthetic enhancers, unnatural colours, and shortcuts.
              The preservation is achieved through nature&apos;s own methods:
              cold-pressed sesame oil, sea salt, roasted spices, and vinegar.
            </p>
            <div className="w-8 h-[1px] bg-[#C6A66B]/40 group-hover:w-16 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
