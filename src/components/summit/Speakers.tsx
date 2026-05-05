import muzaffarovImg from "@/assets/muzaffarov.jpg";

const speakers = [
  { name: "Muzaffarov Tuyg'unxon Akromovich", role: "Jonli tadqiqot mutaxassisi", image: muzaffarovImg },
  { name: "Dr. Michael Okafor", role: "Johns Hopkins, AQSh", seed: "michael" },
  { name: "Dr. Aleksei Petrov", role: "Charité Berlin, Germaniya", seed: "aleksei" },
  { name: "Dr. Lina Tanaka", role: "Kioto Universiteti, Yaponiya", seed: "lina" },
  { name: "Prof. Rainer Bauer", role: "Vena Tibbiyot, Avstriya", seed: "rainer" },
  { name: "Dr. Sofia Mendes", role: "USP San-Paulo, Braziliya", seed: "sofia" },
  { name: "Dr. Kyung Yoon", role: "Seul Milliy, Koreya", seed: "kyung" },
  { name: "Dr. Nadia Hassan", role: "Imperial College London", seed: "nadia" },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      {/* Medical minimalistic decorative elements */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-teal/10 blur-3xl" />

      {/* ECG / heartbeat line */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-16 mx-auto h-10 w-full max-w-4xl text-primary/30"
        viewBox="0 0 800 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 20 H260 L275 20 L285 8 L300 32 L315 4 L330 28 L345 20 H540 L555 20 L565 12 L580 28 L595 20 H800" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Mutaxassislar</span>
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Uyqu tibbiyotini shakllantiruvchi jahon ovozlari.
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Klinik mukammallik · 2026</span>
            </div>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="border-b border-primary/30 pb-0.5 transition-colors group-hover:border-primary">Barcha mutaxassislar</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {speakers.map((s) => (
            <div key={s.name} className="group text-center">
              <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:ring-2 group-hover:ring-primary group-hover:-translate-y-1">
                  <img
                    src={s.image ?? `https://i.pravatar.cc/400?img=${(s.seed?.length ?? 0) + 10}`}
                    alt={s.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-5 font-display text-base font-semibold text-foreground">{s.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.role}</div>
              <button className="mt-3 inline-flex items-center gap-1 rounded-full border border-border bg-background px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary">
                Bio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
