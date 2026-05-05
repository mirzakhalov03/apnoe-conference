const tiers = [
  { name: "Erta Ro'yxat", price: "850 000 so'm", note: "30 iyungacha", features: ["Barcha sessiyalar", "Kutib olish marosimi", "Konferensiya materiallari"] },
  { name: "Standart", price: "1 200 000 so'm", note: "Eng mashhur", features: ["Barcha sessiyalar", "Kutib olish marosimi", "Gala kechki ovqat", "Ustaxonalar"], featured: true },
  { name: "Rezident va Talaba", price: "350 000 so'm", note: "ID talab qilinadi", features: ["Barcha sessiyalar", "Konferensiya materiallari"] },
];

export function Register() {
  return (
    <section id="register" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Ro'yxatdan o'tish</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Sammitda o'z o'rningizni band qiling.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border p-8 transition-all ${t.featured ? "border-primary bg-primary text-primary-foreground shadow-elegant lg:-translate-y-4" : "border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-elegant"}`}
            >
              <div className={`text-xs font-semibold uppercase tracking-widest ${t.featured ? "text-primary-foreground/70" : "text-primary"}`}>{t.note}</div>
              <div className="mt-2 font-display text-2xl font-semibold">{t.name}</div>
              <div className="mt-6 font-display text-4xl font-bold tracking-tight">{t.price}</div>
              <ul className={`mt-8 space-y-3 text-sm ${t.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/OtolorAcademyBot"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${t.featured ? "bg-background text-primary hover:bg-background/90" : "bg-primary text-primary-foreground hover:shadow-glow"}`}
              >
                Ro'yxatdan o'tish
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
