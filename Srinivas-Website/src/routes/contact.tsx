import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { seo } from "@/lib/seo";
import { SITE, SERVICES } from "@/lib/site-content";
import { Icon } from "@/components/Icon";
import { PageHero, Reveal, SectionTag } from "@/components/ui-blocks";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: `Contact Srinivas Malla | Digital Marketing in Visakhapatnam`,
      description:
        "Send your website or campaign and the result you want to improve. Expect a reply within one working day with what I would look at first.",
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long")
    .refine((v) => v === "" || /^[+\d][\d\s-]{6,19}$/.test(v), "Enter a valid phone number"),
  company: z.string().trim().max(120, "Too long"),
  service: z.string().trim().max(80),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail")
    .max(1500, "Message must be under 1500 characters"),
  website: z.string().max(0),
});

type Fields = z.infer<typeof schema>;
type Status = "idle" | "sending" | "sent" | "error";

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  website: "",
};

const inputClass =
  "mt-1.5 w-full rounded-chip border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Fields;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      const firstKey = (["name", "email", "phone", "company", "message"] as const).find(
        (k) => next[k],
      );
      if (firstKey) {
        requestAnimationFrame(() => document.getElementById(firstKey)?.focus());
      }
      return;
    }
    setErrors({});
    setStatus("sending");

    // The Apps Script handler does JSON.parse(e.postData.contents), so the body must be
    // raw JSON. The urlencoded content-type keeps the request "simple" (no CORS preflight).
    const payload = JSON.stringify({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company,
      service: parsed.data.service || "Not specified",
      message: parsed.data.message,
      source: "srinivasmalla.com/contact",
    });

    try {
      await fetch(SITE.leadEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: payload,
      });
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  }


  return (
    <>
      <PageHero
        tag="Contact"
        title="Tell me what you want to improve."
        intro="Send your website or campaign and the outcome you're trying to move. I'll reply with what I'd look at first — usually within one working day."
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="surface-card p-7">
              <h2 className="font-display text-xl font-bold text-foreground">Project enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked with * are required. Your details are used only to reply — see the{" "}
                <Link to="/privacy" className="text-accent underline underline-offset-4">
                  privacy policy
                </Link>
                .
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-display text-sm font-bold text-foreground">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="font-display text-sm font-bold text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={255}
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-display text-sm font-bold text-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-sm text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="font-display text-sm font-bold text-foreground">
                      Company or website
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      maxLength={120}
                      value={values.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="font-display text-sm font-bold text-foreground">
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={(e) => set("service", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a service (optional)</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="font-display text-sm font-bold text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={1500}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={inputClass}
                    placeholder="What are you trying to improve, and what have you tried so far?"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot: hidden from users, catches bots */}
                <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={(e) => set("website", e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-base font-bold text-accent-foreground transition hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                  <Icon name="arrow" className="h-4 w-4" />
                </button>

                <p role="status" aria-live="polite" className="text-sm">
                  {status === "sent" && (
                    <span className="text-accent">
                      Thanks — your enquiry has been sent. I'll reply to your email, usually within one
                      working day.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-destructive">
                      Something went wrong sending the form. Please email{" "}
                      <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
                        {SITE.email}
                      </a>{" "}
                      directly.
                    </span>
                  )}
                </p>
              </form>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-card p-7">
              <SectionTag>Direct</SectionTag>
              <ul className="mt-5 space-y-5 list-none text-sm">
                <li>
                  <p className="font-display font-bold text-foreground">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-accent underline underline-offset-4 break-all"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <p className="font-display font-bold text-foreground">Based in</p>
                  <p className="text-muted-foreground">{SITE.location}</p>
                </li>
                <li>
                  <p className="font-display font-bold text-foreground">Availability</p>
                  <p className="text-muted-foreground">
                    Remote work across India; in-person meetings possible in and around Visakhapatnam.
                  </p>
                </li>
                <li>
                  <p className="font-display font-bold text-foreground">Response time</p>
                  <p className="text-muted-foreground">Usually within one working day.</p>
                </li>
              </ul>

              <div className="mt-7 rounded-card bg-surface-2 p-5">
                <p className="font-display font-bold text-foreground">Useful things to include</p>
                <ul className="mt-3 space-y-2 list-none text-sm text-muted-foreground">
                  <li>Your website or campaign link</li>
                  <li>The result you want to move (enquiries, calls, sales)</li>
                  <li>What you're currently spending, if anything</li>
                  <li>What you've already tried</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
