# THENGILA — Luxury Dark Gourmet Pickle Brand Website

> **"Nature in Every Jar."**
> A cinematic, dark luxury informational website crafted for **Thengila**, an artisanal Kerala gourmet brand celebrating two signature small-batch recipes: **Dates Pickle** and **Fish Pickle**.

---

## ✦ Creative Direction & Experience

- **Visual Identity**: Immersive dark luxury aesthetic inspired by Michelin-star culinary labels, niche fragrance ateliers, and high-contrast editorial magazines.
- **Normal Business Model**: Built as a pure informational and brand-story website. There are **zero** e-commerce features (no shopping carts, checkout, inventory counters, or payment gateways).
- **Direct WhatsApp Concierge**: All customer inquiries, availability requests, and bespoke gifting orders route directly to WhatsApp at **`+919744570207`** with relevant, pre-filled, URL-encoded messages.
- **Cinematic Motion Design**:
  - **Floating Dates Effect**: Photorealistic dates drifting in 3D parallax layers with subtle rotation and depth-of-field blur.
  - **Underwater Atmosphere**: Deep forest-green caustics and realistic marine fish silhouettes traveling gracefully across the Fish Pickle section.
  - **Gentle Text & Image Reveals**: Chiaroscuro lighting, image zoom on hover, and restrained antique gold accents.
  - **Accessibility**: Full support for `prefers-reduced-motion` to smoothly disable decorative movement.

---

## ✦ Luxury Color Palette

| Name | Hex Code | Role |
| :--- | :--- | :--- |
| **Primary Background** | `#080A09` | 80–90% dominant near-black backdrop |
| **Secondary Background** | `#101411` | Subtle contrasting dark section canvas |
| **Elevated Card** | `#171B17` | Card backgrounds & interactive containers |
| **Deep Forest Green** | `#173F35` | Secondary coastal accent & underwater caustics |
| **Antique Gold** | `#C6A66B` | Brand emblems, active indicators, borders & primary CTAs |
| **Champagne Gold** | `#E3D2A7` | Warm typographic accents and hover highlights |
| **Warm Ivory** | `#F2EBDD` | High-contrast headlines and editorial typography |
| **Muted Text** | `#AAA79D` | Secondary body copy and metadata labels |
| **Date Brown** | `#70452F` | Amber undertone for Dates Pickle section |
| **Subtle Border** | `rgba(198,166,107,0.22)` | Hairline metallic borders |

---

## ✦ Typography

- **Headlines & Serif Accents**: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (High-contrast, elegant serif)
- **Body & Navigation**: [Manrope](https://fonts.google.com/specimen/Manrope) (Modern geometric sans-serif with wide uppercase tracking)

---

## ✦ Centralized Brand Configuration

The website is engineered with a **zero-rewrite architecture**. You can change the brand name, contact numbers, pre-filled WhatsApp messages, or product copy directly in:

```
src/config/brand.config.ts
```

### Changing the Brand Name or Contact Number
```typescript
export const BRAND_CONFIG = {
  name: "THENGILA",
  displayName: "Thengila",
  tagline: "Nature in Every Jar.",
  contact: {
    whatsappNumber: "919744570207", // Numbers only, country code prefix
    whatsappDisplay: "+91 97445 70207",
    email: "concierge@thengila.com",
    location: "Kozhikode, Malabar Coast, Kerala, India",
    instagram: "https://instagram.com/thengila.official",
    facebook: "https://facebook.com/thengila.official",
  },
  // ...
};
```

### Customizing Pre-filled WhatsApp Messages
```typescript
whatsappMessages: {
  default: "Hello, I would like to know more about your pickle collection.",
  datesPickle: "Hello, I am interested in your Dates Pickle. Please share the ingredients, available sizes and pricing.",
  fishPickle: "Hello, I am interested in your Fish Pickle. Please share the fish variety, ingredients, available sizes and pricing.",
  general: "Hello, I would like to know more about your products and availability.",
  tastingGifting: "Hello, I am interested in custom gifting and artisanal jars from Thengila. Please share details.",
}
```

---

## ✦ Showcase of the Two Signature Products

1. **Dates Pickle (`#dates-pickle`)**:
   - Distinctive Kerala spice harmony with sun-ripened Medjool dates.
   - Hand-pitted dates, cold-pressed gingelly (sesame) oil, Kashmiri chillies, mustard, fenugreek, and fresh curry leaves.
   - 350g artisanal glass jar with gold foil seal.

2. **Fish Pickle (`#fish-pickle`)**:
   - Coastal Malabar wild catch preserved in slow-shallow tempered oil and aromatic spices.
   - Seasonal marine catch policy (Kingfish / Seer Fish / Mackerel verified per batch).
   - 350g heavy flint glass jar.

---

## ✦ Project Architecture

```
d:/Projects/thengila/
├── public/
│   └── images/
│       ├── dates-pickle-hero.jpg      # High-res luxury Dates Pickle jar
│       ├── fish-pickle-hero.jpg       # High-res luxury Fish Pickle jar
│       ├── gourmet-spices-dates.jpg   # Wide slate ingredient flatlay
│       ├── luxury-jar-packaging.jpg   # Heavy glass jar & presentation gift box
│       ├── floating-date-1.jpg        # Isolated date for foreground parallax
│       └── floating-date-2.jpg        # Isolated date for depth layer
├── src/
│   ├── app/
│   │   ├── globals.css                # Dark luxury tokens, keyframe animations
│   │   ├── layout.tsx                 # Google fonts & complete OpenGraph SEO
│   │   ├── page.tsx                   # Main editorial homepage assembly
│   │   ├── robots.ts                  # Search engine crawl directives
│   │   └── sitemap.ts                 # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── BrandWordmark.tsx          # Botanical emblem & THENGILA wordmark
│   │   ├── IntroAnimation.tsx         # Brief, skippable introductory screen
│   │   ├── SiteHeader.tsx             # Sticky dark luxury header & scroll watcher
│   │   ├── MobileNavigation.tsx       # Slide-out drawer menu with numbered index
│   │   ├── HeroSection.tsx            # Cinematic hero with dramatic lighting
│   │   ├── FloatingDates.tsx          # Multi-depth floating date keyframes
│   │   ├── MovingFish.tsx             # Underwater caustics & realistic fish silhouettes
│   │   ├── ProductCollection.tsx      # Exactly two editorial product cards
│   │   ├── ProductFeature.tsx         # Tabbed deep-dives for Dates & Fish Pickles
│   │   ├── BrandStory.tsx             # "Rooted in Nature. Defined by Flavour."
│   │   ├── IngredientsSection.tsx     # "Nothing to Hide. Flavour to Discover."
│   │   ├── PackagingSection.tsx       # "Thoughtfully Packaged." glass preservation
│   │   ├── ContactSection.tsx         # Interactive inquiry type & prefill selector
│   │   ├── WhatsAppButton.tsx         # Reusable URL-encoded WhatsApp component
│   │   └── SiteFooter.tsx             # Dark footer with privacy modal & copyright
│   └── config/
│       └── brand.config.ts            # Centralized brand, product & message config
├── package.json
└── README.md
```

---

## ✦ Getting Started

### Prerequisites
- Node.js `v18.17+` (Tested on Node `v26.7.0`)
- npm or pnpm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/vishalgvr/thengila.git
cd thengila

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Next.js development server
npm run dev

# Open in browser: http://localhost:3000 (or http://localhost:3001)
```

### Production Build & Verification
```bash
# Compile and validate production bundle
npm run build

# Run production server
npm run start
```

---

## ✦ Deployment

This Next.js application requires no external database or server-side state. It can be instantly deployed to:

- **Vercel**: Import the GitHub repository and click **Deploy**.
- **Netlify**: Deploy using the Next.js runtime plugin.
- **Docker / Self-hosted**: Standard Node.js container running `npm run build && npm run start`.

---

## ✦ Compliance & Honest Claims

In accordance with strict luxury gourmet labeling ethics:
- No artificial claims of certifications (e.g. USDA Organic, chemical-free) are made without verification.
- Verified recipe ingredients are declared openly on the site and packaging.
- Allergen notices (fish, mustard, sesame) and seasonal catch disclosures are clearly displayed.

---

© 2026 Thengila. Nature in Every Jar. All rights reserved.
