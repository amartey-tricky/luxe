import { LucideIcon, Droplet, Zap } from "lucide-react";
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
    name: 'IV Infusion Therapy',
    slug: 'iv-infusion-therapy',
    description: 'Delivers essential vitamins, minerals, and fluids directly into the bloodstream, enhancing energy, hydration, and overall well-being.',
    icon: Droplet,
    fullDescription: 'IV Infusion Therapy is an advanced medical treatment that involves administering a customized blend of vitamins, minerals, and hydration directly into the bloodstream. By bypassing the digestive system, this therapy ensures maximum absorption of essential nutrients, providing immediate and targeted health benefits.',
    benefits: [
      'Rapid nutrient absorption',
      'Improved hydration',
      'Boosted immune system',
      'Enhanced energy levels',
      'Supports recovery and healing',
      'Customizable to individual health needs'
    ],
    procedure: 'The treatment begins with a comprehensive health consultation to determine the most appropriate IV cocktail. A trained medical professional will then carefully insert an IV line, typically in the arm. The nutrient-rich solution is slowly administered over 30-60 minutes while the patient sits comfortably. Patients can relax, read, or use their devices during the treatment.',
    image: '/images/iv-infusion-therapy.jpg'
  },
  {
    id: 2,
    name: 'Laser Therapy',
    slug: 'laser-therapy',
    description: 'Provides therapeutic benefits such as pain relief and tissue repair, often used in dermatology and physical rehabilitation.',
    icon: Zap,
    fullDescription: 'Laser Therapy is a cutting-edge medical treatment that uses focused light energy to stimulate healing, reduce inflammation, and promote tissue regeneration. This non-invasive approach can be applied to various medical and cosmetic conditions, offering precise and effective treatment with minimal discomfort.',
    benefits: [
      'Non-invasive treatment',
      'Accelerated tissue healing',
      'Reduced inflammation',
      'Pain management',
      'Improved skin texture',
      'Minimal side effects',
      'Quick recovery time'
    ],
    procedure: 'The treatment starts with a thorough consultation and assessment of the target area. A specialized laser device is then used to deliver precise light energy to the specific treatment site. The procedure is typically painless, with patients experiencing a mild warming sensation. Treatment duration varies depending on the condition being addressed, ranging from 10 to 45 minutes.',
    image: '/images/laser-therapy.jpg'
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
