"use client";

import React, { useState } from "react";
import { BRAND_CONFIG, buildWhatsAppUrl } from "@/config/brand.config";
import { WhatsAppButton } from "./WhatsAppButton";

export function ContactSection() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<
    "general" | "datesPickle" | "fishPickle" | "tastingGifting"
  >("general");

  const options = [
    {
      id: "general",
      title: "General Collection Enquiry",
      desc: "Inquire about availability, current batches & orders",
      message: BRAND_CONFIG.whatsappMessages.general,
    },
    {
      id: "datesPickle",
      title: "Dates Pickle Reserve",
      desc: "Ingredients, size formats & pricing for Dates Pickle",
      message: BRAND_CONFIG.whatsappMessages.datesPickle,
    },
    {
      id: "fishPickle",
      title: "Fish Pickle Heritage",
      desc: "Fish variety, seasonal catch & pricing for Fish Pickle",
      message: BRAND_CONFIG.whatsappMessages.fishPickle,
    },
    {
      id: "tastingGifting",
      title: "Custom Gifting & Events",
      desc: "Bespoke gift boxes for celebrations & festive tables",
      message: BRAND_CONFIG.whatsappMessages.tastingGifting,
    },
  ];

  const currentOption = options.find((o) => o.id === selectedEnquiry) || options[0];

  return (
    <section
      id="contact"
      aria-label="Contact and Concierge"
      className="relative py-24 sm:py-32 bg-[#080A09] border-t border-[#C6A66B]/15 overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(23,63,53,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A66B]" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-ultra-wide text-[#C6A66B]">
              Direct Brand Concierge
            </span>
            <span className="w-8 h-[1px] bg-[#C6A66B]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.02em] text-[#F2EBDD] font-normal leading-[1.08]">
            DIRECT ENQUIRIES.
            <br />
            <span className="text-gold-gradient italic font-light">
              WHATSAPP CONCIERGE.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#AAA79D] font-light leading-relaxed">
            All small-batch orders and culinary queries are handled directly
            via WhatsApp to ensure personal attention and verified batch freshness.
          </p>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent mx-auto mt-6" />
        </div>

        {/* Interactive Enquiry Selector & Direct WhatsApp Launcher */}
        <div className="max-w-4xl mx-auto bg-[#101411] border border-[#C6A66B]/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="space-y-6">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C6A66B] block mb-2">
                Step 1: Select Your Inquiry Type
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() =>
                      setSelectedEnquiry(opt.id as typeof selectedEnquiry)
                    }
                    className={`p-4 text-left border transition-all duration-200 ${
                      selectedEnquiry === opt.id
                        ? "bg-[#171B17] border-[#C6A66B] text-[#F2EBDD]"
                        : "bg-[#080A09]/70 border-[#C6A66B]/20 text-[#AAA79D] hover:border-[#C6A66B]/50 hover:text-[#F2EBDD]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif-luxury text-base text-[#F2EBDD]">
                        {opt.title}
                      </span>
                      {selectedEnquiry === opt.id && (
                        <span className="text-[#C6A66B] text-xs">✓</span>
                      )}
                    </div>
                    <p className="font-sans text-[11px] text-[#AAA79D] mt-1">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Message Preview & Action */}
            <div className="pt-6 border-t border-[#C6A66B]/20 space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C6A66B] block">
                Step 2: Pre-filled Message Preview
              </span>
              <div className="p-4 bg-[#080A09] border border-[#C6A66B]/15 text-sm text-[#F2EBDD]/90 font-sans italic">
                &ldquo;{currentOption.message}&rdquo;
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <WhatsAppButton
                  message={currentOption.message}
                  variant="filled"
                  size="lg"
                  label="OPEN WHATSAPP CONVERSATION"
                  className="w-full sm:w-auto"
                />

                <a
                  href={`tel:${BRAND_CONFIG.contact.whatsappNumber}`}
                  className="text-center font-sans text-xs tracking-[0.18em] uppercase text-[#AAA79D] hover:text-[#C6A66B] transition-colors py-2"
                >
                  Direct Call: {BRAND_CONFIG.contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Contact Info strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="p-6 bg-[#101411]/50 border border-[#C6A66B]/15">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C6A66B] mb-1">
              WhatsApp Concierge
            </span>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-[#F2EBDD] hover:text-[#C6A66B] transition-colors"
            >
              {BRAND_CONFIG.contact.whatsappDisplay}
            </a>
          </div>

          <div className="p-6 bg-[#101411]/50 border border-[#C6A66B]/15">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C6A66B] mb-1">
              Concierge Email
            </span>
            <a
              href={`mailto:${BRAND_CONFIG.contact.email}`}
              className="font-serif text-lg text-[#F2EBDD] hover:text-[#C6A66B] transition-colors"
            >
              {BRAND_CONFIG.contact.email}
            </a>
          </div>

          <div className="p-6 bg-[#101411]/50 border border-[#C6A66B]/15">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C6A66B] mb-1">
              Location & Atelier
            </span>
            <span className="font-serif text-lg text-[#F2EBDD]">
              {BRAND_CONFIG.contact.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
