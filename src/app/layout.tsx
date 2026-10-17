import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { BRAND_CONFIG } from "@/config/brand.config";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080A09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_CONFIG.siteUrl),
  title: {
    default: `${BRAND_CONFIG.displayName} — ${BRAND_CONFIG.tagline}`,
    template: `%s | ${BRAND_CONFIG.displayName}`,
  },
  description: BRAND_CONFIG.metaDescription,
  keywords: [
    "Kerala pickle",
    "Gourmet dates pickle",
    "Kerala fish pickle",
    "Artisanal pickles",
    "Luxury food Kerala",
    "Small-batch pickles",
    "Malabar dates pickle",
    "Traditional fish pickle",
    "Thengila pickles",
  ],
  authors: [{ name: BRAND_CONFIG.displayName }],
  creator: BRAND_CONFIG.displayName,
  publisher: BRAND_CONFIG.displayName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BRAND_CONFIG.siteUrl,
    title: `${BRAND_CONFIG.displayName} — ${BRAND_CONFIG.tagline}`,
    description: BRAND_CONFIG.metaDescription,
    siteName: BRAND_CONFIG.displayName,
    images: [
      {
        url: "/images/dates-pickle-hero.jpg",
        width: 1200,
        height: 900,
        alt: `${BRAND_CONFIG.displayName} Dates Pickle`,
      },
      {
        url: "/images/fish-pickle-hero.jpg",
        width: 1200,
        height: 900,
        alt: `${BRAND_CONFIG.displayName} Fish Pickle`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_CONFIG.displayName} — ${BRAND_CONFIG.tagline}`,
    description: BRAND_CONFIG.metaDescription,
    images: ["/images/dates-pickle-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080A09] text-[#F2EBDD] font-sans antialiased selection:bg-[#C6A66B] selection:text-[#080A09]">
        {children}
      </body>
    </html>
  );
}
