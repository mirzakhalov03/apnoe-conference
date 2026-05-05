import logo from "@/assets/silent-sleep-logo.png";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="Silent Sleep" width={200} height={50} className="h-11 w-auto" />
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              The Silent Sleep International Summit unites clinicians, researchers
              and innovators advancing modern solutions for sleep apnea worldwide.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Venue</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Hofburg Congress Center<br />Heldenplatz, 1010 Vienna<br />Austria
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</div>
            <p className="mt-3 text-sm text-muted-foreground">
              summit@silentsleep.org<br />+43 1 555 0126
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="text-xs text-muted-foreground">© 2026 Silent Sleep. All rights reserved.</div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
