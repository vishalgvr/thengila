"use client";

import React from "react";
import { BRAND_CONFIG } from "@/config/brand.config";
import { WhatsAppButton } from "./WhatsAppButton";
import { BrandWordmark } from "./BrandWordmark";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  activeSection,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080A09]/98 backdrop-blur-xl px-6 py-8 md:hidden transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top Bar with Logo & Close Button */}
      <div className="flex items-center justify-between border-b border-[#C6A66B]/20 pb-5">
        <BrandWordmark size="sm" withTagline={false} />
        <button
          onClick={onClose}
          aria-label="Close Navigation"
          className="p-2 text-[#AAA79D] hover:text-[#C6A66B] transition-colors focus:outline-none"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-5 my-auto py-6">
        {BRAND_CONFIG.navigation.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`font-serif-luxury text-2xl uppercase tracking-[0.2em] transition-all flex items-center justify-between ${
                isActive
                  ? "text-[#C6A66B] font-medium pl-2 border-l border-[#C6A66B]"
                  : "text-[#F2EBDD]/80 hover:text-[#C6A66B]"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-xs font-sans tracking-[0.2em] text-[#AAA79D]/40">
                0{BRAND_CONFIG.navigation.indexOf(item) + 1}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-4 border-t border-[#C6A66B]/20 pt-6">
        <WhatsAppButton
          variant="filled"
          size="md"
          label="ENQUIRE ON WHATSAPP"
          className="w-full text-center"
        />
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#AAA79D] pt-2">
          <span>{BRAND_CONFIG.contact.location}</span>
          <a
            href={`tel:${BRAND_CONFIG.contact.whatsappNumber}`}
            className="hover:text-[#C6A66B]"
          >
            {BRAND_CONFIG.contact.whatsappDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
