const sponsors = [
  "Otolor",
  "Corel Med",
  "Barun",
  "EMU University",
  "Silent Sleep",
  "Bolalar Milliy Tibbiyot Markazi",
];

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:scroll-mt-32 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[620px] max-w-full -translate-x-1/2 rounded-full bg-primary/5 blur-3xl animate-drift-slow" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Hamkorlar va Homiylar
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Global yetakchilar bilan hamkorlikda
        </h2>
        <div className="rule-fade mx-auto mt-6 h-px w-24" />

        <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {sponsors.map((s) => (
            <div
              key={s}
              className="group flex min-h-[92px] items-center justify-center rounded-2xl border border-border bg-card/70 px-4 py-6 text-center shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <span className="font-display text-base font-bold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
