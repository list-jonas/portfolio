import { localesAsStrings } from "@/lib/locales";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = "2024-08-19"; // Manually set date

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      alternates: {
        languages: Object.fromEntries(
          localesAsStrings.map((locale) => [locale, `${baseUrl}/${locale}/`])
        ),
      },
    },
  ];
}