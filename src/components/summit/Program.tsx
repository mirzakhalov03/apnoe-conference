const sessions = [
  {
    time: "09:00",
    title: "Ochilish marosimi: Sokin epidemiya",
    speaker: "Prof. E. Lindqvist",
    icon: "🫁",
  },
  { time: "10:30", title: "2026-yilda polisomnografiya", speaker: "Dr. M. Okafor", icon: "📊" },
  { time: "12:00", title: "Tushlik tanaffusi", speaker: "—", icon: "☕" },
  { time: "13:00", title: "Faringeal kollaps mexanikasi", speaker: "Dr. A. Petrov", icon: "🧬" },
  {
    time: "14:30",
    title: "Gipoglossal nerv stimulyatsiyasi",
    speaker: "Prof. R. Bauer",
    icon: "⚡",
  },
  { time: "16:00", title: "CPAP terapiyasi ustaxonasi", speaker: "Dr. L. Tanaka", icon: "💨" },
  { time: "17:30", title: "AI va uyqu fenotiplash", speaker: "Dr. N. Hassan", icon: "🧠" },
  { time: "18:30", title: "Yopilish simpoziumi", speaker: "Barcha mutaxassislar", icon: "🎓" },
];

export function Program() {
  return (
    <section id="program" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Ilmiy Dastur
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Ikki kun. Bir maqsad. Yaxshiroq uyqu tibbiyoti.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fundamental fan, jarrohlik innovatsiyalari va raqamli salomatlik bo'yicha tanlangan
            sessiyalar.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative pl-12 sm:pl-20">
            <div className="absolute left-0 top-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground shadow-glow">
              <div className="text-center leading-tight">
                <div className="text-[10px] sm:text-xs font-bold">28–29</div>
                <div className="text-[9px] sm:text-[10px]">NOY</div>
              </div>
            </div>
            <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              {/* Visible header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Ikki Kun · Shanba–Yakshanba
                  </div>
                  <div className="mt-1 font-display text-xl sm:text-2xl font-semibold text-foreground">
                    Apnoe yechimlarining zamonaviy asoslari
                  </div>
                </div>
              </div>

              {/* Blurred sessions with overlay */}
              <div className="relative mt-6 border-t border-border pt-5">
                {/* Actual content — blurred */}
                <div className="pointer-events-none select-none blur-md">
                  <div className="grid gap-3">
                    {sessions.map((s) => (
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
                          <div className="font-medium text-foreground">{s.title}</div>
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
                      Tez kunda
                    </span>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Dastur tez orada e'lon qilinadi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
