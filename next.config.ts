import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve legacy static pages that live in /public
  async rewrites() {
    return [
      // NOTE: /mcp is an App Router page (app/mcp/page.tsx) — no rewrite. A
      // rewrite to /mcp/index.html previously lived here; it was dead config
      // (no public/mcp/ exists) and could silently shadow the real page.
      {
        source: "/signup",
        destination: "/signup.html",
      },
      {
        source: "/dashboard",
        destination: "/dashboard.html",
      },
      // Footer legal links (were 404 — the docs lived outside /public until 2026-07-02)
      {
        source: "/legal/privacy-policy",
        destination: "/legal/privacy-policy.html",
      },
      {
        source: "/legal/terms-of-use",
        destination: "/legal/terms-of-use.html",
      },
    ];
  },
};

export default nextConfig;
