import { MessageCircleOff, TrendingDown, CalendarX } from "lucide-react";
import { painPoints } from "@/lib/content";

const icons = [MessageCircleOff, TrendingDown, CalendarX];

export function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-petrol-950 sm:text-4xl">
            {painPoints.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-600">{painPoints.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {painPoints.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-petrol-100 bg-petrol-50/50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-100 text-coral-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-petrol-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-petrol-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
