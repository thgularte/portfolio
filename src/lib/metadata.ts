import type { Metadata } from "next";
export function getSiteUrl() {
  const configured =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  const url = new URL(configured);
  if (!["https:", "http:"].includes(url.protocol))
    throw new Error("SITE_URL deve ser uma URL HTTP(S).");
  return url.origin;
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Theodor Gularte`,
      description,
      url: path,
      siteName: "Theodor Gularte",
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | Theodor Gularte`,
      description,
    },
  };
}
