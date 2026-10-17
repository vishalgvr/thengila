"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BRAND_CONFIG, ProductConfig } from "@/config/brand.config";
import { WhatsAppButton } from "./WhatsAppButton";
import { FloatingDates } from "./FloatingDates";
import { MovingFish } from "./MovingFish";

export function ProductFeature() {
  const [datesProduct, fishProduct] = BRAND_CONFIG.products;

  return (
    <div className="relative">
      {/* SECTION A: DATES PICKLE */}
      <ProductDatesSection product={datesProduct} />

      {/* SECTION B: FISH PICKLE */}
      <ProductFishSection product={fishProduct} />
    </div>
  );
}

/**
 * Dedicated Showcase for Dates Pickle
 */
function ProductDatesSection({ product }: { product: ProductConfig }) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "serving" | "storage">("ingredients");

  return (
    <section
      id="dates-pickle"
      aria-label="Dates Pickle Feature"
      className="relative py-24 sm:py-32 bg-[#080A09] border-t border-[#C6A66B]/15 overflow-hidden"
    >
      {/* Background Radial Amber Tone & Floating Dates */}
      <div className="absolute inset-0 bg-radial-dates pointer-events-none" />
      <FloatingDates density="moderate" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Product Photography & Vignette */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-none overflow-hidden border border-[#C6A66B]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
              <Image
                src={product.image}
                alt={`${product.name} Luxury Presentation`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent opacity-60" />

              {/* Jar Specifications Overlay Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#101411]/90 backdrop-blur-md border border-[#C6A66B]/30 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C6A66B]">
                    Packaging Specification
                  </span>
                  <span className="text-xs text-[#F2EBDD]">
                    {product.details.jarSize}
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#AAA79D]">
                    Origin
                  </span>
                  <span className="text-xs text-[#E3D2A7]">
                    Handcrafted in Kerala
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C6A66B]" />
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
                  Signature Selection • 01
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.015em] text-[#F2EBDD] font-normal leading-[1.08]">
                {product.editorialHeading}
              </h2>
              <p className="font-serif italic text-lg text-[#E3D2A7]/90 font-light">
                {product.editorialSubtitle}
              </p>
            </div>

            <p className="font-sans text-base text-[#AAA79D] leading-relaxed">
              {product.editorialDescription}
            </p>

            {/* Interactive Detail Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-[#C6A66B]/20 gap-6 sm:gap-8">
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`pb-3 font-sans text-xs uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === "ingredients"
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  Ingredients
                  {activeTab === "ingredients" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("serving")}
                  className={`pb-3 font-sans text-xs uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === "serving"
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  Serving Notes
                  {activeTab === "serving" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("storage")}
                  className={`pb-3 font-sans text-xs uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === "storage"
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  Storage
                  {activeTab === "storage" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                  )}
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="py-5 min-h-[140px]">
                {activeTab === "ingredients" && (
                  <div className="grid grid-cols-2 gap-2.5">
                    {product.details.verifiedIngredients.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#F2EBDD]/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]/60 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "serving" && (
                  <ul className="space-y-2.5 text-xs text-[#AAA79D]">
                    {product.details.servingSuggestions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C6A66B] flex-shrink-0 mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "storage" && (
                  <ul className="space-y-2.5 text-xs text-[#AAA79D]">
                    {product.details.storageInstructions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C6A66B] flex-shrink-0 mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* WhatsApp Enquiry Button */}
            <div className="pt-4 border-t border-[#C6A66B]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <WhatsAppButton
                message={product.whatsappMessage}
                variant="filled"
                size="md"
                label="ENQUIRE FOR DATES PICKLE"
              />
              <span className="text-[11px] font-sans text-[#AAA79D] uppercase tracking-[0.16em]">
                Pre-filled enquiry for pricing & sizes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Dedicated Showcase for Fish Pickle with Underwater Atmosphere & Moving Fish
 */
function ProductFishSection({ product }: { product: ProductConfig }) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "serving" | "storage">("ingredients");

  return (
    <section
      id="fish-pickle"
      aria-label="Fish Pickle Feature"
      className="relative py-24 sm:py-32 bg-[#101411] border-t border-[#C6A66B]/15 overflow-hidden"
    >
      {/* Underwater Caustics, Ambient Rays & Moving Fish Silhouettes */}
      <MovingFish />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Details */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C6A66B]" />
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
                  Signature Selection • 02
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.015em] text-[#F2EBDD] font-normal leading-[1.08]">
                {product.editorialHeading}
              </h2>
              <p className="font-serif italic text-lg text-[#E3D2A7]/90 font-light">
                {product.editorialSubtitle}
              </p>
            </div>

            <p className="font-sans text-base text-[#AAA79D] leading-relaxed">
              {product.editorialDescription}
            </p>

            {/* Fish Variety & Allergen Notice Box */}
            <div className="p-4 bg-[#173F35]/30 border border-[#C6A66B]/30 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#E3D2A7] font-medium tracking-[0.1em] uppercase">
                <span>✦ Seasonal Marine Batch Policy</span>
              </div>
              <p className="text-[#F2EBDD]/80">
                {product.details.fishVarietyNotice}
              </p>
              {product.details.allergenNotice && (
                <p className="text-[#C6A66B] text-[11px] tracking-wider uppercase pt-1">
                  Allergen Notice: {product.details.allergenNotice}
                </p>
              )}
            </div>

            {/* Interactive Detail Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-[#C6A66B]/20 gap-6 sm:gap-8">
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`pb-3 font-sans text-xs uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === "ingredients"
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  Ingredients
                  {activeTab === "ingredients" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("serving")}
                  className={`pb-3 font-sans text-xs uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === "serving"
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  Serving Notes
                  {activeTab === "serving" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("storage")}
                  className={`pb-3 font-sans text-xs uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === "storage"
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  Storage
                  {activeTab === "storage" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                  )}
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="py-5 min-h-[140px]">
                {activeTab === "ingredients" && (
                  <div className="grid grid-cols-2 gap-2.5">
                    {product.details.verifiedIngredients.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#F2EBDD]/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#173F35] border border-[#C6A66B]/40 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "serving" && (
                  <ul className="space-y-2.5 text-xs text-[#AAA79D]">
                    {product.details.servingSuggestions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C6A66B] flex-shrink-0 mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "storage" && (
                  <ul className="space-y-2.5 text-xs text-[#AAA79D]">
                    {product.details.storageInstructions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C6A66B] flex-shrink-0 mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* WhatsApp Enquiry Button */}
            <div className="pt-4 border-t border-[#C6A66B]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <WhatsAppButton
                message={product.whatsappMessage}
                variant="filled"
                size="md"
                label="ENQUIRE FOR FISH PICKLE"
              />
              <span className="text-[11px] font-sans text-[#AAA79D] uppercase tracking-[0.16em]">
                Enquire for current catch variety & availability
              </span>
            </div>
          </div>

          {/* Right Column: Product Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-none overflow-hidden border border-[#C6A66B]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
              <Image
                src={product.image}
                alt={`${product.name} Luxury Presentation`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101411] via-transparent to-transparent opacity-60" />

              {/* Jar Specifications Overlay Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#080A09]/90 backdrop-blur-md border border-[#C6A66B]/30 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C6A66B]">
                    Packaging Specification
                  </span>
                  <span className="text-xs text-[#F2EBDD]">
                    {product.details.jarSize}
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#AAA79D]">
                    Coastline
                  </span>
                  <span className="text-xs text-[#E3D2A7]">
                    Malabar Coast, Kerala
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
