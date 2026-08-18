import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { footer, site, whatsappLink } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-petrol-950 pt-14">
      <div className="container-page">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2">
          <div>
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-petrol-100/70">
              {footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-petrol-200">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-petrol-100/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-petrol-400" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {site.whatsapp.displayNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-petrol-400" />
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @octolabs
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-petrol-400" />
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Octo Labs no LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-petrol-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brand}.
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
