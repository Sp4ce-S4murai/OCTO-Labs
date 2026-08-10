import { ShieldCheck } from "lucide-react";
import { about, site } from "@/lib/content";

export function About() {
  return (
    <section className="section-padding bg-petrol-950">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-petrol-100">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-petrol-100/85">
            {about.description}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {about.points.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-petrol-100"
            >
              {point}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-md text-center text-xs font-medium uppercase tracking-wide text-petrol-300">
          {site.brand} · um produto {site.parentBrand}
        </p>
      </div>
    </section>
  );
}
