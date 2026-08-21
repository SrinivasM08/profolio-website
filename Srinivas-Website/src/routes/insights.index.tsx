import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ARTICLES } from "@/lib/site-content";
import { PageHero, Reveal, CTASection } from "@/components/ui-blocks";

export const Route = createFileRoute("/insights/")({
  head: () =>
    seo({
      title: "Insights on Landing Pages, SEO, Ads & Conversion",
      description:
        "Practical articles on why landing pages lose enquiries, local SEO foundations in Visakhapatnam, the post-click side of Google Ads, and what to measure before changing strategy.",
      path: "/insights",
    }),
  component: InsightsHub,
});

function formatDate(d: string) {
  return new Date(`${d}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function InsightsHub() {
  return (
    <>
      <PageHero
        tag="Insights"
        title="Notes from the work, not from a content calendar."
        intro="Each of these covers something I run into repeatedly: pages that lose people early, local search that never gets set up properly, ad budgets spent on unprepared pages, and decisions made without a baseline."
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <ul className="space-y-5 list-none">
            {ARTICLES.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 50}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="surface-card block p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <p className="flex flex-wrap items-center gap-3 text-xs font-medium tracking-wide text-subtle-foreground uppercase">
                    <span className="rounded-full bg-accent-light px-2.5 py-1 text-accent">{a.topic}</span>
                    <time dateTime={a.date}>{formatDate(a.date)}</time>
                    <span>{a.readTime}</span>
                  </p>
                  <h2 className="mt-3 font-display text-xl font-bold text-foreground">{a.title}</h2>
                  <p className="mt-2 text-muted-foreground">{a.description}</p>
                  <span className="mt-4 inline-block font-display text-sm font-bold text-accent">
                    Read article →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
