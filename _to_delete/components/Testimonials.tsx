import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-petrol-50/60">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-petrol-950 sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-600">{testimonials.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-white p-6 text-center shadow-softer"
            >
              <p className="text-3xl font-bold text-coral-500">{metric.value}</p>
              <p className="mt-2 text-sm text-petrol-600">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-petrol-100 bg-white p-6 shadow-softer"
            >
              <Quote className="h-6 w-6 text-coral-300" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-petrol-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-petrol-100 pt-4">
                <p className="text-sm font-semibold text-petrol-950">
                  {item.name}
                </p>
                <p className="text-xs text-petrol-500">{item.clinic}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
