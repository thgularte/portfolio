import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { getSiteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map(({ href }) => ({
    url: new URL(href, getSiteUrl()).href,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
