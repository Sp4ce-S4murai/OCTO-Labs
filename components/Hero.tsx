import { CalendarCheck, MessageCircle, Star } from "lucide-react";
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
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-petrol-100">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-petrol-100/90">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <ul className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm font-medium text-petrol-100">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl bg-white p-2 shadow-soft ring-1 ring-black/5">
            <div className="flex items-center gap-1.5 rounded-t-xl bg-petrol-50 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-coral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-petrol-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-petrol-200" />
              <span className="ml-3 h-5 flex-1 rounded-full bg-white" />
            </div>

            <div className="space-y-4 rounded-b-xl p-5">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-petrol-800/80" />
                <div className="h-7 w-20 rounded-full bg-coral-500" />
              </div>

              <div className="space-y-2 rounded-xl bg-petrol-50 p-4">
                <div className="h-3 w-3/4 rounded-full bg-petrol-800/70" />
                <div className="h-3 w-1/2 rounded-full bg-petrol-300" />
                <div className="mt-3 h-8 w-32 rounded-full bg-coral-500" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[Star, CalendarCheck, MessageCircle].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-petrol-100 p-3"
                  >
                    <Icon className="h-4 w-4 text-petrol-500" />
                    <div className="h-1.5 w-10 rounded-full bg-petrol-100" />
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <div className="h-2 w-full rounded-full bg-petrol-100" />
                <div className="h-2 w-5/6 rounded-full bg-petrol-100" />
                <div className="h-2 w-2/3 rounded-full bg-petrol-100" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-soft ring-1 ring-black/5 sm:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-petrol-100 text-petrol-700">
              <CalendarCheck className="h-4.5 w-4.5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-petrol-950">Novo agendamento</p>
              <p className="text-xs text-petrol-500">via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
