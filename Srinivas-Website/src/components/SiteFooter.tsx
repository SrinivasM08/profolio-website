import { Link } from "@tanstack/react-router";
import { SITE, SERVICES, INDUSTRIES } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-xl font-extrabold text-foreground">
            Srinivas Malla<span className="text-accent">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{SITE.role}</p>
          <p className="mt-1 text-sm text-muted-foreground">{SITE.location}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-4"
          >
            {SITE.email}
          </a>
        </div>

        <nav aria-label="Services" className="text-sm">
          <h2 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">Services</h2>
          <ul className="mt-3 space-y-2 list-none">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-muted-foreground hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Industries" className="text-sm">
          <h2 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">Industries</h2>
          <ul className="mt-3 space-y-2 list-none">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="text-muted-foreground hover:text-accent"
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site" className="text-sm">
          <h2 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">Site</h2>
          <ul className="mt-3 space-y-2 list-none">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-muted-foreground hover:text-accent">
                Work & concepts
              </Link>
            </li>
            <li>
              <Link to="/insights" className="text-muted-foreground hover:text-accent">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-accent">
                Privacy policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-subtle-foreground sm:px-8">
        © {new Date().getFullYear()} Srinivas Malla. All rights reserved. Demo projects on this site are
        self-initiated concepts and are labelled as such.
      </div>
    </footer>
  );
}
