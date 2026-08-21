import { SITE } from "./site-content";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;

};

export function seo({ title, description, path, type = "website", image }: SeoInput) {
  const url = `${SITE.origin}${path}`;
  const imageUrl = image ?? `${SITE.origin}/og-image.jpg`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${SITE.name} — ${SITE.role}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: `${SITE.name} — ${SITE.role}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}


export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE.origin}${item.path}`,
      })),
    }),
  };
}
