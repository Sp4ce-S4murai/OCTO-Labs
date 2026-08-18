import { faq } from "@/lib/content";
import { FaqAccordion } from "./FaqAccordion";

export function Faq() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-petrol-950 sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-600">{faq.subtitle}</p>
        </div>

        <div className="mt-12">
          <FaqAccordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
