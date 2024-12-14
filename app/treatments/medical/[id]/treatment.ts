import { LucideIcon, Droplet, Weight, Heart } from "lucide-react";
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

export const treatmentData = [
  {
    id: 1,
    name: "PRP Therapy",
    slug: "prp-therapy",
    description: "Utilizes the patient's own plasma to stimulate collagen production, improve skin texture, and reduce fine lines. It can also be used for hair restoration and joint healing.",
    icon: Droplet,
    fullDescription: "Platelet-Rich Plasma (PRP) Therapy is an innovative treatment that harnesses the healing power of your body's own blood platelets. By concentrating and reintroducing platelets to targeted areas, we can stimulate natural regeneration and healing processes.",
    benefits: [
      "Stimulates collagen production",
      "Improves skin texture and tone",
      "Reduces fine lines and wrinkles",
      "Promotes hair growth",
      "Accelerates joint and tissue healing",
      "Minimally invasive procedure",
      "Uses patient's own biological material"
    ],
    procedure: "The PRP procedure involves drawing a small amount of the patient's blood, processing it in a centrifuge to concentrate the platelets, and then carefully injecting or applying the PRP to the target area. The entire process typically takes about 30-60 minutes and involves minimal discomfort.",
    image: "/images/prp-therapy.jpg"
  },
  {
    id: 2,
    name: "Medical Weight Loss Therapy",
    slug: "medical-weight-loss-therapy",
    description: "A supervised approach to weight loss involving medications, dietary plans, and lifestyle adjustments to achieve sustainable results.",
    icon: Weight,
    fullDescription: "Our Medical Weight Loss Therapy is a comprehensive, personalized approach to achieving and maintaining a healthy weight. We combine medical expertise, advanced treatments, and holistic lifestyle coaching to help patients reach their optimal health goals.",
    benefits: [
      "Medically supervised weight loss",
      "Personalized treatment plans",
      "Medication-assisted weight management",
      "Nutritional counseling",
      "Behavioral modification support",
      "Improved metabolic health",
      "Long-term sustainable results"
    ],
    procedure: "The weight loss therapy begins with a comprehensive medical assessment, including physical examination, metabolic testing, and detailed health history. We develop a customized plan that may include prescription medications, nutritional guidance, exercise recommendations, and ongoing support and monitoring.",
    image: "/images/weight-loss-therapy.jpg"
  },
  {
    id: 3,
    name: "Family Planning",
    slug: "family-planning",
    description: "Comprehensive reproductive health solutions, including counseling and contraceptive options, to support patients' reproductive goals.",
    icon: Heart,
    fullDescription: "Our Family Planning services provide comprehensive reproductive health support, offering personalized guidance and solutions for individuals and couples at every stage of their reproductive journey.",
    benefits: [
      "Comprehensive reproductive health counseling",
      "Contraceptive method consultations",
      "Fertility awareness education",
      "Preconception health planning",
      "Reproductive health screenings",
      "Personalized and confidential care",
      "Holistic approach to reproductive wellness"
    ],
    procedure: "The family planning process begins with a detailed consultation to understand individual or couple's reproductive goals. We provide comprehensive assessments, discuss various contraceptive options, offer fertility planning advice, and create personalized reproductive health strategies.",
    image: "/images/family-planning.jpg"
  }
];

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
