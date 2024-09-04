import { localesAsStrings } from "@/lib/locales";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      priority: 1,
    },
    ...localesAsStrings
      .map((locale) => ({
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/`,
        priority: 0.8,
      }))
      .flat(),
  ];
}
