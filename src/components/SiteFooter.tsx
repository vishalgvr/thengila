"use client";

import React, { useState } from "react";
import { BRAND_CONFIG, buildWhatsAppUrl } from "@/config/brand.config";
import { BrandWordmark } from "./BrandWordmark";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <footer
        className="relative bg-[#080A09] text-[#AAA79D] border-t border-[#C6A66B]/20 pt-20 pb-12 overflow-hidden"
        role="contentinfo"
      >
        {/* Subtle background ambient gold accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C6A66B]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Row: Grand Brand Wordmark & Headline */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#C6A66B]/15 text-center md:text-left">
            <div>
              <BrandWordmark size="md" withTagline={true} />
              <p className="font-sans text-xs text-[#AAA79D] mt-3 max-w-sm">
                Kerala artisanal luxury pickle brand. An art of extraordinary
                flavour, cured in small batches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <WhatsAppButton
                variant="outline"
                size="md"
                label="ENQUIRE VIA WHATSAPP"
              />
            </div>
          </div>

          {/* Middle Row: Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
            {/* Column 1: Navigation */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-[#C6A66B] block">
                Navigation
              </span>
              <ul className="space-y-2.5 text-xs font-sans uppercase tracking-[0.16em]">
                {BRAND_CONFIG.navigation.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-[#F2EBDD] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Signature Products */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-[#C6A66B] block">
                The Collection
              </span>
              <ul className="space-y-2.5 text-xs font-sans uppercase tracking-[0.16em]">
                <li>
                  <a
                    href="#dates-pickle"
                    className="hover:text-[#F2EBDD] transition-colors flex items-center justify-center sm:justify-start gap-1.5"
                  >
                    <span>Dates Pickle</span>
                    <span className="text-[#C6A66B] text-[10px]">✦</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#fish-pickle"
                    className="hover:text-[#F2EBDD] transition-colors flex items-center justify-center sm:justify-start gap-1.5"
                  >
                    <span>Fish Pickle</span>
                    <span className="text-[#C6A66B] text-[10px]">✦</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#ingredients"
                    className="hover:text-[#F2EBDD] transition-colors"
                  >
                    Natural Ingredients
                  </a>
                </li>
                <li>
                  <a
                    href="#packaging"
                    className="hover:text-[#F2EBDD] transition-colors"
                  >
                    Glass Packaging
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Concierge */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-[#C6A66B] block">
                Direct Concierge
              </span>
              <div className="space-y-2 text-xs font-sans">
                <p className="text-[#F2EBDD]">
                  WhatsApp:{" "}
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C6A66B] underline decoration-[#C6A66B]/40"
                  >
                    {BRAND_CONFIG.contact.whatsappDisplay}
                  </a>
                </p>
                <p className="text-[#AAA79D]">
                  Email:{" "}
                  <a
                    href={`mailto:${BRAND_CONFIG.contact.email}`}
                    className="hover:text-[#C6A66B]"
                  >
                    {BRAND_CONFIG.contact.email}
                  </a>
                </p>
                <p className="text-[#AAA79D] pt-1">
                  {BRAND_CONFIG.contact.location}
                </p>
              </div>
            </div>

            {/* Column 4: Social & Notes */}
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-[#C6A66B] block">
                Connect
              </span>
              <div className="flex justify-center sm:justify-start gap-4 text-xs font-sans uppercase tracking-wider">
                <a
                  href={BRAND_CONFIG.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A66B] transition-colors"
                >
                  Instagram
                </a>
                <span className="text-[#C6A66B]/40">•</span>
                <a
                  href={BRAND_CONFIG.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A66B] transition-colors"
                >
                  Facebook
                </a>
              </div>
              <p className="text-[11px] text-[#AAA79D]/70 leading-relaxed pt-2">
                Pure natural food brand. Handcrafted without artificial coloring or industrial preservatives.
              </p>
            </div>
          </div>

          {/* Bottom Row: Copyright, Privacy & Legal */}
          <div className="pt-8 border-t border-[#C6A66B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wider font-sans text-[#AAA79D]/60">
            <div>
              © 2026 {BRAND_CONFIG.name}. {BRAND_CONFIG.tagline} All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-[#C6A66B] transition-colors underline decoration-dotted"
              >
                Privacy Notice
              </button>
              <span>•</span>
              <a href="#hero" className="hover:text-[#C6A66B] transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#101411] border border-[#C6A66B]/40 max-w-lg w-full p-6 sm:p-8 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#C6A66B]/20 pb-3">
              <h3 className="font-serif-luxury text-xl text-[#F2EBDD] uppercase">
                Privacy Policy Notice
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#AAA79D] hover:text-[#C6A66B] text-lg"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#AAA79D] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                At {BRAND_CONFIG.displayName}, we respect your personal privacy. We do
                not collect unneeded tracking data or sell your information.
              </p>
              <p>
                When you initiate an inquiry via WhatsApp, your conversation is
                governed by WhatsApp&apos;s standard end-to-end encryption and terms.
                We solely use your contact details to answer your inquiries and
                coordinate small-batch dispatch.
              </p>
              <p>
                For any data questions, write to us directly at{" "}
                <span className="text-[#C6A66B]">{BRAND_CONFIG.contact.email}</span>.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 bg-[#171B17] hover:bg-[#C6A66B] text-[#F2EBDD] hover:text-[#080A09] border border-[#C6A66B]/40 font-sans text-xs uppercase tracking-wider transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
