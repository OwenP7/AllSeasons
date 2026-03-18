export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="font-heading text-3xl tracking-[0.2em]">ALL SEASONS</p>
          <p className="text-sm text-white/70">
            Premium California Cannabis. Cultivated with purpose.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide">
            Quick Links
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/strains" className="hover:text-white">
              Strains
            </a>
            <a href="/stores" className="hover:text-white">
              Stores
            </a>
            <a href="mailto:info@allseasonsfarms.com" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide">
            Connect
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <span>info@allseasonsfarms.com</span>
            <span>Los Angeles, CA</span>
            <div className="flex items-center gap-2 pt-2 text-sm">
              <a
                href="https://www.instagram.com/allseasonsfarms/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
              <span className="text-white/40">/</span>
              <a
                href="https://x.com/Allseasonsfarms"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 All Seasons Farms | Terms of Use | Privacy Policy
      </div>
    </footer>
  );
}
