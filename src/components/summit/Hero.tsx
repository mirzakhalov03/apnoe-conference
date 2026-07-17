import heroPoster from "@/assets/hero-uzapnea.jpg";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 sm:pt-48 pb-20 sm:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            O'zbekiston, Toshkent · 28–29.11.2026
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl text-balance">
            <span className="block">1-UZAPNEA va OTOLOR 4</span>
            <span className="block">KONFERENSIYASI</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            O'zbekiston xalqaro ilmiy-amaliy konferensiyasi.
          </p>

          <div className="mt-10">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Ro'yxatdan o'tish
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Dasturni ko'rish
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-md">
            {[
              ["20+", "Ma'ruzachilar"],
              ["5+", "Davlatlar"],
              ["200+", "Ishtirokchilar"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-primary">{v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-soft shadow-elegant">
            <img
              src={heroPoster}
              alt="1-UZAPNEA 2026 — O'zbekistondagi birinchi uyqu tibbiyoti anjumani. OTOLOR 4 konferensiyasi."
              className="h-full w-full object-cover animate-float"
              width={640}
              height={640}
            />
          </div>
          <div className="absolute -top-4 -right-4 rounded-2xl border border-primary/20 bg-primary px-4 py-3 shadow-glow hidden sm:block">
            <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">
              CME Soatlari
            </div>
            <div className="font-display text-xl font-bold text-primary-foreground">8 soat</div>
          </div>
        </div>
      </div>
    </section>
  );
}
