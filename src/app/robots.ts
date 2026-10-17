import { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@/config/brand.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BRAND_CONFIG.siteUrl}/sitemap.xml`,
  };
}
