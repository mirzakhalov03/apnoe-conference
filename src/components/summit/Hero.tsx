import airway from "@/assets/airway-hero.jpg";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Vienna · 15–17 October 2026
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl text-balance">
            International Summit{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">2026</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl text-balance">
            Silent Sleep — advancing global solutions for sleep apnea, snoring,
            and respiratory medicine through clinical excellence.
          </p>

          <div className="mt-10">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Register Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              View Program
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-md">
            {[
              ["48+", "Speakers"],
              ["32", "Countries"],
              ["1.2k", "Delegates"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-primary">{v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-soft shadow-elegant">
            <img
              src={airway}
              alt="3D anatomical render of the human upper airway with blue airflow streamlines"
              className="h-full w-full object-cover animate-float"
              width={1920}
              height={1440}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/95 backdrop-blur px-5 py-4 shadow-soft hidden sm:block">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live Research</div>
            <div className="mt-1 font-display text-lg font-semibold text-foreground">Pharyngeal Dynamics</div>
          </div>
          <div className="absolute -top-4 -right-4 rounded-2xl border border-primary/20 bg-primary px-4 py-3 shadow-glow hidden sm:block">
            <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">CME Credits</div>
            <div className="font-display text-xl font-bold text-primary-foreground">18.5 hrs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
