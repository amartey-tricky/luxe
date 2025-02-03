import { LucideIcon, Droplet, Sparkles, Zap, Droplets, Syringe, Eraser, Scissors } from "lucide-react";
import { notFound } from "next/navigation";

export interface TreatmentProps {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
  benefits: string[];
  procedure: string;
  image: string;
}

export const treatmentData: TreatmentProps[] = [
  {
    id: 1,
    name: "Chemical Peels",
    slug: "chemical-peels",
    description: "Exfoliates the skin to reduce fine lines, wrinkles, and improve skin texture. It\'s ideal for rejuvenating dull or uneven skin.",
    icon: Droplet,
    fullDescription: "Chemical peels are a popular aesthetic treatment that involves applying a chemical solution to the skin, causing it to exfoliate and eventually peel off. This process reveals new, smoother skin underneath. Chemical peels can be used to treat wrinkles, skin discoloration, and scars. They can be done at different depths — light, medium, or deep — depending on your desired results and recovery time.",
    benefits: [
      "Improves skin texture and tone",
      "Reduces fine lines and wrinkles",
      "Treats acne and acne scars",
      "Minimizes sun damage and age spots",
      "Stimulates collagen production",
    ],
    procedure: "During the treatment, your skin will be cleansed and the chemical solution will be applied. You may feel a slight burning sensation that lasts about five to ten minutes. Depending on the type of peel, you may need neutralization afterwards. Post-treatment care and recovery time vary based on the depth of the peel.",
    image: ""
  },
  {
    id: 2,
    name: "Facials",
    slug: "facials",
    description: "Customized treatments designed to target specific skin concerns like acne, aging, and hyperpigmentation. These offer immediate radiance and hydration.",
    icon: Sparkles,
    fullDescription: "Facials are personalized skincare treatments that cleanse, exfoliate, and nourish the skin. Each facial is tailored to address specific skin concerns, utilizing professional-grade products and techniques. From deep cleansing to intensive hydration, facials provide a comprehensive approach to skin health and rejuvenation.",
    benefits: [
      "Deep cleansing and pore refinement",
      "Immediate skin hydration",
      "Targets specific skin concerns",
      "Improves skin texture and tone",
      "Promotes relaxation and stress relief",
    ],
    procedure: "A typical facial begins with a thorough skin analysis, followed by cleansing, exfoliation, extraction (if needed), and a customized mask. The treatment concludes with serums, moisturizers, and sun protection specific to your skin type and concerns.",
    image: "luxe-treatments/h3ex2lrspidyilmqmp5p"
  },
  {
    id: 3,
    name: "Laser Skin Resurfacing",
    slug: "laser-skin-resurfacing",
    description: "A high-tech solution to improve skin texture, minimize pores, and reduce wrinkles by stimulating collagen production.",
    icon: Zap,
    fullDescription: "Laser skin resurfacing is an advanced aesthetic treatment that uses targeted light therapy to remove damaged skin layers and stimulate collagen production. This precision treatment can address a wide range of skin concerns, from fine lines and wrinkles to scars and uneven skin tone.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Minimizes acne scars",
      "Tightens skin",
      "Stimulates natural collagen production",
    ],
    procedure: "The laser treatment involves directing concentrated light beams at problem areas of the skin. Depending on the type of laser used (ablative or non-ablative), the treatment can be more or less invasive. The procedure typically takes 30 minutes to 2 hours, with recovery time varying based on the intensity of the treatment.",
    image: "luxe-treatments/lftwnkz66x0jig64gt7d"
  },
  {
    id: 4,
    name: "Botox and Fillers",
    slug: "botox-and-fillers",
    description: "Injectable treatments to relax facial muscles, reduce the appearance of wrinkles, and restore lost volume, providing a youthful look.",
    icon: Syringe,
    fullDescription: "Botox and dermal fillers are injectable treatments that work differently to combat signs of aging. Botox temporarily paralyzes muscles to reduce dynamic wrinkles, while fillers add volume and smooth out static wrinkles. Together, they can provide a comprehensive facial rejuvenation.",
    benefits: [
      "Reduces appearance of wrinkles",
      "Restores facial volume",
      "Provides immediate results",
      "Non-surgical alternative to facelift",
      "Customizable treatment",
    ],
    procedure: "The treatment involves carefully placed injections in targeted areas. Botox is typically used in areas with dynamic wrinkles like forehead lines and crow's feet. Fillers are used to add volume to cheeks, lips, and smooth out deeper lines. The entire procedure usually takes 15-30 minutes with minimal downtime.",
    image: "luxe-treatments/ner3ylnan4rscp6ituih"
  },
  {
    id: 5,
    name: "Hydrafacial",
    slug: "hydrafacial",
    description: "Combines cleansing, exfoliation, extraction, and hydration for improved skin texture and reduced pore visibility.",
    icon: Droplets,
    fullDescription: "Hydrafacial is a multi-step treatment that provides instant results with no downtime. Unlike traditional facials, it uses a unique Vortex-Fusion delivery system to cleanse, extract, and hydrate the skin. It's suitable for all skin types and addresses various skin concerns simultaneously.",
    benefits: [
      "Deep cleansing and hydration",
      "Improves skin texture",
      "Reduces fine lines and wrinkles",
      "Minimizes enlarged pores",
      "Helps with hyperpigmentation",
    ],
    procedure: "The treatment involves four key steps: cleansing and exfoliation, acid peel, extraction, and hydration. A special device uses spiral suction to remove impurities while simultaneously delivering hydrating serums. The entire process takes about 30 minutes and provides immediate, noticeable results.",
    image: ""
  },
  {
    id: 6,
    name: "Chemical Exfoliation",
    slug: "chemical-exfoliation",
    description: "Advanced exfoliation method to brighten skin, improve texture, and minimize pores.",
    icon: Eraser,
    fullDescription: "Chemical exfoliation uses acids like AHAs (Alpha Hydroxy Acids) and BHAs (Beta Hydroxy Acids) to remove dead skin cells and promote cell turnover. Unlike physical scrubs, chemical exfoliants work deeper and can be more gentle on the skin, making them suitable for various skin types.",
    benefits: [
      "Brightens skin complexion",
      "Unclogs and minimizes pores",
      "Reduces acne and breakouts",
      "Improves skin texture",
      "Helps with hyperpigmentation",
    ],
    procedure: "Depending on your skin type and concerns, a suitable acid (glycolic, salicylic, lactic) is applied to the skin. The treatment can be done in-office or as part of a skincare routine. The acid is left on the skin for a specific duration and then neutralized or washed off. Results are progressive with consistent use.",
    image: ""
  },
  {
    id: 7,
    name: "Laser Hair Removal",
    slug: "laser-hair-removal",
    description: "Permanently reduces unwanted hair, offering smooth, hair-free skin.",
    icon: Scissors,
    fullDescription: "Laser hair removal is a long-term solution for unwanted hair. It uses concentrated light beams to target and destroy hair follicles, preventing future hair growth. The treatment is effective on various body parts and works best on individuals with dark hair and light skin.",
    benefits: [
      "Permanent hair reduction",
      "Precise targeting of hair follicles",
      "Reduces ingrown hairs",
      "Smoother skin compared to traditional methods",
      "Time-saving long-term solution",
    ],
    procedure: "During the treatment, a laser device is passed over the targeted area. The laser's light is absorbed by the hair's pigment, damaging the hair follicle and inhibiting future growth. Multiple sessions are required for optimal results, typically 6-8 treatments spaced 4-6 weeks apart.",
    image: "luxe-treatments/b1acir3x2jlkl23phalh"
  }
]

export function getTreatmentBySlug(slug: string): TreatmentProps {
  const treatment = treatmentData.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return treatment;
}

export function getAllTreatmentSlugs(): { slug: string }[] {
  return treatmentData.map((treatment) => ({
    slug: treatment.slug
  }))
}

