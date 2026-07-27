import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { servicePages } from "@/lib/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/who-we-are`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/what-we-do`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/talk-to-us`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${siteUrl}/what-we-do/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
