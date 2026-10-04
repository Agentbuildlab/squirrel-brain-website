import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve legacy static pages that live in /public
  async redirects() {
    return [
      { source: "/legal/privacy-policy.html", destination: "/legal/privacy-policy", permanent: true },
      { source: "/legal/terms-of-use.html", destination: "/legal/terms-of-use", permanent: true },
    ];
  },
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
      // Old static loaders (public/legal/*.html) were replaced by server-rendered
      // App Router pages at /legal/privacy-policy and /legal/terms-of-use.
    ];
  },
};

export default nextConfig;
