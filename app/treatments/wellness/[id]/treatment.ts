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
    name: 'Acne Therapy',
    slug: 'acne-therapy',
    description: 'Clear skin, confident you. Customized acne therapy for lasting results.',
    icon: Droplet,
    fullDescription: 'Get to the root of your acne with our comprehensive Acne Therapy. Our experienced practitioners will work with you to develop a tailored treatment plan, using the latest advancements.';
    benefits: [
      'Effective acne treatment improves overall appearance, boosting self-confidence and self-esteem.',
      'Acne treatment helps to reduce acne breakouts and prevent future occurrences.',
      'Effective acne treatment boosts self-esteem and overall mental well-being.',
      'Acne treatment minimizes redness and swelling associated with acne.',
      'Timely acne treatment prevents permanent scarring and hyperpigmentation.',
      'Acne treatment improves skin tone and texture, reducing pores and fine lines.',
      'Acne treatment prevents bacterial and fungal infections associated with acne.',
      'Acne treatment reduces stress, anxiety, and depression related to acne.'
    ],
    procedure: 'The acne treatment procedure begins with an initial consultation to discuss concerns and develop a personalized treatment plan. A thorough skin analysis is conducted to assess skin type and condition.';
    image: '/images/iv-infusion-therapy.jpg'
  },
  {
    id: 2,
    name: 'Eczema Therapy',
    slug: 'eczema-therapy',
    description: 'Our Eczema Therapy provides relief from symptoms, promoting healthy skin and improving quality of life through personalized treatment plans.',
    icon: Zap,
    fullDescription: 'Our Eczema Therapy is a comprehensive treatment program designed to provide relief from the symptoms of eczema, promoting healthy skin and improving quality of life. Our experienced practitioners will work with you to develop a personalized treatment plan.';
    benefits: [
      'Relieves itching and discomfort',
      'Reduces inflammation and redness',
      'Improves skin hydration and moisture',
      'Prevents infection and scarring',
      'Enhances quality of life and overall well-being',
      'Accelerated tissue healing',
      'Improved skin texture',
      'Minimal side effects',
      'Quick recovery time'
    ],
    procedure: 'The eczema therapy procedure begins with an initial consultation to discuss symptoms and develop a personalized treatment plan. A thorough skin analysis is conducted to assess the severity and type of eczema.'
    image: '/images/laser-therapy.jpg'
  },
  {
    id: 3,
    name: 'Wart Removal Therapy',
    slug: 'wart-removal-therapy',
    description: 'Quick and painless wart removal treatments, tailored to your individual needs, for smooth and clear skin.',
    icon: Droplet,
    fullDescription: 'Our Wart Removal Therapy offers a comprehensive solution for eliminating unwanted warts, using a combination of advanced technologies and expert techniques. Our experienced practitioners will work with you to develop a personalized treatment plan.',
    benefits: [
      'Effectively removes unwanted warts for smooth skin.',
      'Improves skin appearance and boosts confidence.',
      'Reduces discomfort, pain, and itching associated with warts.',
      'Minimizes risk of spreading HPV to other areas or individuals.',
      'Stimulates immune system to fight off HPV.',
      'Offers quick recovery with minimal downtime.'
    ],
    procedure: 'Our wart removal therapy is a quick and effective treatment that can be completed in a few simple steps. The process begins with a consultation with our experienced practitioner, who will assess the warts and recommend the best treatment approach.'
    image: '/images/iv-infusion-therapy.jpg'
  },
  {
    id: 4,
    name: 'Psoriasis Therapy',
    slug: 'psoriasis-therapy',
    description: 'Say goodbye to red, scaly skin with our effective psoriasis treatments, combining cutting-edge technology with compassionate care.',
    icon: Zap,
    fullDescription: 'Our Psoriasis Therapy is a comprehensive treatment program designed to provide relief from the symptoms of psoriasis, promoting healthy skin and improving quality of life. Our experienced practitioners will work with you to develop a personalized treatment plan.'
    benefits: [
      'Reduces inflammation and slows skin cell growth',
      'Improves skin clarity and reduces scaling',
      'Relieves itching, burning, and stinging sensations',
      'Enhances quality of life and overall well-being',
      'Quick recovery time'
    ],
    procedure: 'Our Psoriasis Therapy procedure begins with an initial consultation to discuss treatment options and develop a personalized plan. Our experienced practitioners will assess the severity of the condition and recommend the best course of action.'
    image: '/images/laser-therapy.jpg'
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
  }));
}
