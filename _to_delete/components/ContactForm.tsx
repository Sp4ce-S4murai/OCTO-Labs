"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      clinic: (form.elements.namedItem("clinic") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setError(json.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Não foi possível enviar. Verifique sua conexão e tente novamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-coral-400" />
        <p className="text-lg font-semibold text-white">Recebemos seu contato!</p>
        <p className="text-sm text-petrol-100/80">
          Nosso time volta para você em breve pelo WhatsApp informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-petrol-100">
            Seu nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            className="rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-petrol-200/60 focus:border-coral-400 focus:outline-none"
            placeholder="Dr. João Silva"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="clinic" className="text-sm font-medium text-petrol-100">
            Nome da clínica
          </label>
          <input
            id="clinic"
            name="clinic"
            type="text"
            required
            minLength={2}
            className="rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-petrol-200/60 focus:border-coral-400 focus:outline-none"
            placeholder="Clínica Sorriso Feliz"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="whatsapp" className="text-sm font-medium text-petrol-100">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          minLength={8}
          className="rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-petrol-200/60 focus:border-coral-400 focus:outline-none"
          placeholder="(11) 99999-9999"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-petrol-100">
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-petrol-200/60 focus:border-coral-400 focus:outline-none"
          placeholder="Conte rapidamente sobre sua clínica"
        />
      </div>

      {error && <p className="text-sm text-coral-300">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Enviando..." : "Quero minha página"}
      </button>
    </form>
  );
}
