import { localesAsStrings } from "@/lib/locales";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const hardcodedDate = '2024-08-19';  // Set today's date manually

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL; // Base URL from environment

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(hardcodedDate),  // Use manually set date
      alternates: {
        languages: Object.fromEntries(
          localesAsStrings.map((locale) => [locale, `${baseUrl}/${locale}/`])
        ),
      },
    },
    ...localesAsStrings.map((locale) => ({
      url: `${baseUrl}/${locale}/`,
      lastModified: new Date(hardcodedDate),  // Manually set date
      alternates: {
        languages: Object.fromEntries(
          localesAsStrings.map((altLocale) => [altLocale, `${baseUrl}/${altLocale}/`])
        ),
      },
    })),
  ];
}