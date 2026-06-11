import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve legacy static pages that live in /public
  async rewrites() {
    return [
      {
        source: "/mcp",
        destination: "/mcp/index.html",
      },
      {
        source: "/signup",
        destination: "/signup.html",
      },
      {
        source: "/dashboard",
        destination: "/dashboard.html",
      },
    ];
  },
};

export default nextConfig;
