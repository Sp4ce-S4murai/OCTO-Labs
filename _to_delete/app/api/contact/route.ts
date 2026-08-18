import { NextRequest, NextResponse } from "next/server";

export type ContactPayload = {
  name: string;
  clinic: string;
  whatsapp: string;
  message?: string;
};

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length >= 2 &&
    typeof d.clinic === "string" &&
    d.clinic.trim().length >= 2 &&
    typeof d.whatsapp === "string" &&
    d.whatsapp.trim().length >= 8
  );
}

// Endpoint mockado: valida e loga o lead recebido.
//
// Para plugar um serviço real, troque o bloco "TODO" abaixo por uma
// integração de verdade, por exemplo:
//
//  - Resend (e-mail transacional): https://resend.com/docs/send-with-nextjs
//  - Formspree: POST direto do form para o endpoint do Formspree
//  - Webhook para WhatsApp (Meta Cloud API, Twilio, Z-API, etc.)
//
// O contrato de entrada/saída deste endpoint já está pronto para isso —
// só é necessário substituir a lógica interna.
export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON inválido." },
      { status: 400 }
    );
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome, clínica e WhatsApp corretamente." },
      { status: 422 }
    );
  }

  // TODO: substituir por integração real (Resend / Formspree / webhook).
  console.log("[Octo Páginas] Novo lead recebido:", payload);

  return NextResponse.json({ ok: true });
}
