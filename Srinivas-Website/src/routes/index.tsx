import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { SITE, SERVICES, INDUSTRIES, PROJECTS, PROCESS, ARTICLES } from "@/lib/site-content";
import { Icon } from "@/components/Icon";
import { Reveal, SectionTag, CTASection, DemoDisclosure } from "@/components/ui-blocks";
import { ProjectGrid } from "@/components/ProjectGrid";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Srinivas Malla | Digital Marketer & CRO Specialist in Visakhapatnam",
      description:
        "Srinivas Malla is a digital marketer and CRO specialist in Visakhapatnam helping real estate, healthcare, e-commerce, hospitality and local-service businesses with landing pages, SEO, Google Ads, Meta Ads, UI/UX and analytics.",
      path: "/",
    }),
  component: Home,
});

const TICKER = [
  "Landing Page Design",
  "Conversion Rate Optimization",
  "UI/UX Design",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Analytics",
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-alt pt-[calc(var(--navh)+64px)] pb-20">
        <div className="hero-dots pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
          <SectionTag>Digital Marketer &amp; CRO Specialist · Visakhapatnam</SectionTag>
          <h1 className="mt-6 text-[clamp(2.25rem,8vw,4.5rem)] font-extrabold text-foreground">
            Srinivas Malla
            <span className="mt-1 block text-muted-foreground">Digital marketing</span>
            <span className="block text-accent">&amp; CRO that converts.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{SITE.positioning}</p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-accent-foreground transition hover:bg-accent-strong"
            >
              Get a Growth Audit
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-8 py-4 font-display text-base font-bold text-foreground transition hover:border-accent hover:text-accent"
            >
              Explore My Work ↗
            </Link>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              ["40+", "Projects & concepts developed"],
              ["7", "Core growth services"],
              ["6", "Industries covered"],
            ].map(([num, label]) => (
              <div key={label} className="surface-card px-4 py-5">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold text-accent">{num}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="overflow-hidden border-b border-border bg-surface py-4" aria-label="Areas of expertise">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-3 px-6 font-display text-sm font-bold tracking-wide text-muted-foreground uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="border-b border-border py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="surface-card p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent font-display text-xl font-extrabold text-accent-foreground">
              SM
            </div>
            <p className="mt-5 font-display text-xl font-bold text-foreground">Srinivas Malla</p>
            <p className="text-sm text-accent">{SITE.role}</p>
            <p className="mt-4 text-muted-foreground">
              UI/UX, landing pages, acquisition and analytics — connected into one growth journey.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 list-none">
              {["Figma", "Google Ads", "Meta Ads", "SEO", "GA4", "UI/UX", "CRO"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <SectionTag>About me</SectionTag>
            <h2 className="mt-5 text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
              Design the experience. Improve the journey. Measure what matters.
            </h2>
            <p className="mt-5 text-muted-foreground">
              I'm Srinivas Malla, a digital marketer and CRO specialist based in Visakhapatnam, Andhra
              Pradesh. I combine UI/UX, landing-page design, SEO, paid advertising and analytics to build
              digital experiences around clear business goals.
            </p>
            <p className="mt-4 text-muted-foreground">
              I'm building this practice transparently: the projects shown here are self-initiated concepts,
              and verified client outcomes will be published only when they are genuinely earned and can be
              supported with permission.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-display font-bold text-accent underline underline-offset-4"
            >
              More about Srinivas
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border bg-surface-2 py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>Services</SectionTag>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
            Seven services that connect traffic to enquiries.
          </h2>
          <ul className="mt-10 grid gap-5 list-none sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="surface-card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-chip bg-accent-light text-accent">
                    <Icon name={s.icon} />
                  </span>
                  <span className="mt-4 font-display text-lg font-bold text-foreground">{s.name}</span>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</span>
                  <span className="mt-4 font-display text-sm font-bold text-accent">Read more →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section className="border-b border-border py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>Selected work &amp; concepts</SectionTag>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
            Work built to demonstrate strategy, UX and conversion.
          </h2>
          <div className="mt-6 max-w-3xl">
            <DemoDisclosure text={SITE.demoDisclosure} />
          </div>
          <div className="mt-8">
            <ProjectGrid projects={PROJECTS} filterable />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-border bg-surface-2 py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>Industries</SectionTag>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
            Who I help, and what actually differs between them.
          </h2>
          <ul className="mt-10 grid gap-5 list-none sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal as="li" key={ind.slug} delay={i * 50}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: ind.slug }}
                  className="surface-card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-chip bg-accent-light text-accent">
                    <Icon name={ind.icon} />
                  </span>
                  <span className="mt-4 font-display text-lg font-bold text-foreground">{ind.name}</span>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">{ind.summary}</span>
                  <span className="mt-4 font-display text-sm font-bold text-accent">Read more →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>How I work</SectionTag>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
            Understand before designing. Measure before claiming.
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

      {/* Trust */}
      <section className="border-b border-border bg-surface-2 py-20">
        <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
          <SectionTag>Trust</SectionTag>
          <h2 className="mt-5 text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
            Proof will be earned, not invented.
          </h2>
          <p className="mt-5 text-muted-foreground">
            There are no testimonials on this site, because there are none I can verify and attribute yet.
            Demo work is clearly labelled as self-initiated. Illustrative metrics on concept projects are
            scenarios used to explain an approach — they are not client outcomes. Verified case studies will
            be published when genuine client work and permission are available.
          </p>
          <Link
            to="/work"
            className="mt-7 inline-flex items-center gap-2 font-display font-bold text-accent underline underline-offset-4"
          >
            See how the work is labelled
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Insights */}
      <section className="border-b border-border py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTag>Insights</SectionTag>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold text-foreground">
            Practical notes on search, UX and conversion.
          </h2>
          <ul className="mt-10 grid gap-5 list-none md:grid-cols-2">
            {ARTICLES.slice(0, 4).map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 50}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="surface-card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="text-xs font-bold tracking-wide text-accent uppercase">{a.topic}</span>
                  <span className="mt-2 font-display text-lg font-bold text-foreground">{a.title}</span>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">{a.description}</span>
                  <span className="mt-4 text-xs text-subtle-foreground">{a.readTime}</span>
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
