import { MessageCircle } from "lucide-react";
import { ctaFinal, whatsappLink } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export function CtaFinal() {
  return (
    <section id="contato" className="section-padding bg-petrol-900">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {ctaFinal.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-100/85">{ctaFinal.subtitle}</p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-coral-600"
          >
            <MessageCircle className="h-5 w-5" />
            {ctaFinal.ctaLabel}
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
