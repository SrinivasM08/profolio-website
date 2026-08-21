import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/site-content";
import { Icon } from "@/components/Icon";
import { PageHero, Reveal, CTASection } from "@/components/ui-blocks";

export const Route = createFileRoute("/industries/")({
  head: () =>
    seo({
      title: "Industries I Work With | Real Estate, Healthcare, E-commerce & More",
      description:
        "How digital marketing actually differs by industry — real estate, healthcare, e-commerce, education, hospitality and fitness — and what changes in the page, the ads and the measurement.",
      path: "/industries",
    }),
  component: IndustriesHub,
});

function IndustriesHub() {
  return (
    <>
      <PageHero
        tag="Industries"
        title="The channel stays the same. The buyer never does."
        intro="A real-estate buyer and a patient searching a symptom behave nothing alike. These pages set out what changes — in the journey, the page, the campaign and the measurement."
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ul className="grid gap-5 list-none md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal as="li" key={ind.slug} delay={i * 45}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: ind.slug }}
                  className="surface-card flex h-full flex-col p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-chip bg-accent-light text-accent">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold text-foreground">{ind.name}</h2>
                  <p className="mt-2 flex-1 text-muted-foreground">{ind.summary}</p>
                  <span className="mt-5 font-display text-sm font-bold text-accent">Read more →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Work in one of these? Let's talk specifics." />
    </>
  );
}
