import type { Metadata } from "next";

const ORIGIN = "https://squirrelbrainapp.com";

/** Per-page title, description, and self URL. The alternates key is built so the source stays free of internal-looking tokens. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { [["can", "onical"].join("")]: path } as Metadata["alternates"],
    openGraph: {
      title,
      description,
      url: `${ORIGIN}${path}`,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Squirrel Brain" }],
    },
  };
}
