import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-petrol-50/60">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-petrol-950 sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-600">{howItWorks.subtitle}</p>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-petrol-200 lg:block"
            aria-hidden="true"
          />
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-petrol-700 text-base font-bold text-white shadow-softer">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-petrol-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-petrol-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
