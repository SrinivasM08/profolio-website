import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { SERVICES } from "@/lib/site-content";
import { Icon } from "@/components/Icon";
import { PageHero, Reveal, CTASection } from "@/components/ui-blocks";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      title: "Digital Marketing Services | Landing Pages, SEO, Ads, CRO",
      description:
        "Seven connected services: website and landing pages, SEO, Google Ads, Meta Ads, conversion rate optimisation, UI/UX design and analytics — built around enquiries and sales.",
      path: "/services",
    }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Services built around growth and conversion."
        intro="Each of these works on its own. They work considerably better together, because the click, the page and the measurement are one system, not three."
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ul className="grid gap-5 list-none md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 45}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="surface-card flex h-full flex-col p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-chip bg-accent-light text-accent">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold text-foreground">{s.name}</h2>
                  <p className="mt-2 flex-1 text-muted-foreground">{s.summary}</p>
                  <span className="mt-5 font-display text-sm font-bold text-accent">
                    Explore {s.name} →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Not sure which of these you need?" body="Describe the result you want to improve and I'll tell you which of these actually applies — including when the answer is 'none of them yet'." />
    </>
  );
}
