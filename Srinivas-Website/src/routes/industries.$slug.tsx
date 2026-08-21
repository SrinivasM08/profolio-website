import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumb } from "@/lib/seo";
import { INDUSTRIES, SITE } from "@/lib/site-content";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, CTASection, CheckList, Reveal, SectionTag } from "@/components/ui-blocks";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = INDUSTRIES.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry not found" }, { name: "robots", content: "noindex" }] };
    }
    const ind = loaderData.industry;
    const base = seo({
      title: `${ind.name} Digital Marketing | ${SITE.name}`,
      description: ind.summary.slice(0, 155),
      path: `/industries/${params.slug}`,
    });
    return {
      ...base,
      scripts: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.name, path: `/industries/${ind.slug}` },
        ]),
      ],
    };
  },
  component: IndustryDetail,
});

const BLOCKS = [
  { key: "landingPage", title: "Landing page approach", icon: "target" },
  { key: "seo", title: "SEO approach", icon: "search" },
  { key: "paid", title: "Paid campaign approach", icon: "megaphone" },
  { key: "cro", title: "CRO priorities", icon: "flask" },
  { key: "measurement", title: "What to measure", icon: "graph" },
] as const;

function IndustryDetail() {
  const { industry: ind } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border bg-background-alt pt-[calc(var(--navh)+40px)] pb-14">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", to: "/" },
              { name: "Industries", to: "/industries" },
              { name: ind.name, to: `/industries/${ind.slug}` },
            ]}
          />
          <SectionTag>Industry</SectionTag>
          <h1 className="mt-5 text-[clamp(2rem,5.5vw,3.2rem)] font-extrabold text-foreground">
            {ind.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{ind.summary}</p>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-foreground">The customer journey</h2>
            <p className="mt-4 text-muted-foreground">{ind.journey}</p>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="mt-12 text-2xl font-extrabold text-foreground">
              Marketing challenges specific to {ind.name.toLowerCase()}
            </h2>
            <ul className="mt-4 space-y-3 list-none">
              {ind.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-muted-foreground">
                  <Icon name="alert" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {BLOCKS.map((b, i) => (
              <Reveal key={b.key} delay={i * 50} className="surface-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-chip bg-accent-light text-accent">
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-3 font-display text-lg font-bold text-foreground">{b.title}</h2>
                <CheckList items={ind[b.key]} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="surface-card mt-12 flex flex-wrap items-center justify-between gap-4 border-l-4 border-l-accent p-6">
              <p className="text-muted-foreground">
                Working in {ind.name.toLowerCase()} and want this applied to your own funnel?
              </p>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 font-display text-sm font-bold text-accent-foreground hover:bg-accent-strong"
              >
                Start a conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
