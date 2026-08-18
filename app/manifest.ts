import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brand} — ${site.tagline}`,
    short_name: site.brand,
    description: "Octo Labs — fábrica de produtos digitais.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#123030",
  };
}
