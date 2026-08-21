import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumb } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site-content";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, CTASection, CheckList, Reveal, SectionTag } from "@/components/ui-blocks";

function findService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const base = seo({
      title: `${s.name} Services in Visakhapatnam | ${SITE.name}`,
      description: s.summary.slice(0, 155),
      path: `/services/${params.slug}`,
    });
    return {
      ...base,
      scripts: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            serviceType: s.name,
            description: s.summary,
            provider: {
              "@type": "Person",
              name: SITE.name,
              url: SITE.origin,
},
            areaServed: { "@type": "Place", name: "Visakhapatnam, Andhra Pradesh, India" },
            url: `${SITE.origin}/services/${s.slug}`,
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-background-alt pt-[calc(var(--navh)+40px)] pb-14">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", to: "/" },
              { name: "Services", to: "/services" },
              { name: s.name, to: `/services/${s.slug}` },
            ]}
          />
          <SectionTag>Service</SectionTag>
          <h1 className="mt-5 text-[clamp(2rem,5.5vw,3.2rem)] font-extrabold text-foreground">{s.name}</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{s.summary}</p>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold text-foreground">What this service is</h2>
              <p className="mt-4 text-muted-foreground">{s.whatItIs}</p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-12 text-2xl font-extrabold text-foreground">Who it's for</h2>
              <CheckList items={s.whoItIsFor} />
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-12 text-2xl font-extrabold text-foreground">Problems it solves</h2>
              <ul className="mt-4 space-y-3 list-none">
                {s.problems.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <Icon name="alert" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mt-12 text-2xl font-extrabold text-foreground">What's included</h2>
              <CheckList items={s.included} />
            </Reveal>

            <Reveal delay={150}>
              <div className="surface-card mt-12 border-l-4 border-l-accent p-6">
                <h2 className="font-display text-lg font-bold text-foreground">
                  How this drives growth
                </h2>
                <p className="mt-2 text-muted-foreground">{s.growthLink}</p>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="surface-card sticky top-[calc(var(--navh)+24px)] p-6">
              <h2 className="font-display text-lg font-bold text-foreground">Other services</h2>
              <ul className="mt-4 space-y-3 list-none">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-accent"
                    >
                      <Icon name={o.icon} className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <strong className="block font-display text-foreground">{o.name}</strong>
                        {o.short}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 py-3 font-display text-sm font-bold text-accent-foreground hover:bg-accent-strong"
              >
                Discuss {s.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Thinking about ${s.name.toLowerCase()}?`} />
    </>
  );
}
