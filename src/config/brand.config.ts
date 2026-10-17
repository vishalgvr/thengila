/**
 * THENGILA — Brand Configuration
 *
 * All brand details, contact information, product copy, and WhatsApp enquiry messages
 * are centralized here so they can be reconfigured effortlessly without modifying UI components.
 */

export interface ProductConfig {
  id: "dates-pickle" | "fish-pickle";
  name: string;
  tagline: string;
  shortDescription: string;
  editorialHeading: string;
  editorialSubtitle: string;
  editorialDescription: string;
  buttonLabel: string;
  image: string;
  accentColor: string;
  badge: string;
  details: {
    origin: string;
    jarSize: string;
    verifiedIngredients: string[];
    allergenNotice?: string;
    fishVarietyNotice?: string;
    storageInstructions: string[];
    servingSuggestions: string[];
    pairingNotes: string;
  };
  whatsappMessage: string;
}

export const BRAND_CONFIG = {
  name: "THENGILA",
  displayName: "Thengila",
  tagline: "Nature in Every Jar.",
  establishedYear: 2024,
  origin: "Kerala, India",
  description:
    "An artisanal Kerala gourmet label crafting ultra-small batch Dates Pickle and Fish Pickle. Made with pure natural ingredients, cold-pressed oils, and generational spice heritage.",
  metaTitle: "Thengila | Luxury Kerala Gourmet Pickles — Dates & Fish Pickle",
  metaDescription:
    "Discover Thengila — an art of extraordinary Kerala flavour. Handcrafted, small-batch Dates Pickle and Fish Pickle in heavy glass jars. Enquire directly on WhatsApp.",
  siteUrl: "https://thengila.com",

  contact: {
    whatsappNumber: "919744570207",
    whatsappDisplay: "+91 97445 70207",
    email: "concierge@thengila.com",
    location: "Kozhikode, Malabar Coast, Kerala, India",
    instagram: "https://instagram.com/thengila.official",
    facebook: "https://facebook.com/thengila.official",
  },

  whatsappMessages: {
    default:
      "Hello, I would like to know more about your pickle collection.",
    datesPickle:
      "Hello, I am interested in your Dates Pickle. Please share the ingredients, available sizes and pricing.",
    fishPickle:
      "Hello, I am interested in your Fish Pickle. Please share the fish variety, ingredients, available sizes and pricing.",
    general:
      "Hello, I would like to know more about your products and availability.",
    tastingGifting:
      "Hello, I am interested in custom gifting and artisanal jars from Thengila. Please share details.",
  },

  theme: {
    colors: {
      primaryBg: "#080A09",
      secondaryBg: "#101411",
      elevatedCard: "#171B17",
      deepForestGreen: "#173F35",
      antiqueGold: "#C6A66B",
      champagneGold: "#E3D2A7",
      warmIvory: "#F2EBDD",
      mutedText: "#AAA79D",
      dateBrown: "#70452F",
      subtleBorder: "rgba(198,166,107,0.22)",
    },
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Collection", href: "#collection" },
    { label: "Dates Pickle", href: "#dates-pickle" },
    { label: "Fish Pickle", href: "#fish-pickle" },
    { label: "Our Story", href: "#story" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Packaging", href: "#packaging" },
    { label: "Contact", href: "#contact" },
  ],

  products: [
    {
      id: "dates-pickle",
      name: "Dates Pickle",
      tagline: "A distinctive harmony of rich dates & Kerala spice",
      shortDescription:
        "A distinctive pickle inspired by the rich character of dates and the bold culinary traditions of Kerala.",
      editorialHeading: "THE RICHNESS OF DATES.",
      editorialSubtitle: "Sun-ripened sweetness balanced by slow-tempered Malabar spice.",
      editorialDescription:
        "Discover our signature dates pickle, where the distinctive character of dates meets a bold, Kerala-inspired flavour experience. Whole, plump dates are cured in sun-dried spices, stone-ground mustard, and cold-pressed gingelly oil.",
      buttonLabel: "EXPLORE DATES PICKLE",
      image: "/images/dates-pickle-hero.jpg",
      accentColor: "#70452F",
      badge: "Signature Reserve",
      details: {
        origin: "Selected Arabian Medjool dates cured with Malabar spices",
        jarSize: "350g Handcrafted Glass Jar (Gift boxes on request)",
        verifiedIngredients: [
          "Selected Hand-Pitted Dates",
          "Cold-Pressed Gingelly (Sesame) Oil",
          "Kashmiri Sun-Dried Red Chillies",
          "Crushed Hill Garlic & Ginger",
          "Stone-Ground Mustard Seeds",
          "Roasted Fenugreek Powder",
          "Asafoetida (Hing)",
          "Fresh Fragrant Curry Leaves",
          "Natural Sea Salt Crystals",
          "Spiced Brewed Vinegar",
        ],
        storageInstructions: [
          "Store in a cool, dark pantry away from heat and direct sunlight.",
          "Ensure the protective layer of aromatic sesame oil remains atop the jar.",
          "Always use a completely dry wooden or ceramic spoon to serve.",
          "Does not require freezing; oil tempering preserves natural vitality.",
        ],
        servingSuggestions: [
          "Pairs exquisitely beside slow-dum Malabar mutton biryani or fragrant ghee rice.",
          "Serve with aged sharp cheddar, Manchego, or creamy brie on artisanal sourdough.",
          "A refined condiment alongside flaky Kerala parottas and rich coconut curries.",
          "Sublime as an accompaniment to festive Kerala Sadya banquets.",
        ],
        pairingNotes:
          "Complex sweet-sour-spicy profile with deep caramelized fruit undertones.",
      },
      whatsappMessage:
        "Hello, I am interested in your Dates Pickle. Please share the ingredients, available sizes and pricing.",
    },
    {
      id: "fish-pickle",
      name: "Fish Pickle",
      tagline: "Bold coastal heritage preserved in cold-pressed oil",
      shortDescription:
        "A bold, flavourful fish pickle inspired by Kerala's distinctive culinary heritage.",
      editorialHeading: "A BOLD TASTE OF KERALA.",
      editorialSubtitle: "Prime ocean catch steeped in fiery garlic, curry leaves & roasted spice.",
      editorialDescription:
        "Explore our fish pickle, inspired by the distinctive flavours and culinary traditions of Kerala. Prepared with pristine marine fish cuts, slow-shallow fried, and infused into a deep, velvety gravy of mustard, fenugreek, and freshly torn curry leaves.",
      buttonLabel: "EXPLORE FISH PICKLE",
      image: "/images/fish-pickle-hero.jpg",
      accentColor: "#173F35",
      badge: "Coastal Heritage",
      details: {
        origin: "Wild Arabian Sea catch prepared on the Malabar coastline",
        jarSize: "350g Heavy Flint Glass Jar with Gold Foil Seal",
        fishVarietyNotice:
          "Fish variety is selected per seasonal fresh catch (typically Kingfish/Seer Fish or Mackerel). Inquire on WhatsApp for the current small-batch variety.",
        allergenNotice: "Contains Fish and Mustard.",
        verifiedIngredients: [
          "Selected Wild Marine Fish Cuts",
          "Cold-Pressed Sesame (Gingelly) Oil",
          "Whole Cloves of Fresh Garlic",
          "Julienned Malabar Ginger",
          "Spicy Green Chillies",
          "Crushed Kashmiri Red Pepper",
          "Roasted Fenugreek & Mustard Seeds",
          "Fragrant Fresh Curry Leaves",
          "Organic Turmeric Root Powder",
          "Brewed Natural Spiced Vinegar",
          "Sun-Evaporated Coastal Sea Salt",
        ],
        storageInstructions: [
          "Keep refrigerated after breaking the vacuum seal.",
          "Keep the jar upright and maintain oil submersion over fish cuts.",
          "Use only clean, dry stainless steel or ceramic utensils.",
          "Best enjoyed within recommended seasonal batch period.",
        ],
        servingSuggestions: [
          "A definitive pairing with steaming Kerala Matta rice and warm coconut pulissery.",
          "Exceptional alongside hot rice kanji with crushed pappadam on rainy evenings.",
          "Elevates crisp layered appams, idiyappam, or roasted cassava (kappa vevichathu).",
          "Can be savoured as an intense gourmet tapas element.",
        ],
        pairingNotes:
          "Rich umami, aromatic garlic-infused heat, tart vinegary finish with ocean richness.",
      },
      whatsappMessage:
        "Hello, I am interested in your Fish Pickle. Please share the fish variety, ingredients, available sizes and pricing.",
    },
  ] as ProductConfig[],
};

/**
 * Helper to build clean WhatsApp URLs with guaranteed URL encoding
 */
export function buildWhatsAppUrl(message?: string): string {
  const number = BRAND_CONFIG.contact.whatsappNumber;
  const text = message || BRAND_CONFIG.whatsappMessages.default;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
