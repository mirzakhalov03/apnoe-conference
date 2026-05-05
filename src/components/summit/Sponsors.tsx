const sponsors = ["Resmed", "Philips", "Inspire", "SomnoMed", "Nyxoah", "Fisher & Paykel", "Itamar", "Lowenstein"];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Hamkorlar va Homiylar</div>
        <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Global yetakchilar bilan hamkorlikda
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {sponsors.map((s) => (
            <div
              key={s}
              className="flex items-center justify-center font-display text-xl font-bold tracking-tight text-muted-foreground/60 grayscale opacity-60 transition-all duration-300 hover:text-primary hover:opacity-100 hover:grayscale-0"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
