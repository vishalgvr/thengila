import React from "react";
import { IntroAnimation } from "@/components/IntroAnimation";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProductCollection } from "@/components/ProductCollection";
import { ProductFeature } from "@/components/ProductFeature";
import { BrandStory } from "@/components/BrandStory";
import { IngredientsSection } from "@/components/IngredientsSection";
import { PackagingSection } from "@/components/PackagingSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080A09] text-[#F2EBDD] selection:bg-[#C6A66B] selection:text-[#080A09] relative">
      {/* Intro Animation (brief, skippable, session-cached) */}
      <IntroAnimation />

      {/* Global Luxury Navigation */}
      <SiteHeader />

      {/* Hero Section with Floating Dates & Cinematic Lighting */}
      <HeroSection />

      {/* The Signature Collection: Exactly Two Products */}
      <ProductCollection />

      {/* Dedicated Presentations: Dates Pickle & Fish Pickle with Moving Fish */}
      <ProductFeature />

      {/* Brand Story: Rooted in Nature. Defined by Flavour. */}
      <BrandStory />

      {/* Natural Ingredient Philosophy: Nothing to Hide. Flavour to Discover. */}
      <IngredientsSection />

      {/* Packaging & Glass Preservation: Thoughtfully Packaged. */}
      <PackagingSection />

      {/* Direct WhatsApp Concierge & Inquiry Selector */}
      <ContactSection />

      {/* Luxury Dark Footer */}
      <SiteFooter />
    </main>
  );
}
