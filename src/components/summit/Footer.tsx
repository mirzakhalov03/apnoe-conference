import apnologlarLogo from "@/assets/apnologlar-logo.png";
import otolor from "@/assets/otolor-logo.jpg";
import {
  TELEGRAM_BOT_HANDLE,
  TELEGRAM_REGISTER_URL,
  VENUE_DISTRICT,
  VENUE_NAME,
  VENUE_STREET,
} from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo + description */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                In partnership with
              </span>
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-elegant shrink-0">
                  <img
                    src={apnologlarLogo}
                    alt="O'zbekiston Apnologlari"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-muted-foreground/40 text-base select-none">×</span>
                <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-border shadow-soft shrink-0 bg-white">
                  <img src={otolor} alt="Otolor" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              O'zbekistonda ilk bor — xurrak va uyqu apnoesiga bag'ishlangan konferensiya, «OTOLOR
              4» xalqaro konferensiyasi bilan birga. 2 kun, bir maqsad.
            </p>
          </div>

          {/* Venue */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Manzil
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {VENUE_NAME}
              <br />
              {VENUE_STREET}
              <br />
              {VENUE_DISTRICT}
              <br />
              28–29-noyabr 2026
            </p>
            <a
              href="#venue"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              Xaritada ko'rish
            </a>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Aloqa
            </div>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>+998 77 118 38 83</p>
              <p>
                Ro'yxatdan o'tish:{" "}
                <a
                  href={TELEGRAM_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {TELEGRAM_BOT_HANDLE}
                </a>
              </p>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              {/* Telegram */}
              <a
                href="https://t.me/uzapnoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sokin_uyqu?igsh=bjJvd21mNHlmN3Ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="text-xs text-muted-foreground">
            © 2026 O'zbekiston apnologlari. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </div>
    </footer>
  );
}
