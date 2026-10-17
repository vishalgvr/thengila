"use client";

import React from "react";
import { BRAND_CONFIG, buildWhatsAppUrl } from "@/config/brand.config";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "outline" | "filled" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  message = BRAND_CONFIG.whatsappMessages.default,
  variant = "outline",
  size = "md",
  label = "ENQUIRE ON WHATSAPP",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  const baseStyles =
    "group inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.16em] transition-all duration-300 rounded-none relative overflow-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] gap-2",
    md: "px-6 py-3 text-[12px] gap-2.5",
    lg: "px-8 py-4 text-[13px] gap-3",
  };

  const variantStyles = {
    outline:
      "border border-[#C6A66B]/60 text-[#F2EBDD] hover:text-[#080A09] hover:bg-[#C6A66B] hover:border-[#C6A66B] shadow-[0_0_15px_rgba(198,166,107,0.08)] hover:shadow-[0_0_25px_rgba(198,166,107,0.3)]",
    filled:
      "bg-[#C6A66B] text-[#080A09] hover:bg-[#E3D2A7] border border-[#C6A66B] shadow-[0_0_20px_rgba(198,166,107,0.25)] hover:shadow-[0_0_30px_rgba(227,210,167,0.4)]",
    dark:
      "bg-[#101411]/90 backdrop-blur-md border border-[#C6A66B]/30 text-[#F2EBDD] hover:border-[#C6A66B] hover:bg-[#171B17] hover:text-[#E3D2A7] shadow-lg",
    ghost:
      "text-[#E3D2A7] hover:text-[#F2EBDD] border-b border-[#C6A66B]/40 hover:border-[#C6A66B] pb-1 px-0 rounded-none",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} via WhatsApp to ${BRAND_CONFIG.contact.whatsappDisplay}`}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {showIcon && (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15s-.778.98-.954 1.18c-.176.2-.352.226-.653.075s-1.27-.468-2.42-1.493c-.895-.798-1.5-1.784-1.676-2.085s-.019-.464.132-.614c.135-.134.301-.351.452-.527s.2-.301.3-.502.05-.376-.025-.527c-.075-.15-.678-1.633-.929-2.238-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.51 1.079 2.912 1.23 3.113c.15.201 2.124 3.243 5.145 4.549.719.31 1.281.496 1.719.635.722.23 1.379.197 1.899.12.579-.087 1.782-.728 2.033-1.432s.251-1.306.176-1.432c-.075-.126-.276-.201-.577-.351zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.82 1.589 5.372L2 22l4.764-1.572c1.488.895 3.226 1.41 5.276 1.41 5.522 0 10.01-4.488 10.01-10.01S17.562 2 12.04 2zm0 18.258c-1.78 0-3.428-.515-4.825-1.405l-.346-.22-2.827.933.948-2.756-.24-.382a8.212 8.212 0 01-1.264-4.418c0-4.55 3.702-8.252 8.254-8.252 4.55 0 8.252 3.702 8.252 8.252 0 4.552-3.702 8.254-8.252 8.254z" />
        </svg>
      )}
      <span>{label}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
