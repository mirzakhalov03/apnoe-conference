import { useI18n } from "@/lib/i18n";

export function RegistrationBanner() {
  const { t } = useI18n();
  const repeated = [...t.banner.items, ...t.banner.items];
  return (
    <div className="relative flex h-9 items-center overflow-hidden bg-primary">
      {/* Left badge */}
      <div className="relative z-10 flex h-full shrink-0 items-center gap-1.5 bg-red-600 px-4 pr-5 text-white">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="font-display text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
          {t.banner.badge}
        </span>
        {/* angled right edge */}
        <span className="absolute right-0 top-0 h-full w-3 translate-x-full bg-red-600 [clip-path:polygon(0_0,0%_100%,100%_100%)]" />
      </div>

      {/* Scrolling track */}
      <div className="flex min-w-0 flex-1 overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
          {repeated.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-white px-6">
                {item}
              </span>
              <span className="text-white/40 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Subtle right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-primary to-transparent" />
    </div>
  );
}
