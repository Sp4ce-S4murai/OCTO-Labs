import { ImageResponse } from "next/og";
import { site } from "@/lib/content";
import { OgImageContent } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = `${site.brand} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
