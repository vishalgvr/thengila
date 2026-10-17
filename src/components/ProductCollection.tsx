"use client";

import React from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand.config";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCollection() {
  const [datesProduct, fishProduct] = BRAND_CONFIG.products;

  return (
    <section
      id="collection"
      aria-label="The Signature Collection"
      className="relative py-24 sm:py-32 bg-[#080A09] border-t border-[#C6A66B]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 justify-center">
            <span className="w-6 h-[1px] bg-[#C6A66B]" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
              Handcrafted in Kerala
            </span>
            <span className="w-6 h-[1px] bg-[#C6A66B]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.02em] text-[#F2EBDD]">
            THE SIGNATURE COLLECTION
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#AAA79D] font-light">
            Two distinctive expressions of flavour.
          </p>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A66B]/50 to-transparent mx-auto mt-6" />
        </div>

        {/* Exactly TWO Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 01: Dates Pickle */}
          <div className="group relative flex flex-col bg-[#101411] border border-[#C6A66B]/20 hover:border-[#C6A66B]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(112,69,47,0.15)] rounded-none overflow-hidden">
            {/* Top Amber Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(112,69,47,0.2)_0%,transparent_70%)] pointer-events-none" />

            {/* Product Image Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080A09]">
              <Image
                src={datesProduct.image}
                alt={`${datesProduct.name} Handcrafted jar`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101411] via-transparent to-transparent opacity-90" />

              {/* Number and Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-3">
                <span className="font-serif text-sm tracking-[0.2em] text-[#C6A66B] bg-[#080A09]/80 px-2.5 py-1 border border-[#C6A66B]/30">
                  01
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#F2EBDD]/90 bg-[#080A09]/60 px-3 py-1">
                  Dates Pickle
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-9 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-[#C6A66B] font-medium">
                  PRODUCT 01 — DATES PICKLE
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F2EBDD] uppercase font-normal">
                  {datesProduct.name}
                </h3>
                <p className="font-sans text-sm text-[#AAA79D] leading-relaxed">
                  {datesProduct.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#C6A66B]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#dates-pickle"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#171B17] hover:bg-[#C6A66B] text-[#F2EBDD] hover:text-[#080A09] border border-[#C6A66B]/40 hover:border-[#C6A66B] font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                >
                  {datesProduct.buttonLabel}
                </a>

                <WhatsAppButton
                  message={datesProduct.whatsappMessage}
                  variant="ghost"
                  size="sm"
                  label="Quick Enquire"
                  className="sm:ml-auto"
                />
              </div>
            </div>
          </div>

          {/* Card 02: Fish Pickle */}
          <div className="group relative flex flex-col bg-[#101411] border border-[#C6A66B]/20 hover:border-[#C6A66B]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(23,63,53,0.25)] rounded-none overflow-hidden">
            {/* Top Forest Green Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(23,63,53,0.3)_0%,transparent_70%)] pointer-events-none" />

            {/* Product Image Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080A09]">
              <Image
                src={fishProduct.image}
                alt={`${fishProduct.name} Handcrafted jar`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101411] via-transparent to-transparent opacity-90" />

              {/* Number and Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-3">
                <span className="font-serif text-sm tracking-[0.2em] text-[#C6A66B] bg-[#080A09]/80 px-2.5 py-1 border border-[#C6A66B]/30">
                  02
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#F2EBDD]/90 bg-[#080A09]/60 px-3 py-1">
                  Fish Pickle
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-9 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-[#C6A66B] font-medium">
                  PRODUCT 02 — FISH PICKLE
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F2EBDD] uppercase font-normal">
                  {fishProduct.name}
                </h3>
                <p className="font-sans text-sm text-[#AAA79D] leading-relaxed">
                  {fishProduct.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#C6A66B]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#fish-pickle"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#171B17] hover:bg-[#C6A66B] text-[#F2EBDD] hover:text-[#080A09] border border-[#C6A66B]/40 hover:border-[#C6A66B] font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                >
                  {fishProduct.buttonLabel}
                </a>

                <WhatsAppButton
                  message={fishProduct.whatsappMessage}
                  variant="ghost"
                  size="sm"
                  label="Quick Enquire"
                  className="sm:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
