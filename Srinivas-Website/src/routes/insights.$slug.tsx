import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumb } from "@/lib/seo";
import { ARTICLES, SITE } from "@/lib/site-content";
import { Breadcrumbs, CTASection, Reveal } from "@/components/ui-blocks";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    const base = seo({
      title: a.title,
      description: a.description.slice(0, 155),
      path: `/insights/${params.slug}`,
      type: "article",
    });
    return {
      ...base,
      scripts: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: a.title, path: `/insights/${a.slug}` },
        ]),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.description,
            datePublished: a.date,
            dateModified: a.date,
            author: { "@type": "Person", name: SITE.name, url: SITE.origin },
            publisher: { "@type": "Person", name: SITE.name },
            mainEntityOfPage: `${SITE.origin}/insights/${a.slug}`,
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function formatDate(d: string) {
  return new Date(`${d}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-border bg-background-alt pt-[calc(var(--navh)+40px)] pb-14">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", to: "/" },
              { name: "Insights", to: "/insights" },
              { name: a.topic, to: `/insights/${a.slug}` },
            ]}
          />
          <p className="flex flex-wrap items-center gap-3 text-xs font-medium tracking-wide text-subtle-foreground uppercase">
            <span className="rounded-full bg-accent-light px-2.5 py-1 text-accent">{a.topic}</span>
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            <span>{a.readTime}</span>
          </p>
          <h1 className="mt-4 text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-foreground">{a.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{a.description}</p>
        </div>
      </section>

      <article className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <p className="text-lg text-foreground">{a.intro}</p>
          {a.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 40}>
              <h2 className="mt-10 text-2xl font-extrabold text-foreground">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}

          {others.length > 0 && (
            <div className="mt-14 border-t border-border pt-8">
              <h2 className="font-display text-lg font-bold text-foreground">Keep reading</h2>
              <ul className="mt-4 space-y-3 list-none">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/insights/$slug"
                      params={{ slug: o.slug }}
                      className="font-display font-bold text-accent underline underline-offset-4"
                    >
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </>
  );
}
