import type { MetadataRoute } from "next";
import { landingSlugs } from "@/lib/landing-pages";

const BASE = "https://squirrelbrainapp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/mcp", priority: 0.9 },
    { path: "/work", priority: 0.8 },
    { path: "/family", priority: 0.8 },
    // SEO landing pages (long-tail intent)
    ...landingSlugs().map((slug) => ({ path: `/${slug}`, priority: 0.75 })),
    { path: "/demos", priority: 0.7 },
    { path: "/pricing", priority: 0.7 },
    { path: "/mcp-docs", priority: 0.6 },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
