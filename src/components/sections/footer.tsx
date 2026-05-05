import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container size="xl" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Producto">
            <FooterLink href="#producto">Quitamanchas</FooterLink>
            <FooterLink href="#como-funciona">Cómo funciona</FooterLink>
            <FooterLink href="#precios">Precios</FooterLink>
            <FooterLink href="#testimonios">Reviews</FooterLink>
          </FooterColumn>

          <FooterColumn title="Ayuda">
            <FooterLink href="#faq">Preguntas frecuentes</FooterLink>
            <FooterLink href={`mailto:${siteConfig.contact.email}`}>Contacto</FooterLink>
            <FooterLink href="#envios">Envíos</FooterLink>
            <FooterLink href="#devoluciones">Devoluciones</FooterLink>
          </FooterColumn>

          <FooterColumn title="Conecta">
            <FooterLink href={siteConfig.social.instagram} external>
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </FooterLink>
            <FooterLink href={siteConfig.social.tiktok} external>
              <TikTokIcon className="h-3.5 w-3.5" />
              TikTok
            </FooterLink>
            <FooterLink href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`} external>
              <MessageCircle size={14} />
              WhatsApp
            </FooterLink>
            <FooterLink href={`mailto:${siteConfig.contact.email}`}>
              <Mail size={14} />
              {siteConfig.contact.email}
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Hecho en Perú.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#privacidad" className="hover:text-foreground">
              Privacidad
            </a>
            <a href="#terminos" className="hover:text-foreground">
              Términos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-foreground">
        {title}
      </p>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </a>
    </li>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}
