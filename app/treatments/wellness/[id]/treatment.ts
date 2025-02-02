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
    fullDescription: 'Get to the root of your acne with our comprehensive Acne Therapy. Our experienced practitioners will work with you to develop a tailored treatment plan, using the latest advancements.',
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
    procedure: 'The acne treatment procedure begins with an initial consultation to discuss concerns and develop a personalized treatment plan. A thorough skin analysis is conducted to assess skin type and condition.'
    image: '/images/iv-infusion-therapy.jpg'
  },
  {
    id: 2,
    name: 'Eczema Therapy',
    slug: 'eczema-therapy',
    description: 'Our Eczema Therapy provides relief from symptoms, promoting healthy skin and improving quality of life through personalized treatment plans.',
    icon: Zap,
    fullDescription: 'Our Eczema Therapy is a comprehensive treatment program designed to provide relief from the symptoms of eczema, promoting healthy skin and improving quality of life. Our experienced practitioners will work with you to develop a personalized treatment plan.',
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
