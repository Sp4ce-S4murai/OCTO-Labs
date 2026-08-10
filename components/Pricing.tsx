import { pricing, whatsappLink } from "@/lib/content";
import { PricingCard } from "./PricingCard";

export function Pricing() {
  return (
    <section id="planos" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-petrol-950 sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-600">{pricing.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
          {pricing.plans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              ctaLabel={plan.ctaLabel}
              ctaHref={whatsappLink(
                `Olá! Quero contratar o plano ${plan.name} da Octo Páginas.`
              )}
              highlighted={plan.highlighted}
              badge={"badge" in plan ? plan.badge : undefined}
            />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-petrol-500">
          {pricing.footnote}
        </p>
      </div>
    </section>
  );
}
