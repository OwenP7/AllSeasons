export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="section-heading font-heading text-3xl tracking-[0.15em] text-white">
            ALL SEASONS
          </p>
          <p className="text-caption text-sm text-secondary leading-[1.6]">
            Premium California Cannabis. Cultivated with purpose.
          </p>
        </div>
        <div>
          <p className="section-heading mb-3 text-sm text-white">QUICK LINKS</p>
          <div className="flex flex-col gap-2 text-sm leading-[1.6]">
            <a href="/about" className="footer-link">
              About
            </a>
            <a href="/strains" className="footer-link">
              Strains
            </a>
            <a href="/stores" className="footer-link">
              Stores
            </a>
            <a href="mailto:info@allseasonsfarms.com" className="footer-link">
              Contact
            </a>
          </div>
        </div>
        <div>
          <p className="section-heading mb-3 text-sm text-white">CONNECT</p>
          <div className="flex flex-col gap-2 text-sm leading-[1.6]">
            <span className="text-secondary">info@allseasonsfarms.com</span>
            <span className="text-secondary">Los Angeles, CA</span>
            <div className="nav-label nav-label--mono flex items-center gap-2 pt-2 text-secondary">
              <a
                href="https://www.instagram.com/allseasonsfarms/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
              <span className="opacity-70">/</span>
              <a
                href="https://x.com/Allseasonsfarms"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-caption border-t border-white/10 py-6 text-center text-xs leading-[1.6] text-secondary">
        © 2026 All Seasons Farms | Terms of Use | Privacy Policy
      </div>
    </footer>
  );
}
