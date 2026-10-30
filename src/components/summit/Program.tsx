import { useI18n } from "@/lib/i18n";

// Titles come from the dictionary, matched by index.
const sessions = [
  { time: "09:00", speaker: "Prof. E. Lindqvist", icon: "🫁" },
  { time: "10:30", speaker: "Dr. M. Okafor", icon: "📊" },
  { time: "12:00", speaker: "—", icon: "☕" },
  { time: "13:00", speaker: "Dr. A. Petrov", icon: "🧬" },
  { time: "14:30", speaker: "Prof. R. Bauer", icon: "⚡" },
  { time: "16:00", speaker: "Dr. L. Tanaka", icon: "💨" },
];

const days = [
  { day: "28", track: "UZAPNEA" },
  { day: "29", track: "OTOLOR 4" },
];

export function Program() {
  const { t } = useI18n();
  return (
    <section
      id="program"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:scroll-mt-32 sm:py-32"
    >
      {/* No repeating texture here — the timeline cards carry this section. */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[380px] w-[380px] rounded-full bg-primary/5 blur-3xl animate-drift-slow" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[300px] w-[300px] rounded-full bg-teal/10 blur-3xl animate-drift" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {t.program.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            {t.program.title}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.program.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 relative grid gap-10">
          {days.map((d, dayIndex) => {
            const copy = t.program.days[dayIndex];
            return (
              <div key={d.day} className="reveal relative pl-12 sm:pl-20">
                <div className="absolute left-0 top-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-primary bg-gradient-primary text-primary-foreground shadow-glow">
                  <div className="text-center leading-tight">
                    <div className="text-[10px] sm:text-xs font-bold">{d.day}</div>
                    <div className="text-[9px] sm:text-[10px]">{t.program.month}</div>
                  </div>
                </div>
                <div className="w-full rounded-2xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-elegant">
                  {/* Visible header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {copy.label}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          {d.track}
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                          {copy.title}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                        {copy.description}
                      </p>
                    </div>
                  </div>

                  {/* Blurred sessions with overlay */}
                  <div className="relative mt-6 border-t border-border pt-5">
                    {/* Actual content — blurred */}
                    <div className="pointer-events-none select-none blur-md">
                      <div className="grid gap-3">
                        {sessions.map((s, i) => (
                          <div
                            key={s.time}
                            className="grid grid-cols-[64px_36px_1fr] sm:grid-cols-[80px_44px_1fr] items-center gap-4 rounded-xl px-3 py-3"
                          >
                            <div className="font-display text-sm font-semibold text-primary tabular-nums">
                              {s.time}
                            </div>
                            <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-pale-blue text-lg">
                              {s.icon}
                            </div>
                            <div>
                              <div className="font-medium text-foreground">
                                {t.program.sessions[i]}
                              </div>
                              <div className="text-xs text-muted-foreground">{s.speaker}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* "Tez kunda" overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <div className="rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm px-8 py-3 shadow-elegant">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                          {t.program.comingSoon}
                        </span>
                      </div>
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        {t.program.comingSoonNote}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
