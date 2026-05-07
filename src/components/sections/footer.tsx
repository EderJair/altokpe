import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Big statement marquee */}
      <div className="relative overflow-hidden border-b border-foreground/10 py-12 sm:py-16">
        <div className="flex gap-12 whitespace-nowrap animate-marquee-reverse">
          {Array.from({ length: 4 }).map((_, group) => (
            <div key={group} className="flex shrink-0 items-center gap-12">
              <span className="text-display text-[clamp(4rem,16vw,16rem)] leading-none text-foreground/[0.08]">
                AlTokPe
              </span>
              <span className="text-display text-[clamp(4rem,16vw,16rem)] leading-none text-primary/30">
                ★
              </span>
            </div>
          ))}
        </div>
      </div>

      <Container size="xl" className="relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-base font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <SocialLink href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`}>
                <MessageCircle size={16} />
              </SocialLink>
              <SocialLink href={siteConfig.social.instagram}>
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.tiktok}>
                <TikTokIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${siteConfig.contact.email}`}>
                <Mail size={16} />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Producto">
            <FooterLink href="#producto">Quitamanchas</FooterLink>
            <FooterLink href="#como-funciona">Cómo funciona</FooterLink>
            <FooterLink href="#precios">Precios</FooterLink>
            <FooterLink href="#testimonios">Reviews</FooterLink>
          </FooterColumn>

          <FooterColumn title="Ayuda">
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href={`mailto:${siteConfig.contact.email}`}>Contacto</FooterLink>
            <FooterLink href="#envios">Envíos</FooterLink>
            <FooterLink href="#devoluciones">Devoluciones</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink href="#privacidad">Privacidad</FooterLink>
            <FooterLink href="#terminos">Términos</FooterLink>
            <FooterLink href="#cookies">Cookies</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-eyebrow text-foreground/50">
            © {new Date().getFullYear()} {siteConfig.name} · Hecho en Perú
          </p>
          <p className="text-eyebrow text-foreground/50">
            v1.0 · Lima, PE
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-5 text-eyebrow text-foreground/50">{title}</p>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-foreground/80 transition-colors hover:text-primary"
      >
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center border border-foreground/15 text-foreground/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
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
