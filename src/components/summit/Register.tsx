import { useI18n } from "@/lib/i18n";
import { TELEGRAM_BOT_HANDLE, TELEGRAM_REGISTER_URL } from "@/lib/site";

// Prices in so'm; names, notes and feature labels come from the dictionary.
const tiers = [
  {
    id: "residents",
    price: 800_000,
    features: ["bothDays", "materials", "certificate"],
  },
  {
    id: "standard",
    price: 1_100_000,
    features: ["bothDays", "reception", "materials", "certificate"],
    featured: true,
  },
  {
    id: "international",
    price: 1_500_000,
    features: ["bothDays", "reception", "materials", "certificate"],
  },
] as const;

export function Register() {
  const { t } = useI18n();
  return (
    <section
      id="register"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:scroll-mt-32 sm:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-secondary/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 dot-pattern texture-fade" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {t.register.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            {t.register.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{t.register.lead}</p>
        </div>

        <div className="reveal mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const copy = t.register.tiers[tier.id];
            const featured = "featured" in tier && tier.featured;
            return (
              <div
                key={tier.id}
                className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${featured ? "border-primary bg-gradient-primary text-primary-foreground shadow-elegant lg:-translate-y-4 lg:hover:-translate-y-5" : "border-border bg-card/80 shadow-soft backdrop-blur-sm hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"}`}
              >
                {featured && (
                  <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-foreground/10 blur-2xl" />
                )}
                {/* Sits above the decorative glow, which is absolutely positioned. */}
                <div className="relative">
                  <div
                    className={`text-xs font-semibold uppercase tracking-widest ${featured ? "text-primary-foreground/70" : "text-primary"}`}
                  >
                    {copy.note}
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold">{copy.name}</div>
                  <div className="mt-6 font-display text-4xl font-bold tracking-tight">
                    {t.common.price(tier.price)}
                  </div>
                  <ul
                    className={`mt-8 space-y-3 text-sm ${featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                  >
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                        {t.register.features[f]}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={TELEGRAM_REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${featured ? "bg-background text-primary hover:bg-background/90" : "bg-primary text-primary-foreground hover:shadow-glow"}`}
                  >
                    {t.common.register}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t.register.viaTelegram}{" "}
          <a
            href={TELEGRAM_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            {TELEGRAM_BOT_HANDLE}
          </a>
        </p>
      </div>
    </section>
  );
}
