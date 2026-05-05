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
    <section id="speakers" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Mutaxassislar</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Uyqu tibbiyotini shakllantiruvchi jahon ovozlari.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:underline">Barcha mutaxassislar →</a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {speakers.map((s) => (
            <div key={s.name} className="group text-center">
              <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:ring-2 group-hover:ring-primary group-hover:-translate-y-1">
                  <img
                    src={`https://i.pravatar.cc/400?img=${s.seed.length + 10}`}
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
