import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${shown ? "reveal-shown" : "reveal-init"} ${className}`}
    >
      {children}
    </Component>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-display text-xs font-bold tracking-widest text-accent uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function PageHero({
  tag,
  title,
  intro,
  children,
}: {
  tag: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-background-alt pt-[calc(var(--navh)+56px)] pb-14">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionTag>{tag}</SectionTag>
        <h1 className="mt-5 text-[clamp(2rem,6vw,3.4rem)] font-extrabold text-foreground">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; to: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm list-none text-subtle-foreground">
        {items.map((item, i) => (
          <li key={item.to} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-muted-foreground">
                {item.name}
              </span>
            ) : (
              <Link to={item.to as "/"} className="hover:text-accent">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CTASection({
  title = "Want a clear view of what to fix first?",
  body = "Send over your website or campaign and the result you want to improve. I'll respond with what I'd look at first.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border bg-surface-2">
      <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8">
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-foreground">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{body}</p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-base font-bold text-accent-foreground transition hover:bg-accent-strong"
          >
            Get a Growth Audit
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-7 py-3.5 font-display text-base font-bold text-foreground transition hover:border-accent hover:text-accent"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DemoDisclosure({ text }: { text: string }) {
  return (
    <p className="rounded-card border border-gold/30 bg-gold-light/60 p-4 text-sm text-foreground">
      <strong className="font-display">Demo-project transparency:</strong> {text}
    </p>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 list-none">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
