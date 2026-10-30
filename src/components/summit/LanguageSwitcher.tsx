import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={`${t.language.label}: ${current.label}`}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:border-primary/40 data-[state=open]:text-primary"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="tabular-nums">{current.short}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[60] min-w-[10rem] rounded-xl p-1.5">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            lang={l.code}
            onSelect={() => setLanguage(l.code)}
            className="cursor-pointer gap-3 rounded-lg px-3 py-2"
          >
            <span className="w-6 text-xs font-semibold text-muted-foreground">{l.short}</span>
            <span className="flex-1">{l.label}</span>
            {l.code === language && <Check className="text-primary" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
