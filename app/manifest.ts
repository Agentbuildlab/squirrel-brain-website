import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#FF7A1A",
    icons: [
      { src: "/assets/squirrel_logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
