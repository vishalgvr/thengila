"use client";

import React, { useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/config/brand.config";
import { BrandWordmark } from "./BrandWordmark";
import { WhatsAppButton } from "./WhatsAppButton";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = [
        "hero",
        "collection",
        "dates-pickle",
        "fish-pickle",
        "story",
        "ingredients",
        "packaging",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080A09]/95 backdrop-blur-md border-b border-[#C6A66B]/20 py-3.5 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-[#080A09]/80 via-[#080A09]/40 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark Logo */}
          <a
            href="#hero"
            aria-label={`${BRAND_CONFIG.displayName} Home`}
            className="group transition-transform duration-300 hover:scale-[1.02]"
          >
            <BrandWordmark size="sm" withTagline={false} />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-7 xl:space-x-8"
          >
            {BRAND_CONFIG.navigation.map((item) => {
              const secId = item.href.replace("#", "");
              const isActive = activeSection === secId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-[11px] xl:text-[12px] uppercase tracking-[0.2em] transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#C6A66B] font-medium"
                      : "text-[#AAA79D] hover:text-[#F2EBDD]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: WhatsApp CTA & Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <WhatsAppButton
              variant="outline"
              size="sm"
              label="ENQUIRE"
              className="hidden sm:inline-flex"
            />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 text-[#F2EBDD] hover:text-[#C6A66B] transition-colors focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
