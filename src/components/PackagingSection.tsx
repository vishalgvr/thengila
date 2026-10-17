"use client";

import React from "react";
import Image from "next/image";

export function PackagingSection() {
  return (
    <section
      id="packaging"
      aria-label="Packaging and Sustainability"
      className="relative py-24 sm:py-32 bg-[#080A09] border-t border-[#C6A66B]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Details */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]" />
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
                  Design & Form
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.015em] text-[#F2EBDD] font-normal leading-[1.08]">
                THOUGHTFULLY
                <br />
                <span className="text-gold-gradient italic font-light">
                  PACKAGED.
                </span>
              </h2>
              <p className="font-sans text-base text-[#AAA79D] font-light leading-relaxed">
                We believe the experience of exceptional food should extend to
                the way it is presented and packaged.
              </p>
            </div>

            {/* Packaging Highlights List */}
            <div className="space-y-6 pt-2">
              <div className="p-5 bg-[#101411] border border-[#C6A66B]/20">
                <h3 className="font-serif-luxury text-lg text-[#F2EBDD] uppercase">
                  Heavy Flint Glass Jars
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AAA79D] mt-1.5 leading-relaxed">
                  Engineered with thick-gauge inert glass to eliminate chemical
                  leaching, insulate flavour, and preserve natural oil clarity
                  indefinitely.
                </p>
              </div>

              <div className="p-5 bg-[#101411] border border-[#C6A66B]/20">
                <h3 className="font-serif-luxury text-lg text-[#F2EBDD] uppercase">
                  Designed for Reusability
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AAA79D] mt-1.5 leading-relaxed">
                  Each jar is styled to be washed and repurposed as an elegant
                  countertop container for whole peppercorns, cardamom pods, or
                  kitchen keepsakes.
                </p>
              </div>

              <div className="p-5 bg-[#101411] border border-[#C6A66B]/20">
                <h3 className="font-serif-luxury text-lg text-[#F2EBDD] uppercase">
                  Airtight Metallic Seal
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AAA79D] mt-1.5 leading-relaxed">
                  Fitted with a tamper-evident golden seal to preserve the aromatic
                  temper of spices and oils from the workshop to your dining room.
                </p>
              </div>
            </div>

            {/* Material Honesty Note */}
            <p className="font-sans text-[11px] uppercase tracking-wider text-[#AAA79D]/70 pt-2">
              Glass jars and metallic lids can be endlessly recycled in standard municipal glass and metal streams.
            </p>
          </div>

          {/* Right Column: Packaging Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full max-w-lg mx-auto rounded-none overflow-hidden border border-[#C6A66B]/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] group">
              <Image
                src="/images/luxury-jar-packaging.jpg"
                alt="Thengila Luxury Heavy Glass Jar and Presentation Box Packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent opacity-50" />

              {/* Gold border shine effect */}
              <div className="absolute top-4 right-4 bg-[#080A09]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C6A66B]/40 text-[10px] tracking-[0.25em] uppercase text-[#C6A66B]">
                Bespoke Vessel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
