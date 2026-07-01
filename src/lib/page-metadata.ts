import type { Metadata } from "next";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  // Setting `openGraph`/`twitter` at a page level replaces (not merges
  // with) the root layout's objects, which would otherwise silently drop
  // the shared OG image and downgrade the Twitter card type. Re-declare
  // both explicitly on every page so social previews stay correct.
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      images: ["/opengraph-image"],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
