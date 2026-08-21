export const SITE = {
  name: "Srinivas Malla",
  role: "Digital Marketer & CRO Specialist",
  email: "sreer9066@gmail.com",
  location: "Visakhapatnam, Andhra Pradesh, India",
  origin: "https://srinivasmalla.com",
  positioning:
    "I help businesses turn digital traffic into enquiries and sales through conversion-focused landing pages, UI/UX, SEO, Google Ads, Meta Ads and analytics.",
  leadEndpoint:
    "https://script.google.com/macros/s/AKfycbwt-2JhGhrL8PCo9ekxIrOcnzWka9-kwQI-aSxqrGBNjHYTGI4aZJ6xxO9BPYjoUI_I/exec",
  demoDisclosure:
    "Self-initiated projects created to demonstrate landing-page design, CRO, UX, SEO and digital marketing strategy. Performance figures shown on concept projects are illustrative and are not verified client results.",
} as const;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  summary: string;
  whatItIs: string;
  whoItIsFor: string[];
  problems: string[];
  included: string[];
  growthLink: string;
};

export const SERVICES: Service[] = [
  {
    slug: "website-landing-pages",
    name: "Website & Landing Pages",
    short: "Conversion-focused pages built around one clear decision.",
    icon: "target",
    summary:
      "Landing pages and websites structured around a single decision the visitor needs to make, with messaging, hierarchy and trust in the right order.",
    whatItIs:
      "Design and build of pages whose structure is decided by the visitor's decision path rather than by a template. Offer clarity above the fold, objection handling in the middle, and a form or call step that is never more than one scroll away.",
    whoItIsFor: [
      "Businesses running ads to a homepage instead of a purpose-built page",
      "Service businesses whose site explains what they do but never asks for the enquiry",
      "Teams launching a new offer, location or product line",
    ],
    problems: [
      "Traffic arrives but the page never states who it is for",
      "Calls-to-action compete with each other instead of stacking",
      "Slow, layout-shifting pages that lose visitors before content settles",
      "Mobile layouts that hide the form behind six scrolls",
    ],
    included: [
      "Message and offer hierarchy mapped before any design work",
      "Wireframe, then responsive UI across 320px to 1440px",
      "Trust section, objection handling and CTA placement strategy",
      "Form design with validation and lead delivery",
      "Performance-minded build: no layout shift, fast first paint",
      "Conversion tracking hooked up before launch",
    ],
    growthLink:
      "A page that states the offer clearly and removes friction converts more of the traffic you are already paying for — the cheapest growth available before spending a rupee more on ads.",
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Technical, on-page and local search foundations.",
    icon: "search",
    summary:
      "Search work grounded in intent: what people actually type, what page should answer it, and whether that page can be crawled, understood and trusted.",
    whatItIs:
      "Technical SEO, on-page optimisation, content architecture and local search. The work starts with a crawl and an intent map, not with a keyword list.",
    whoItIsFor: [
      "Businesses invisible for the services they actually provide",
      "Sites rebuilt recently that lost visibility in the move",
      "Local businesses competing in Visakhapatnam and nearby markets",
    ],
    problems: [
      "Pages blocked, duplicated or canonicalised to the wrong URL",
      "One page trying to rank for six unrelated intents",
      "No internal linking between related services",
      "Thin location pages that add no information",
    ],
    included: [
      "Technical crawl: indexability, canonicals, redirects, status codes",
      "Intent mapping to a page architecture — one intent, one page",
      "On-page work: titles, descriptions, headings, internal links",
      "Structured data where it genuinely describes the page",
      "Local search foundations including Google Business Profile alignment",
      "Search Console setup, sitemap and monitoring",
    ],
    growthLink:
      "Organic search compounds. A page that answers a real question keeps earning enquiries long after the work is finished, without per-click cost.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Search campaigns built around qualified enquiries.",
    icon: "chart",
    summary:
      "Campaign structure, keyword intent, landing-page alignment and conversion tracking — optimised toward qualified enquiries, not clicks.",
    whatItIs:
      "Search and Performance Max campaigns structured so that each ad group maps to a specific intent and a landing page that matches it, with conversions defined before launch.",
    whoItIsFor: [
      "Businesses spending on ads without knowing which keywords produce enquiries",
      "Accounts running everything through one ad group and one page",
      "Local services that need enquiries this month, not in six months",
    ],
    problems: [
      "Broad match soaking budget on irrelevant searches",
      "Conversions counted on page views instead of real enquiries",
      "Ad copy promising something the landing page never mentions",
      "No negative keyword discipline",
    ],
    included: [
      "Account and campaign structure by intent",
      "Keyword research, match-type strategy and negative lists",
      "Ad copy aligned to the landing page's actual offer",
      "Conversion tracking and value assignment",
      "Landing-page alignment review before spend increases",
      "Ongoing search-term review and optimisation",
    ],
    growthLink:
      "Paid search is the fastest route to intent that already exists. Structured well, it tells you within weeks which offers and messages people respond to.",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    short: "Audience, creative and landing journeys for demand you create.",
    icon: "megaphone",
    summary:
      "Facebook and Instagram campaigns designed as a journey — creative that earns attention, a page that keeps it, and a measurement setup that tells you which part worked.",
    whatItIs:
      "Interruption-based advertising where demand has to be created rather than captured. Creative concept, audience strategy and the post-click experience are treated as one system.",
    whoItIsFor: [
      "Businesses with a visual offer: property, fitness, hospitality, retail",
      "Brands with engagement but no enquiries",
      "Launches, offers and local awareness campaigns",
    ],
    problems: [
      "Creative that describes the business instead of the customer's problem",
      "Traffic sent to a homepage that never mentions the ad's offer",
      "No event tracking, so optimisation runs blind",
      "Audience fatigue with no creative rotation plan",
    ],
    included: [
      "Offer and creative angle development",
      "Audience and placement strategy",
      "Dedicated landing pages or lead forms per campaign",
      "Pixel and conversions API event setup",
      "Creative testing plan with clear success criteria",
      "Reporting focused on cost per qualified enquiry",
    ],
    growthLink:
      "Paid social reaches people before they search. Done properly it builds a pipeline of demand that later shows up in your branded search volume.",
  },
  {
    slug: "cro",
    name: "Conversion Rate Optimization",
    short: "Find the friction, remove it, measure the difference.",
    icon: "flask",
    summary:
      "Systematic review of where visitors hesitate, drop or leave — then prioritised changes to messaging, hierarchy, forms and trust.",
    whatItIs:
      "A structured process: analytics and behaviour review, friction inventory, hypothesis list ranked by impact and effort, then implementation and measurement.",
    whoItIsFor: [
      "Sites with traffic that is not producing proportional enquiries",
      "Businesses about to increase ad spend on an unoptimised page",
      "E-commerce stores with high add-to-cart and low checkout completion",
    ],
    problems: [
      "Forms asking for more than the visitor is ready to give",
      "Unclear value proposition and competing CTAs",
      "No trust signals at the moment of decision",
      "Mobile experiences that quietly lose half the traffic",
    ],
    included: [
      "Analytics and funnel review to locate the actual drop-off",
      "Heuristic UX audit against clarity, friction, trust and motivation",
      "Prioritised hypothesis backlog",
      "Implementation of the high-confidence changes",
      "Experiment design where traffic volume supports it",
      "Before-and-after measurement on defined conversion events",
    ],
    growthLink:
      "CRO multiplies everything else. Improving the conversion rate raises the return on every channel at once, without increasing the media budget.",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Interfaces designed around the decision, not the decoration.",
    icon: "layers",
    summary:
      "Information architecture, wireframes and interface design for pages and products where clarity determines whether someone acts.",
    whatItIs:
      "Design work that starts with the user's task and the business's goal, then decides structure, hierarchy and visual system in that order.",
    whoItIsFor: [
      "Businesses whose site looks fine but confuses first-time visitors",
      "Products and dashboards where users cannot find the primary action",
      "Anyone rebuilding and wanting the structure decided before the visuals",
    ],
    problems: [
      "Navigation organised around internal departments, not user goals",
      "Visual weight given to the least important element on the page",
      "Inconsistent components creating small doubts at every step",
      "Designs that break at 320px or overwhelm at 1440px",
    ],
    included: [
      "Information architecture and user-journey mapping",
      "Wireframes for key templates before visual design",
      "Responsive UI design in Figma across all major breakpoints",
      "Component and design-token system for consistency",
      "Accessibility review: contrast, focus, touch targets, semantics",
      "Design handoff with implementation notes",
    ],
    growthLink:
      "Good UX reduces the effort required to say yes. Every removed moment of confusion is a recovered enquiry.",
  },
  {
    slug: "analytics-tracking",
    name: "Analytics & Tracking",
    short: "Measure the right events before changing the strategy.",
    icon: "graph",
    summary:
      "GA4, Google Tag Manager, Search Console and conversion tracking configured so the numbers you act on describe real business outcomes.",
    whatItIs:
      "Measurement foundations: defining which events matter, implementing them cleanly, and building reporting that answers business questions rather than displaying vanity charts.",
    whoItIsFor: [
      "Businesses making decisions on sessions and bounce rate alone",
      "Anyone about to start paid campaigns without conversion tracking",
      "Teams whose ad platform and analytics report different numbers",
    ],
    problems: [
      "No defined conversion events, so no channel can be judged",
      "Duplicate tags inflating everything",
      "Form submissions tracked as page views",
      "Reports nobody can act on",
    ],
    included: [
      "Measurement plan: which events, why, and what decision each supports",
      "GA4 and Google Tag Manager implementation",
      "Conversion and lead event tracking with validation",
      "Search Console setup and sitemap submission",
      "Channel and landing-page reporting",
      "Documentation so the setup survives handover",
    ],
    growthLink:
      "Measurement is what turns marketing from opinion into iteration. Without it, every other service is guesswork.",
  },
];

export type Industry = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  journey: string;
  challenges: string[];
  landingPage: string[];
  seo: string[];
  paid: string[];
  cro: string[];
  measurement: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "home",
    summary:
      "Long consideration cycles, high enquiry value, and a decision that is emotional as much as financial.",
    journey:
      "A buyer typically spends weeks or months between first interest and first site visit. They browse listings on portals, compare localities, check builder credibility, and only then contact anyone. By the time an enquiry arrives, most of the evaluation has already happened somewhere you could not see.",
    challenges: [
      "Portals own the discovery step, so the builder or agent brand is invisible until late",
      "Enquiry volume is easy to buy but qualification is poor",
      "Buyers want price and location clarity that listings deliberately withhold",
      "Long lag between enquiry and closure makes channel attribution hard",
    ],
    landingPage: [
      "One project per page, never a combined portfolio page for a paid campaign",
      "Locality context, connectivity and landmark distances stated plainly",
      "Floor plans, pricing bands and possession timelines visible without a form gate",
      "Site-visit booking as the primary action, brochure download as the secondary",
      "RERA number, approvals and completed-project evidence near the form",
    ],
    seo: [
      "Locality-level pages that carry genuine information about the area, not templated text",
      "Project pages structured for '<project name> price/floor plan/review' searches",
      "Comparison and guide content for buyers still narrowing down a locality",
      "Local business signals and consistent NAP for the sales office",
    ],
    paid: [
      "Search campaigns split between project-name intent and locality intent — they behave nothing alike",
      "Meta campaigns carrying the visual proof that search ads cannot",
      "Lead forms qualified with budget and timeline fields, accepting lower volume for higher quality",
      "Negative keywords for rental and job-seeker traffic, which is heavy in this category",
    ],
    cro: [
      "Replace 'Enquire Now' with a specific, low-commitment step such as booking a slot",
      "Show pricing bands: hiding price filters out serious buyers, not casual ones",
      "Add response-time expectations near the form",
      "Test shorter forms — name and phone convert far better than seven fields",
    ],
    measurement: [
      "Track site-visit bookings and qualified calls, not raw form fills",
      "Push CRM outcome data back so ad platforms optimise toward closures",
      "Report cost per qualified enquiry by project and by locality",
      "Accept and plan for long attribution windows",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "health",
    summary:
      "Trust decides everything, and the visitor is often anxious, in a hurry, or searching on someone else's behalf.",
    journey:
      "A patient searches a symptom, a condition or a specialty, reads to understand what is happening, then looks for a doctor nearby with credible credentials. The final step is usually a phone call or a directions lookup, often within minutes of landing on the page and often on a phone.",
    challenges: [
      "Regulated claims: outcomes and guarantees cannot be advertised",
      "Credibility must be demonstrated through credentials, not marketing language",
      "High-urgency mobile traffic with very low patience for slow pages",
      "Reviews and directory listings carry more weight than the website itself",
    ],
    landingPage: [
      "Doctor credentials, registration and experience visible early",
      "Consultation timings, address, map and a tap-to-call number in the header",
      "One page per specialty or condition, written in patient language",
      "Appointment booking that works in under thirty seconds on a phone",
      "Clear, non-alarming explanation of what the visit will involve",
    ],
    seo: [
      "Condition and symptom pages that genuinely answer the question first",
      "Specialty pages separated from doctor-profile pages",
      "Local SEO: Google Business Profile, consistent details, review flow",
      "Physician and MedicalClinic structured data reflecting real credentials",
    ],
    paid: [
      "Search campaigns on specialty and condition intent, tightly geo-fenced",
      "Call-only campaigns during clinic hours — this category converts on the phone",
      "Careful compliance review of ad copy against platform health policies",
      "Meta advertising restricted to awareness and health-education angles",
    ],
    cro: [
      "Put the phone number in the sticky header; it is the highest-intent action",
      "Reduce appointment forms to name, phone and preferred time",
      "Show real photos of the clinic and staff rather than stock imagery",
      "State fees or fee ranges where it is appropriate to do so",
    ],
    measurement: [
      "Track calls, direction requests and appointment submissions as distinct events",
      "Segment by specialty to see which services attract demand",
      "Watch mobile page speed closely; this audience abandons fast",
      "Handle patient data carefully — never send personal health details into analytics",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: "bag",
    summary:
      "Every step between interest and payment is measurable, and every step leaks.",
    journey:
      "A shopper discovers a product through search, social or a marketplace, compares price and delivery, reads reviews, adds to cart, and then either checks out or disappears. The gap between add-to-cart and completed order is where most of the lost revenue sits.",
    challenges: [
      "Marketplace price comparison happening in a parallel tab",
      "Checkout abandonment from unexpected shipping cost or forced account creation",
      "Category and product pages that never get indexed",
      "Rising acquisition costs squeezing already thin margins",
    ],
    landingPage: [
      "Product pages with real photography, size and material specifics, and honest delivery timelines",
      "Shipping cost and return policy stated before checkout, not inside it",
      "Category pages with useful filters and a fast, stable grid",
      "Campaign landing pages for a specific collection rather than the store homepage",
    ],
    seo: [
      "Product and category pages built to be indexed, with unique descriptions",
      "Faceted navigation controlled so filters do not generate thousands of duplicates",
      "Product structured data with accurate price and availability",
      "Buying-guide content that captures research-stage searches",
    ],
    paid: [
      "Shopping and Performance Max driven by a clean, complete product feed",
      "Meta catalogue and dynamic retargeting for cart and view abandoners",
      "Budget allocation by product margin, not by product popularity",
      "Creative testing on the offer, not just the image",
    ],
    cro: [
      "Guest checkout, always",
      "Show total cost including shipping as early as possible",
      "Trust markers at the payment step: returns, secure payment, contact",
      "Reduce checkout to the fewest fields the logistics partner actually needs",
    ],
    measurement: [
      "Full GA4 e-commerce events from view_item through purchase",
      "Funnel reporting to find the specific leaking step",
      "Revenue and margin by channel, not just conversions",
      "Server-side or Conversions API tracking to recover signal lost to browsers",
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "bed",
    summary:
      "The battle is against OTA commission — the goal is to make the direct booking obviously better.",
    journey:
      "A traveller finds the property on an OTA or through search, then almost always opens the hotel's own site to check photos, reviews and whether booking direct is cheaper. That visit is the one chance to win a commission-free booking, and it usually happens on mobile.",
    challenges: [
      "OTAs outrank the property on its own brand name",
      "Commission eats 15–25% of every indirect booking",
      "Seasonal demand swings requiring flexible spend",
      "Photography quality effectively decides the outcome",
    ],
    landingPage: [
      "Direct-booking benefit stated plainly and immediately: best rate, flexibility, perks",
      "Booking engine reachable in one tap, with a date picker above the fold",
      "Large, fast, real photography of rooms and property",
      "Location context: distance to beach, airport, station, key attractions",
      "Package and offer pages for weekends, festivals and long stays",
    ],
    seo: [
      "Own the brand-name search with a strong, fast, well-marked-up homepage",
      "Area and attraction guides that capture destination research",
      "Hotel and LocalBusiness structured data with accurate amenity information",
      "Review generation and response as an ongoing habit",
    ],
    paid: [
      "Defensive brand-name search campaigns against OTA bidding",
      "Destination and 'hotels near X' intent campaigns during season",
      "Meta advertising for offers, packages and remarketing to site visitors",
      "Spend pacing aligned to the booking window, not the stay date",
    ],
    cro: [
      "Show the direct-rate advantage as a number, next to the OTA rate",
      "Remove every step between the date picker and the payment page",
      "Display cancellation terms early — uncertainty is the main hesitation",
      "Test urgency honestly: real availability only, never fabricated scarcity",
    ],
    measurement: [
      "Track booking-engine handoffs and completed bookings, including revenue",
      "Report direct versus OTA share as the headline metric",
      "Segment by season, package and length of stay",
      "Attribute across the long research window travellers actually take",
    ],
  },
  {
    slug: "local-services",
    name: "Local Services",
    icon: "wrench",
    summary:
      "High intent, short decision window, and a phone call as the conversion.",
    journey:
      "Something breaks or is needed. The person searches on a phone, looks at the map pack, scans two or three options for reviews and proximity, and calls. The whole journey can take four minutes.",
    challenges: [
      "The map pack matters more than the website",
      "Missed calls are lost jobs, with no second chance",
      "Price expectation set by whoever answers first",
      "Difficult to prove which channel produced the call",
    ],
    landingPage: [
      "Phone number in the header, tappable, on every page",
      "Service area stated explicitly by neighbourhood",
      "Availability and response time shown honestly",
      "Pricing guidance or callout charge so nobody feels ambushed",
      "One page per service, because searches are service-specific",
    ],
    seo: [
      "Google Business Profile as the primary asset: categories, photos, services, reviews",
      "Service pages combined with genuine area coverage information",
      "Consistent name, address and phone everywhere",
      "Steady review generation as an operational routine, not a campaign",
    ],
    paid: [
      "Call-only and local search campaigns with tight radius targeting",
      "Ad scheduling matched to when the phone is actually answered",
      "Location extensions and call extensions on every ad",
      "Negative keywords for DIY, jobs and spare-part searches",
    ],
    cro: [
      "Make calling the primary action and the form the fallback",
      "Show a real face and a real address — local buyers check",
      "Answer the three questions every caller has: cost, timing, coverage",
      "Add WhatsApp as an option where the audience prefers it",
    ],
    measurement: [
      "Call tracking so phone conversions are attributable",
      "Track direction requests and Business Profile actions",
      "Cost per booked job, not cost per lead",
      "Watch review volume and rating as leading indicators",
    ],
  },
  {
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    icon: "dumbbell",
    summary:
      "Motivation is high at the moment of search and fades fast — the trial has to be easy to say yes to.",
    journey:
      "Someone decides to start. They search for gyms or studios nearby, check timings, price and whether the place looks like somewhere they would feel comfortable, and then look for a trial or a first visit. If the trial is hard to book, the motivation is gone within a day.",
    challenges: [
      "Seasonal spikes in January and pre-summer, quiet periods between",
      "Price sensitivity and heavy local competition",
      "Retention matters more than acquisition, but marketing focuses on acquisition",
      "Prospects are intimidated and want to know what the first visit is like",
    ],
    landingPage: [
      "Trial or first-session offer as the single primary action",
      "Timings, class schedule and pricing without a form gate",
      "Real photos of the actual facility and real members, not stock",
      "Trainer credentials and a plain description of the first visit",
      "Location, parking and access details",
    ],
    seo: [
      "Local search for 'gym near me' and specific disciplines: yoga, CrossFit, personal training",
      "One page per programme, because people search by what they want to do",
      "Business Profile with current photos, timings and services",
      "Reviews from members, prompted at the right moment in the membership",
    ],
    paid: [
      "Meta advertising for the trial offer, targeted tightly by radius",
      "Search campaigns for high-intent 'gym near me' style queries",
      "Seasonal budget weighting toward January and pre-summer",
      "Retargeting people who viewed pricing but did not book",
    ],
    cro: [
      "Make the trial booking two fields long",
      "Show the price — hiding it costs more enquiries than it protects",
      "Reduce the anxiety of the first visit with a clear 'what happens' section",
      "Offer a WhatsApp option for quick questions before committing",
    ],
    measurement: [
      "Track trial bookings, attended trials and conversions to membership separately",
      "Measure cost per member joined, not cost per lead",
      "Segment by programme to see what actually sells",
      "Monitor retention alongside acquisition",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  cat: "landing" | "ads" | "seo";
  icon: string;
  description: string;
  label: string;
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "FitPro Gym — Lead Generation Concept",
    category: "Landing Page · Fitness",
    cat: "landing",
    icon: "dumbbell",
    description:
      "A conversion-focused membership landing-page concept with offer structure, trust elements, CTA hierarchy and mobile-first UX.",
    label: "Illustrative CRO Scenario",
    url: "https://vizaggymjd.pages.dev/",
  },
  {
    name: "MediCare Hospital — Patient Inquiry Concept",
    category: "Healthcare · UX",
    cat: "landing",
    icon: "health",
    description:
      "Healthcare information architecture and appointment-focused UX concept designed around clarity, trust and action.",
    label: "Healthcare UX Concept",
    url: "https://kesavaraoclinic.pages.dev/",
  },
  {
    name: "StyleHub — Product Launch Concept",
    category: "E-commerce · Paid Social",
    cat: "ads",
    icon: "bag",
    description:
      "Paid-social and landing-page journey concept for a product launch, from creative angle through to checkout experience.",
    label: "Concept ROAS Scenario",
  },
  {
    name: "LuxHomes — Property Inquiry Concept",
    category: "Real Estate · Landing Page",
    cat: "landing",
    icon: "home",
    description:
      "Property discovery, trust signals and enquiry-focused UX for a residential project concept.",
    label: "Sample Lead-Generation Target",
    url: "https://aishwarayarajeshrealestate.pages.dev/",
  },
  {
    name: "MediCare Clinic — Organic Growth Concept",
    category: "Healthcare · SEO",
    cat: "seo",
    icon: "search",
    description:
      "Local SEO and content architecture concept built around service and condition intent for a multi-specialty clinic.",
    label: "Sample SEO Growth Scenario",
  },
  {
    name: "AppLaunch — Free-Trial Concept",
    category: "SaaS · CRO",
    cat: "ads",
    icon: "phone",
    description:
      "Benefit-led messaging, friction reduction and signup UX concept for a free-trial product launch.",
    label: "Illustrative Conversion Scenario",
    url: "https://saasproject.pages.dev/",
  },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  topic: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "why-landing-pages-lose-enquiries",
    title: "Why most landing pages lose enquiries before the fold",
    description:
      "The first screen of a landing page has one job: tell the right person they are in the right place. Most pages spend it on something else.",
    date: "2026-06-12",
    readTime: "6 min read",
    topic: "Landing Pages",
    intro:
      "When a landing page underperforms, the instinct is to test button colours and headlines. Almost always the real problem sits higher up: the first screen fails to confirm to the visitor that this page is about their specific problem.",
    sections: [
      {
        heading: "The visitor is answering one question",
        body: [
          "Someone arriving from an ad or a search result is running a fast, mostly unconscious check: is this about the thing I just searched for? They give the page a couple of seconds to answer. If the answer is unclear, they leave — and the analytics record it as a bounce, which tells you nothing about why.",
          "That check is not about design quality. A beautiful page with a vague headline loses to a plain page with a specific one.",
        ],
      },
      {
        heading: "Three failures that happen above the fold",
        body: [
          "The first is talking about yourself. 'Welcome to our website' and 'We are a leading provider' both spend the most valuable screen space on information the visitor did not come for.",
          "The second is a mismatch with the source. If the ad promised '2BHK flats in Madhurawada from ₹55L' and the page headline says 'Premium living redefined', the visitor has to work out whether they are in the right place. Most will not bother.",
          "The third is burying the action. On mobile especially, if the visitor has to scroll three screens to find out how to contact you, a meaningful share never get there.",
        ],
      },
      {
        heading: "What the first screen should contain",
        body: [
          "State who the page is for and what they get, in the visitor's own words. Add one line of specificity — a price band, a location, a timeframe, a constraint. Put one primary action within immediate reach, and make it a small commitment rather than a large one.",
          "Everything else — the story, the credentials, the gallery, the process — belongs below. It matters, but only to people who have already decided they are in the right place.",
        ],
      },
      {
        heading: "How to check your own page",
        body: [
          "Open it on a phone. Screenshot the first screen. Show it to someone unfamiliar with the business and ask two questions: what is being offered, and who is it for. If they hesitate, the page is losing enquiries before anyone reaches your carefully written middle section.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-foundations-visakhapatnam",
    title: "Local SEO foundations for service businesses in Visakhapatnam",
    description:
      "For most local service businesses, the map pack matters more than the website. Here is the order in which to build local search foundations.",
    date: "2026-06-28",
    readTime: "7 min read",
    topic: "Local SEO",
    intro:
      "A local service business in Visakhapatnam competing for nearby customers is really competing for three map results. Getting the website right matters, but it is the second job, not the first.",
    sections: [
      {
        heading: "Start with the Business Profile, not the website",
        body: [
          "A complete Google Business Profile does more for local visibility than a month of on-page work. Primary category chosen precisely, secondary categories added, every service listed, real photographs uploaded regularly, hours accurate including holidays, and the service area defined honestly.",
          "The profile is also where most people first judge you. Photos of the actual premises and staff outperform anything stock.",
        ],
      },
      {
        heading: "Consistency across every listing",
        body: [
          "Name, address and phone number need to match exactly everywhere they appear — your site, Justdial, IndiaMART, Facebook, directories. Variations dilute the signal that these listings all describe one business.",
          "Pick one canonical format for the address and use it literally everywhere, down to the spelling of the locality.",
        ],
      },
      {
        heading: "Reviews are an operational habit",
        body: [
          "Review volume, recency and rating all feed local ranking, and they heavily influence the click. The businesses that do well treat asking for a review as a step in the job, not a marketing campaign — a short message sent at the moment the customer is happiest.",
          "Respond to all of them, including the negative ones. A calm, specific reply to a complaint reassures future customers more than a wall of five-star ratings.",
        ],
      },
      {
        heading: "Then, the website",
        body: [
          "One page per service, because that is how people search. Where you serve multiple areas, area pages are worth building only if each one contains information genuinely specific to that area — coverage, travel time, local landmarks, work you have done there. A template with the locality name swapped in is a thin page and will be treated as one.",
          "Add LocalBusiness structured data that reflects what is actually on the page, keep the site fast on mobile, and make the phone number tappable in the header on every page.",
        ],
      },
      {
        heading: "Measure calls, not sessions",
        body: [
          "Local search converts on the phone. Set up call tracking, track direction requests, and monitor Business Profile actions. Sessions will tell you almost nothing useful about whether local search is working.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-post-click-experience",
    title: "Google Ads is only half the job: the post-click experience",
    description:
      "Campaign structure gets the click. What happens in the next fifteen seconds decides whether you paid for anything at all.",
    date: "2026-07-15",
    readTime: "6 min read",
    topic: "Google Ads & CRO",
    intro:
      "Most underperforming Google Ads accounts are not broken in the account. Keywords are reasonable, structure is defensible, spend is controlled — and the money still evaporates, because every click lands on a page that was never built to receive it.",
    sections: [
      {
        heading: "The homepage is not a landing page",
        body: [
          "A homepage exists to route many different visitors to many different places. A landing page exists to move one visitor toward one action. Sending paid traffic to the homepage means paying for the click and then asking the visitor to do navigation work.",
          "The fix is unglamorous: one page per campaign intent, matching the promise made in the ad.",
        ],
      },
      {
        heading: "Message match is measurable",
        body: [
          "Take your top five ad groups. Write down the headline of each ad and the H1 of the page it points to. Where they do not correspond, you have found the leak — and usually the Quality Score problem too, which means you are also paying more per click for the privilege.",
        ],
      },
      {
        heading: "Track the enquiry, not the pageview",
        body: [
          "A distressing number of accounts count a thank-you pageview or, worse, a click on a button as a conversion. Optimisation then pushes budget toward whatever produces those events, which is not the same thing as producing business.",
          "Define the conversion as the enquiry actually being received. Where possible, feed back what happened afterwards — qualified, quoted, closed — so the platform learns which clicks were worth buying.",
        ],
      },
      {
        heading: "Fix the page before raising the budget",
        body: [
          "Doubling spend on a page converting at 1% buys twice as much of the same disappointment. Getting that page to 2% halves the cost per enquiry at the current budget, and then doubling spend actually means something.",
          "The order is: message match, page speed, mobile experience, form length, trust — and only then more money.",
        ],
      },
    ],
  },
  {
    slug: "what-to-measure-before-changing-strategy",
    title: "What to measure before you change your marketing",
    description:
      "Changing strategy without a measurement baseline means you will never know whether the change helped. Here is the minimum setup.",
    date: "2026-07-30",
    readTime: "5 min read",
    topic: "Analytics",
    intro:
      "The most expensive marketing mistake is not choosing the wrong channel. It is changing several things at once without a baseline, and therefore never learning which change was the one that worked.",
    sections: [
      {
        heading: "Define the conversion in business terms",
        body: [
          "Not a pageview. Not a scroll. The event that means someone raised their hand: an enquiry submitted, a call connected and answered, a booking confirmed, an order placed.",
          "Write the definition down before implementing anything. If two people in the business would define a lead differently, the reporting will never be trusted.",
        ],
      },
      {
        heading: "Implement cleanly and validate",
        body: [
          "GA4 with a small set of well-named events beats a sprawling setup nobody understands. Implement through Google Tag Manager, then validate every event by triggering it yourself and confirming it arrives exactly once.",
          "Duplicate tags are the single most common cause of numbers that nobody believes.",
        ],
      },
      {
        heading: "Establish the baseline before touching anything",
        body: [
          "Collect at least four weeks of clean data — conversions by channel, by landing page, and by device. Note the conversion rate. Note the cost per enquiry where there is spend.",
          "This is boring and it is the entire point. Without it, every later claim of improvement is a story rather than a result.",
        ],
      },
      {
        heading: "Change one meaningful thing at a time",
        body: [
          "Then change one thing, give it enough time and volume to say something, and compare against the baseline. Where traffic supports a proper test, run one. Where it does not — which is most local businesses — sequential comparison with a documented change log is honest and workable, as long as you acknowledge the seasonality and note anything else that changed.",
        ],
      },
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Understand",
    body: "Business goal, audience, current performance and constraints. What does a good month actually look like, and what is stopping it?",
  },
  {
    step: "02",
    title: "Diagnose",
    body: "Review the site, the funnel and the data. Find where attention is lost and why, before proposing anything.",
  },
  {
    step: "03",
    title: "Design & build",
    body: "Structure, messaging, UI and implementation — decided by the visitor's decision path rather than by a template.",
  },
  {
    step: "04",
    title: "Measure & improve",
    body: "Tracking in place before launch, then iterate on what the data shows rather than on what looked good in the plan.",
  },
];
