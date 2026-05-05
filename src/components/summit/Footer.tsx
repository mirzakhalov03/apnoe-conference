import logo from "@/assets/silent-sleep-logo.png";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="Silent Sleep" width={240} height={60} className="h-14 w-auto" />
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Silent Sleep Xalqaro Sammiti — uyqu apnoesi uchun zamonaviy
              yechimlarni rivojlantirish maqsadida butun dunyo shifokorlari,
              tadqiqotchilari va innovatorlarini birlashtiradi.
            </p>
          </div>
          <div id="venue">
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Manzil</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Hyatt Regency Tashkent<br />Navoiy ko'chasi 1A<br />Toshkent, O'zbekiston
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Aloqa</div>
            <p className="mt-3 text-sm text-muted-foreground">
              summit@silentsleep.uz<br />+998 71 200 00 00
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="text-xs text-muted-foreground">© 2026 Silent Sleep. Barcha huquqlar himoyalangan.</div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Maxfiylik</a>
            <a href="#" className="hover:text-primary">Shartlar</a>
            <a href="#" className="hover:text-primary">Xulq-atvor kodeksi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
