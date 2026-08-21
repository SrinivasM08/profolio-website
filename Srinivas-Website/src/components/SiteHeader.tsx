import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("a");
      if (!items.length) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkBase =
    "relative text-sm font-medium text-muted-foreground transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100";

  return (
    <header>
      <nav
        aria-label="Main"
        className={`fixed inset-x-0 top-0 z-1000 flex h-[var(--navh)] items-center justify-between border-b border-border px-5 backdrop-blur-xl transition-shadow sm:px-8 lg:px-16 ${
          scrolled ? "bg-surface shadow-sm" : "bg-background/95"
        }`}
      >
        <Link
          to="/"
          className="relative z-1001 flex items-end gap-0.5 font-display text-xl font-extrabold tracking-tight text-foreground"
        >
          Srinivas Malla
          <span className="pulse-dot mb-2 inline-block h-[7px] w-[7px] rounded-full bg-accent" />
        </Link>

        <ul className="hidden list-none items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={linkBase}
                activeProps={{ className: `${linkBase} !text-accent after:scale-x-100` }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 font-display text-sm font-bold text-accent-foreground transition hover:bg-accent-strong lg:inline-flex"
          >
            Start a Project ↗
          </Link>
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-1001 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-chip border border-border bg-surface lg:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[var(--navh)] bottom-0 z-1000 overflow-y-auto border-t border-border bg-surface px-6 py-6 lg:hidden"
      >
        <ul className="list-none space-y-1">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-chip px-3 py-3.5 font-display text-lg font-bold text-foreground hover:bg-surface-2"
                activeProps={{
                  className:
                    "block rounded-chip px-3 py-3.5 font-display text-lg font-bold text-accent hover:bg-surface-2",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-accent px-5 py-3.5 text-center font-display text-base font-bold text-accent-foreground"
            >
              Start a Project ↗
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${SITE.email}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-sm text-muted-foreground"
            >
              {SITE.email}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
