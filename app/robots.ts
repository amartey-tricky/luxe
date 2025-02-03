import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/fonts",
    },
    sitemap: "https://luxeclinicgh.com/sitemap.xml",
  }
}
