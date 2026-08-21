import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./ui-blocks";
import type { Project } from "@/lib/site-content";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "landing", label: "Landing Pages" },
  { id: "ads", label: "Paid Ads" },
  { id: "seo", label: "SEO" },
] as const;

export function ProjectGrid({
  projects,
  filterable = false,
}: {
  projects: Project[];
  filterable?: boolean;
}) {
  const [filter, setFilter] = useState<string>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div>
      {filterable && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`min-h-11 rounded-full border px-5 py-2 font-display text-sm font-bold transition ${
                filter === f.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <h2 className="sr-only">Projects</h2>
      <ul className="grid gap-5 list-none sm:grid-cols-2 lg:grid-cols-3">

        {visible.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 40}>
            <article className="surface-card flex h-full flex-col overflow-hidden">
              <div className="flex h-32 items-center justify-center border-b border-border bg-background-alt text-accent">
                <Icon name={p.icon} className="h-10 w-10" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-gold-light px-2.5 py-1 text-[11px] font-bold tracking-widest text-gold uppercase">
                  Demo Project
                </span>
                <p className="mt-3 text-xs font-medium tracking-wide text-subtle-foreground uppercase">
                  {p.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <p className="mt-4 rounded-chip bg-surface-2 p-3 text-xs text-muted-foreground">
                  <strong className="font-display text-foreground">{p.label}</strong> — example scenario for
                  this concept; not a verified client result.
                </p>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 font-display text-sm font-bold text-accent underline underline-offset-4"
                  >
                    View demo
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 font-display text-sm font-bold text-accent underline underline-offset-4"
                  >
                    Discuss a project like this →
                  </Link>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
