import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do ${site.brand}, produto ${site.parentBrand}.`,
};

export default function PrivacidadePage() {
  return (
    <main className="container-page section-padding max-w-3xl">
      <h1 className="text-3xl font-bold text-petrol-950">Política de Privacidade</h1>
      <p className="mt-4 text-sm text-petrol-500">Última atualização: agosto de 2026</p>

      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-petrol-700">
        <p>
          Esta política descreve como o {site.brand}, produto da {site.parentBrand},
          coleta, usa e protege as informações fornecidas por você ao entrar em
          contato através deste site.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-petrol-950">
            Quais dados coletamos
          </h2>
          <p className="mt-2">
            Coletamos apenas os dados enviados voluntariamente pelo formulário de
            contato: nome, nome da clínica, número de WhatsApp e, quando informado,
            uma mensagem adicional.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-petrol-950">
            Como usamos seus dados
          </h2>
          <p className="mt-2">
            Usamos essas informações exclusivamente para retornar seu contato e
            apresentar nossos planos. Não vendemos nem compartilhamos seus dados
            com terceiros para fins de marketing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-petrol-950">Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política podem ser enviadas pelo{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-petrol-700 underline"
            >
              WhatsApp da {site.brand}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
