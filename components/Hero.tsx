import { MessageCircle } from "lucide-react";
import { hero, whatsappLink } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-petrol-950 pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(47,134,134,0.55) 0%, rgba(18,48,48,0) 70%)",
        }}
      />
      <div className="container-page relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-petrol-100">
          {hero.eyebrow}
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-petrol-100/90">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={hero.ctaPrimary.href}
            className="inline-flex items-center justify-center rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-coral-600"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
