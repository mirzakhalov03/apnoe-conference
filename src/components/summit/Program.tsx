import { useState } from "react";

const days = [
  {
    date: "15 OCT",
    label: "Day 01",
    title: "Foundations of Modern Apnea Care",
    sessions: [
      { time: "09:00", title: "Opening Keynote: The Silent Epidemic", speaker: "Prof. E. Lindqvist", icon: "🫁" },
      { time: "10:30", title: "Polysomnography in 2026", speaker: "Dr. M. Okafor", icon: "📊" },
      { time: "13:00", title: "Pharyngeal Collapse Mechanics", speaker: "Dr. A. Petrov", icon: "🧬" },
      { time: "15:30", title: "CPAP Adherence Workshop", speaker: "Dr. L. Tanaka", icon: "💨" },
    ],
  },
  {
    date: "16 OCT",
    label: "Day 02",
    title: "Surgical & Pharmacological Frontiers",
    sessions: [
      { time: "09:00", title: "Hypoglossal Nerve Stimulation", speaker: "Prof. R. Bauer", icon: "⚡" },
      { time: "11:00", title: "Pharmacotherapy Trials", speaker: "Dr. S. Mendes", icon: "💊" },
      { time: "14:00", title: "Robotic Upper-Airway Surgery", speaker: "Dr. K. Yoon", icon: "🤖" },
      { time: "16:00", title: "Pediatric Apnea Roundtable", speaker: "Panel", icon: "👶" },
    ],
  },
  {
    date: "17 OCT",
    label: "Day 03",
    title: "AI, Outcomes & The Future",
    sessions: [
      { time: "09:30", title: "AI-Driven Sleep Phenotyping", speaker: "Dr. N. Hassan", icon: "🧠" },
      { time: "11:30", title: "Global Outcomes Registry", speaker: "Prof. C. Vidal", icon: "🌍" },
      { time: "14:00", title: "Closing Symposium", speaker: "All Faculty", icon: "🎓" },
    ],
  },
];

export function Program() {
  const [open, setOpen] = useState(0);
  return (
    <section id="program" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Scientific Program</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Three days. One mission. Better sleep medicine.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Curated sessions across foundational science, surgical innovation, and digital health.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-5">
            {days.map((d, i) => {
              const isOpen = open === i;
              return (
                <div key={d.label} className="relative pl-12 sm:pl-20">
                  <div className={`absolute left-0 top-5 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 transition-all ${isOpen ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card text-muted-foreground"}`}>
                    <span className="text-[10px] sm:text-xs font-bold leading-none text-center">{d.date.split(" ").map((p, k) => <div key={k}>{p}</div>)}</span>
                  </div>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:border-primary/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-primary">{d.label}</div>
                        <div className="mt-1 font-display text-xl sm:text-2xl font-semibold text-foreground">{d.title}</div>
                      </div>
                      <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform ${isOpen ? "rotate-45 bg-primary text-primary-foreground border-primary" : "text-foreground"}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="mt-6 grid gap-3 border-t border-border pt-5">
                        {d.sessions.map((s) => (
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
