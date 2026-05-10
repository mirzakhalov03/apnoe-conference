import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-10T09:00:00Z").getTime();

function diff(now: number) {
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(() => diff(TARGET));
  useEffect(() => {
    setT(diff(Date.now()));
    const i = setInterval(() => setT(diff(Date.now())), 1000);
    return () => clearInterval(i);
  }, []);
  const items: [string, number][] = [
    ["Kun", t.days],
    ["Soat", t.hours],
    ["Daqiqa", t.minutes],
    ["Soniya", t.seconds],
  ];
  return (
    <div className="flex gap-3 sm:gap-5">
      {items.map(([label, val]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="min-w-[68px] sm:min-w-[88px] rounded-2xl border border-border bg-card px-3 py-3 sm:px-5 sm:py-4 shadow-soft">
            <div className="font-display text-3xl sm:text-5xl font-bold tabular-nums text-primary">
              {String(val).padStart(2, "0")}
            </div>
          </div>
          <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
