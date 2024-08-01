import { localesAsStrings } from "@/lib/locales";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [{
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
  }, ...localesAsStrings.map(locale => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/`,
  })).flat()];
}