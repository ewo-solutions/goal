import type { Metadata } from "next";
import { site } from "./site";

/**
 * Builds per-page metadata: canonical URL plus matching Open Graph / Twitter
 * title+description. The <title> tag itself still goes through the root
 * layout's `title.template`, so `title` here stays the plain page title.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
