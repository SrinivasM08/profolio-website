import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { SITE, PROCESS, SERVICES } from "@/lib/site-content";
import { PageHero, Reveal, SectionTag, CTASection, CheckList } from "@/components/ui-blocks";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About Srinivas Malla | Digital Marketer & CRO Specialist",
      description:
        "Srinivas Malla is a digital marketer and CRO specialist in Visakhapatnam working across landing pages, UI/UX, SEO, Google Ads, Meta Ads and analytics. How he works and what he believes about proof.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        tag="About"
        title="I build digital experiences around business outcomes, not around templates."
        intro={`${SITE.role} based in ${SITE.location}, working across UI/UX, landing pages, SEO, paid acquisition, CRO and analytics.`}
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-foreground">How I got here</h2>
            <p className="mt-4 text-muted-foreground">
              I came into digital marketing through design. Building interfaces taught me that most of the
              problems people blame on traffic are actually problems of clarity — visitors who could not
              quickly tell what was being offered, who it was for, or what to do next.
            </p>
            <p className="mt-4 text-muted-foreground">
              That led into conversion rate optimisation, then into the channels that feed it. Today I work
              across the whole path: the search or ad that earns the click, the page that receives it, the
              interface that carries the decision, and the measurement that tells us whether any of it
              worked.
            </p>

            <h2 className="mt-12 text-2xl font-extrabold text-foreground">What I believe</h2>
            <CheckList
              items={[
                "Clarity beats cleverness. If a visitor has to work out what you do, you have already lost them.",
                "Measurement comes before optimisation. Without a baseline, every improvement is a story.",
                "The post-click experience is half of any paid campaign, and it is usually the neglected half.",
                "Proof should be earned. Unverifiable numbers on a marketing site are a liability, not an asset.",
                "Small, well-chosen changes compound faster than redesigns.",
              ]}
            />

            <h2 className="mt-12 text-2xl font-extrabold text-foreground">Working from Visakhapatnam</h2>
            <p className="mt-4 text-muted-foreground">
              I'm based in Visakhapatnam, Andhra Pradesh, and a lot of my work involves businesses competing
              locally — real estate projects, clinics, hospitality, and service businesses where the map pack
              and a phone call decide the outcome. I also work remotely with e-commerce and product teams
              where the funnel is longer and the data is richer.
            </p>

            <h2 className="mt-12 text-2xl font-extrabold text-foreground">Where this is heading</h2>
            <p className="mt-4 text-muted-foreground">
              This is a personal practice today. It's built to grow into a small, focused growth team as
              genuine client work accumulates — which is also why nothing here pretends to be bigger than it
              is.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-card sticky top-[calc(var(--navh)+24px)] p-6">
              <SectionTag>At a glance</SectionTag>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-display font-bold text-foreground">Role</dt>
                  <dd className="text-muted-foreground">{SITE.role}</dd>
                </div>
                <div>
                  <dt className="font-display font-bold text-foreground">Based in</dt>
                  <dd className="text-muted-foreground">{SITE.location}</dd>
                </div>
                <div>
                  <dt className="font-display font-bold text-foreground">Projects & concepts developed</dt>
                  <dd className="text-muted-foreground">40+</dd>
                </div>
                <div>
                  <dt className="font-display font-bold text-foreground">Core services</dt>
                  <dd className="text-muted-foreground">
                    <ul className="mt-1 space-y-1 list-none">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="hover:text-accent"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-display font-bold text-foreground">Contact</dt>
                  <dd>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-accent underline underline-offset-4 break-all"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface-2 py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>Process</SectionTag>
          <h2 className="mt-5 text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-foreground">
            Four steps, in this order, every time.
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

      <CTASection title="Want to talk about your growth problem?" />
    </>
  );
}
