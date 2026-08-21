import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PROJECTS, SITE, PROCESS } from "@/lib/site-content";
import { ProjectGrid } from "@/components/ProjectGrid";
import { PageHero, Reveal, SectionTag, CTASection, DemoDisclosure } from "@/components/ui-blocks";

export const Route = createFileRoute("/work")({
  head: () =>
    seo({
      title: "Work & Concept Projects | Landing Pages, Ads & SEO",
      description:
        "Self-initiated landing page, paid media and SEO concept projects demonstrating conversion strategy, UX and measurement. Clearly labelled as demonstrations, not verified client results.",
      path: "/work",
    }),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHero
        tag="Work"
        title="Concept projects, labelled honestly."
        intro="These are self-initiated projects built to demonstrate how I approach landing pages, conversion strategy, UX and search. Where a metric appears, it is an illustrative scenario — not a verified client outcome."
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <DemoDisclosure text={SITE.demoDisclosure} />
          </Reveal>
          <div className="mt-10">
            <ProjectGrid projects={PROJECTS} filterable />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-2 py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>How each one was built</SectionTag>
          <h2 className="mt-5 text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-foreground">
            The same four steps, every project.
          </h2>
          <ol className="mt-10 grid gap-5 list-none sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 60} className="surface-card p-6">
                <span className="font-display text-sm font-extrabold text-accent">{p.step}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection title="Want this approach applied to a real project?" />
    </>
  );
}
