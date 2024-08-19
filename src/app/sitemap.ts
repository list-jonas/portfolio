import { localesAsStrings } from "@/lib/locales";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = "2024-08-19";  // Set today's date manually

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      priority: 1,
      lastModified: today,  // Add lastmod
      alternateRefs: localesAsStrings.map((locale) => ({
        href: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/`,
        hreflang: locale,
      })),
    },
    ...localesAsStrings.map((locale) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/`,
      priority: 0.8,
      lastModified: today,  // Add lastmod
      alternateRefs: localesAsStrings.map((altLocale) => ({
        href: `${process.env.NEXT_PUBLIC_SITE_URL}/${altLocale}/`,
        hreflang: altLocale,
      })),
    })),
  ];
}