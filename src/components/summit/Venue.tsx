import {
  VENUE_DISTRICT,
  VENUE_MAP_EMBED_URL,
  VENUE_MAP_URL,
  VENUE_NAME,
  VENUE_STREET,
} from "@/lib/site";

const details = [
  { label: "Manzil", value: VENUE_NAME },
  { label: "Ko'cha", value: VENUE_STREET },
  { label: "Shahar", value: VENUE_DISTRICT },
  { label: "Sana", value: "28–29-noyabr 2026" },
];

export function Venue() {
  return (
    <section
      id="venue"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:scroll-mt-32 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern texture-fade" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-teal/10 blur-3xl animate-drift" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Manzil
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            {VENUE_NAME}, Toshkent
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Konferensiyaning ikkala kuni ham shu manzilda o'tkaziladi.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="flex flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-elegant sm:p-8">
            <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {d.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold text-foreground">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={VENUE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow lg:mt-auto"
            >
              Yandex Xaritada ochish
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              src={VENUE_MAP_EMBED_URL}
              title={`${VENUE_NAME} — Yandex Xarita`}
              loading="lazy"
              allowFullScreen
              className="block h-[360px] w-full border-0 sm:h-[440px] lg:h-full lg:min-h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
