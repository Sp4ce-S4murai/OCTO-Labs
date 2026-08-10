import { Check, Minus } from "lucide-react";
import type { PricingFeature } from "@/lib/content";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
};

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        highlighted
          ? "border-coral-300 bg-white shadow-soft ring-2 ring-coral-400"
          : "border-petrol-100 bg-white shadow-softer"
      }`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-coral-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-softer">
          {badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-petrol-950">{name}</h3>
      <p className="mt-2 text-sm text-petrol-600">{description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-petrol-950">
          {price}
        </span>
        <span className="text-sm font-medium text-petrol-500">{period}</span>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3 text-sm">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-petrol-600" />
            ) : (
              <Minus className="mt-0.5 h-4 w-4 shrink-0 text-petrol-300" />
            )}
            <span
              className={feature.included ? "text-petrol-800" : "text-petrol-400"}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-coral-500 text-white hover:bg-coral-600"
            : "bg-petrol-950 text-white hover:bg-petrol-800"
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
