import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

export function Contact() {
  return (
    <section id="contato" className="section-padding bg-petrol-900">
      <div className="container-page mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Vamos conversar
        </h2>
        <p className="mt-4 text-lg text-petrol-100/85">
          Fale direto com a gente pelo WhatsApp.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-coral-600"
        >
          <MessageCircle className="h-5 w-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
