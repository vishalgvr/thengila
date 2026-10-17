"use client";

import React from "react";

const INGREDIENT_HIGHLIGHTS = [
  {
    title: "Hand-Selected Dates",
    subtitle: "Sweet Caramel Undertones",
    description:
      "Plump, luscious dates chosen for their tender flesh and rich sweetness that balances the heat of roasted chillies.",
    tag: "Dates Pickle",
  },
  {
    title: "Cold-Pressed Gingelly Oil",
    subtitle: "Traditional Sesame Extraction",
    description:
      "Unrefined oil pressed through natural timber mills. Forms the velvet medium and organic preservation blanket.",
    tag: "Both Recipes",
  },
  {
    title: "Wild Ocean Catch",
    subtitle: "Sustainably Sourced Marine Fish",
    description:
      "Selected marine fish shallow-cured to maintain firm succulent texture amidst vinegar and spices.",
    tag: "Fish Pickle",
  },
  {
    title: "Fresh Malabar Curry Leaves",
    subtitle: "Torn by Hand",
    description:
      "Picked fresh for intense herbaceous aromatics, lightly crisped in shimmering hot oil at the moment of tempering.",
    tag: "Both Recipes",
  },
  {
    title: "Kashmiri Sun-Dried Pepper",
    subtitle: "Vibrant Crimson Hue",
    description:
      "Mild lingering warmth and an unmistakable ruby glow without synthetic colorants or industrial extracts.",
    tag: "Both Recipes",
  },
  {
    title: "Roasted Fenugreek & Mustard",
    subtitle: "Stone-Ground Aromatics",
    description:
      "Gently pan-roasted to remove bitterness, developing deep nutty notes essential to traditional Kerala pickling.",
    tag: "Both Recipes",
  },
];

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      aria-label="Ingredient Philosophy"
      className="relative py-24 sm:py-32 bg-[#101411] border-t border-[#C6A66B]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A66B]" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
              Artisanal Transparency
            </span>
            <span className="w-8 h-[1px] bg-[#C6A66B]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.02em] text-[#F2EBDD] font-normal leading-[1.08]">
            NOTHING TO HIDE.
            <br />
            <span className="text-gold-gradient italic font-light">
              FLAVOUR TO DISCOVER.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#AAA79D] max-w-xl mx-auto font-light leading-relaxed">
            Every spice is selected with intention. We disclose our full ingredient
            declarations openly so you always know what graces your table.
          </p>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent mx-auto mt-6" />
        </div>

        {/* 6-Card Ingredient Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INGREDIENT_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#080A09]/80 border border-[#C6A66B]/20 hover:border-[#C6A66B]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C6A66B]">
                    {item.tag}
                  </span>
                  <span className="font-serif text-xs text-[#AAA79D]/40">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F2EBDD]">
                  {item.title}
                </h3>
                <h4 className="font-sans text-xs uppercase tracking-wider text-[#E3D2A7]/80">
                  {item.subtitle}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#AAA79D] leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#C6A66B]/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#AAA79D]/60 font-sans">
                  Honest Craft
                </span>
                <span className="text-[#C6A66B] opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  ✦
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Transparency Disclaimer */}
        <div className="mt-14 p-6 sm:p-8 bg-[#171B17] border border-[#C6A66B]/20 text-center max-w-3xl mx-auto space-y-2">
          <p className="font-sans text-xs uppercase tracking-widest text-[#E3D2A7]">
            Integrity of Formulation
          </p>
          <p className="font-sans text-xs text-[#AAA79D] leading-relaxed">
            We only substantiate verified claims. Ingredients are declared in exact
            accordance with food safety standards. No synthetic food colourings,
            artificial thickeners, or hidden additives are ever introduced.
          </p>
        </div>
      </div>
    </section>
  );
}
