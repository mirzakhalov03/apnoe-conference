import s1 from "@/assets/speaker-1.jpg";
import s2 from "@/assets/speaker-2.jpg";
import s3 from "@/assets/speaker-3.webp";
import s4 from "@/assets/speaker-4.webp";
import s5 from "@/assets/speaker-5.webp";
import { useI18n } from "@/lib/i18n";

// Names come from the dictionary (localised spelling), matched by index.
// `position` biases the square crop for portrait source images, whose heads
// sit above the centre and would otherwise be cut off. Defaults to centred.
const speakers = [
  { id: "muzaffarov", image: s1, position: "object-top" },
  { id: "gulyamov", image: s2 },
  { id: "krivitskiy", image: s3 },
  { id: "buzunov", image: s4 },
  { id: "jafarova", image: s5 },
];

export function Speakers() {
  const { t } = useI18n();
  return (
    <section
      id="speakers"
      className="relative scroll-mt-28 overflow-hidden bg-secondary/40 py-24 sm:scroll-mt-32 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 dot-pattern texture-fade" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-teal/10 blur-3xl animate-drift-slow" />

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
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.speakers.eyebrow}
            </span>
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl text-balance">
            {t.speakers.title}
          </h2>
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {/* 6 visible speakers */}
          {speakers.map((s, i) => (
            <div key={s.id} className="group text-center">
              <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                <div className="absolute inset-[-10px] rounded-full border border-dashed border-primary/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:ring-2 group-hover:ring-primary group-hover:-translate-y-1">
                  <img
                    src={s.image}
                    alt={t.speakers.names[i]}
                    loading="lazy"
                    width={400}
                    height={400}
                    className={`h-full w-full object-cover ${s.position ?? "object-center"} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>
              </div>
              <div className="mt-5 font-display text-base font-semibold text-foreground">
                {t.speakers.names[i]}
              </div>
              <div className="mx-auto mt-2 h-px w-8 bg-primary/30" />
            </div>
          ))}

          {/* 2 blurred "coming soon" placeholders */}
          {[0, 1].map((i) => (
            <div key={`tba-${i}`} className="text-center">
              <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                {/* Blurred silhouette */}
                <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-border blur-sm">
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 to-teal/20" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="h-20 w-16 rounded-t-full bg-primary/15" />
                  </div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary/20" />
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full">
                  <span className="font-display text-[11px] font-bold uppercase tracking-widest text-foreground/60 text-center leading-snug px-3">
                    {t.speakers.moreSoon}
                  </span>
                </div>
              </div>
              <div className="mt-5 font-display text-base font-semibold text-muted-foreground/50">
                • • •
              </div>
              <div className="mx-auto mt-2 h-px w-8 bg-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
