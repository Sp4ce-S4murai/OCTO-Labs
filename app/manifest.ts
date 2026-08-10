import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brand} — ${site.tagline}`,
    short_name: site.brand,
    description: "Criação e manutenção de landing pages para clínicas odontológicas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#123030",
  };
}
