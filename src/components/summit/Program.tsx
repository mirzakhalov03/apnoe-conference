import { useState } from "react";

const sessions = [
  { time: "09:00", title: "Ochilish marosimi: Sokin epidemiya", speaker: "Prof. E. Lindqvist", icon: "🫁" },
  { time: "10:30", title: "2026-yilda polisomnografiya", speaker: "Dr. M. Okafor", icon: "📊" },
  { time: "12:00", title: "Tushlik tanaffusi", speaker: "—", icon: "☕" },
  { time: "13:00", title: "Faringeal kollaps mexanikasi", speaker: "Dr. A. Petrov", icon: "🧬" },
  { time: "14:30", title: "Gipoglossal nerv stimulyatsiyasi", speaker: "Prof. R. Bauer", icon: "⚡" },
  { time: "16:00", title: "CPAP terapiyasi ustaxonasi", speaker: "Dr. L. Tanaka", icon: "💨" },
  { time: "17:30", title: "AI va uyqu fenotiplash", speaker: "Dr. N. Hassan", icon: "🧠" },
  { time: "18:30", title: "Yopilish simpoziumi", speaker: "Barcha mutaxassislar", icon: "🎓" },
];

export function Program() {
  const [open, setOpen] = useState(true);
  return (
    <section id="program" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Ilmiy Dastur</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Bir kun. Bir maqsad. Yaxshiroq uyqu tibbiyoti.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fundamental fan, jarrohlik innovatsiyalari va raqamli salomatlik bo'yicha tanlangan sessiyalar.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative pl-12 sm:pl-20">
            <div className="absolute left-0 top-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground shadow-glow">
              <div className="text-center leading-tight">
                <div className="text-[10px] sm:text-xs font-bold">12</div>
                <div className="text-[9px] sm:text-[10px]">OKT</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="w-full rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">Yagona Kun · Dushanba</div>
                  <div className="mt-1 font-display text-xl sm:text-2xl font-semibold text-foreground">
                    Apnoe yechimlarining zamonaviy asoslari
                  </div>
                </div>
                <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform ${open ? "rotate-45 bg-primary text-primary-foreground border-primary" : "text-foreground"}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                </div>
              </div>

              {open && (
                <div className="mt-6 grid gap-3 border-t border-border pt-5">
                  {sessions.map((s) => (
                    <div key={s.time} className="grid grid-cols-[64px_36px_1fr] sm:grid-cols-[80px_44px_1fr] items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-secondary">
                      <div className="font-display text-sm font-semibold text-primary tabular-nums">{s.time}</div>
                      <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-pale-blue text-lg">{s.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{s.title}</div>
                        <div className="text-xs text-muted-foreground">{s.speaker}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
