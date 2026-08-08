import { useEffect, useState } from "react";
import logo from "@/assets/apnologlar-logo.png";
import otolor from "@/assets/otolor-logo.jpg";
import { RegistrationBanner } from "./RegistrationBanner";

const links = [
  { href: "#program", label: "Dastur" },
  { href: "#speakers", label: "Ma'ruzachilar" },
  { href: "#register", label: "Narxlar" },
  { href: "#venue", label: "Manzil" },
  { href: "#sponsors", label: "Hamkorlar" },
  { href: "#contact", label: "Aloqa" },
];

const TELEGRAM_BOT = "https://t.me/OtolorAcademyBot";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <a href="#top" className="flex flex-col items-center gap-1">
          <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
            In partnership with
          </span>
          <div className="flex items-center gap-2.5">
            <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-elegant flex-shrink-0">
              <img
                src={logo}
                alt="O'zbekiston Apnologlari"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-muted-foreground/40 text-base select-none">×</span>
            <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-full overflow-hidden ring-2 ring-border shadow-soft flex-shrink-0 bg-white">
              <img src={otolor} alt="Otolor" className="h-full w-full object-cover" />
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={TELEGRAM_BOT}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-elegant hover:-translate-y-0.5"
        >
          Ro'yxatdan o'tish
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md p-2 text-foreground"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Ro'yxatdan o'tish
            </a>
          </div>
        </div>
      )}
      <RegistrationBanner />
    </header>
  );
}
