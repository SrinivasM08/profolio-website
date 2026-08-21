import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site-content";
import { PageHero } from "@/components/ui-blocks";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: `Privacy Policy | ${SITE.name}`,
      description:
        "How enquiry information submitted through this website is collected, used, stored and deleted, and how to request removal of your data.",
      path: "/privacy",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        tag="Privacy"
        title="Privacy Policy"
        intro="This policy explains what happens to the information you send through this website."
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto w-full max-w-3xl space-y-8 px-5 text-muted-foreground sm:px-8">
          <div>
            <h2 className="text-xl font-extrabold text-foreground">What is collected</h2>
            <p className="mt-3">
              Only what you type into the contact form: your name, email address, optional phone number,
              optional company or website, the service you are interested in, and your message. Nothing else
              is requested, and no account is created.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground">How it is used</h2>
            <p className="mt-3">
              Enquiry details are used solely to reply to you and to discuss the work you have asked about.
              They are not sold, rented, or shared with third parties for marketing, and you will not be
              added to a mailing list.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground">Where it is stored</h2>
            <p className="mt-3">
              Form submissions are delivered to a private Google Sheet through a Google Apps Script endpoint
              and are readable only by {SITE.name}. Email correspondence is stored in the associated email
              account.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground">Analytics and cookies</h2>
            <p className="mt-3">
              This site sets no advertising or tracking cookies of its own. If web analytics is enabled in
              future, it will be configured to collect aggregate usage data only, with IP anonymisation, and
              this section will be updated before that happens.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground">Retention and deletion</h2>
            <p className="mt-3">
              Enquiries are kept only as long as they are relevant to an ongoing or potential engagement. You
              can ask for your details to be deleted at any time by emailing{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent underline underline-offset-4">
                {SITE.email}
              </a>
              , and they will be removed from the sheet and inbox.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground">Your rights</h2>
            <p className="mt-3">
              You can request a copy of the information held about you, ask for it to be corrected, or ask
              for it to be erased. Requests are handled at the email address above.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground">External links</h2>
            <p className="mt-3">
              Demo projects and social profiles linked from this site are hosted elsewhere and are governed by
              their own privacy policies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
