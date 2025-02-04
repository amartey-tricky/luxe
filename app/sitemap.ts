import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luxeclinicgh.com";
  const currentDate = new Date().toISOString();

  const aestheticTreatments = [
    "chemical-peels",
    "facials",
    "laser-skin-resurfacing",
    "botox-and-fillers",
    "hyfrafacials",
    "chemical-exfoliation",
    "laser-hair-removal",
  ]

  const dermatologyTreatments = [
    "acne-therapy",
    "eczema-therapy",
    "psoriasis-therapy",
    "wart-removal-therapy",
    "dpn-therapy",
    "general-dermatology-treatments",
  ]

  const medicalTreatments = [
    "prp-therapy",
    "medical-weight-loss-therapy",
    "family-planning",
    "iv-fusions",
    "sti-therapy",
    "gynaecological-infections-therapy",
  ]

    const dentalTreatments = [
    "prp-therapy",
    "medical-weight-loss-therapy",
    "family-planning",
    ]
  
  const staticPages = [
    "",
    "/treatments",
    "/about",
    "/contact",
    "/products",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 1,
  }))

  const aestheticPages = aestheticTreatments.map((treatment) => ({
    url: `${baseUrl}/treatments/aesthetic/${treatment}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const dermatologyPages = dermatologyTreatments.map((treatment) => ({
    url: `${baseUrl}/treatments/dermatology/${treatment}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const medicalPages = medicalTreatments.map((treatment) => ({
    url: `${baseUrl}/treatments/medical/${treatment}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

    const medicalPages = dentalTreatments.map((treatment) => ({
    url: `${baseUrl}/treatments/dental/${treatment}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...aestheticPages, ...dermatologyPages, ...medicalPages, ...dentalPages]
}
