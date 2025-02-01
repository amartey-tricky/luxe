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
    fullDescription: 'Get to the root of your acne with our comprehensive Acne Therapy. Our experienced practitioners will work with you to develop a tailored treatment plan, using the latest advancements in acne treatment to achieve optimal results and a smoother, more confident you.',
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
    procedure: 'The acne treatment procedure begins with an initial consultation to discuss concerns and develop a personalized treatment plan. A thorough skin analysis is conducted to assess skin type, acne severity, and underlying causes. Based on the analysis, a customized treatment plan is created, which may include topical treatments, blue light therapy, extractions, or oral medications. Treatment sessions are scheduled, and progress is monitored through regular follow-up appointments, with adjustments made to the treatment plan as needed to achieve optimal results.',
    image: '/images/iv-infusion-therapy.jpg'
  },
  {
    id: 2,
    name: 'Eczema Therapy',
    slug: 'eczema-therapy',
    description: 'Our Eczema Therapy provides relief from symptoms, promoting healthy skin and improving quality of life through personalized treatment plans.',
    icon: Zap,
    fullDescription: 'Our Eczema Therapy is a comprehensive treatment program designed to provide relief from the symptoms of eczema, promoting healthy skin and improving quality of life. Our experienced practitioners will work with you to develop a personalized treatment plan, addressing the underlying causes of this chronic condition and helping you manage symptoms and achieve long-term relief.',
    benefits: [
      'Relieves itching and discomfort',
      'Reduces inflammation and redness',
      'Improves skin hydration and moisture',
      'Prevents infection and scarring',
      'Enhances quality of life and overall well-being'
      'Accelerated tissue healing',
      'Improved skin texture',
      'Minimal side effects',
      'Quick recovery time'
    ],
    procedure: 'The eczema therapy procedure begins with an initial consultation to discuss symptoms and develop a personalized treatment plan. A thorough skin analysis is conducted to assess the severity and extent of eczema. Based on the analysis, a customized treatment plan is created, which may include topical treatments, phototherapy, or oral medications. Ongoing treatment sessions and follow-up appointments are scheduled to monitor progress, adjust the treatment plan as needed, and ensure optimal results in managing eczema symptoms and improving skin health.',
    image: '/images/laser-therapy.jpg'
  },
   {
    id: 3,
    name: 'Wart Removal Therapy',
    slug: 'wart-removal-therapy',
    description: 'Quick and painless wart removal treatments, tailored to your individual needs, for smooth and clear skin.',
    icon: Droplet,
    fullDescription: 'Our Wart Removal Therapy offers a comprehensive solution for eliminating unwanted warts, using a combination of advanced technologies and expert techniques. Our experienced practitioners will assess your individual needs and create a personalized treatment plan, ensuring safe and effective removal of the wart, while promoting healthy skin and minimizing scarring.',
    benefits: [
      'Effectively removes unwanted warts for smooth skin.',
      'Improves skin appearance and boosts confidence.',
      'Reduces discomfort, pain, and itching associated with warts.',
      'Minimizes risk of spreading HPV to other areas or individuals.',
      'Stimulates immune system to fight off HPV.',
      'Offers quick recovery with minimal downtime.'
    ],
    procedure: 'Our wart removal therapy is a quick and effective treatment that can be completed in a few simple steps. The process begins with a consultation with our experienced practitioner, who will assess the wart and discuss the best course of treatment. The area around the wart is then cleaned and prepared for treatment, which may involve cryotherapy, cantharidin, or surgical excision. After treatment, our practitioner will provide aftercare instructions to ensure the treated area heals properly. A follow-up appointment may be scheduled to check on the healing progress and remove any remaining wart tissue. Treatment sessions typically last 15-30 minutes, and while some mild discomfort or stinging may be experienced, the results are long-lasting and effective.',
    image: '/images/iv-infusion-therapy.jpg'
  },

    {
    id: 4,
    name: 'Psoriasis Therapy',
    slug: 'psoriasis-therapy',
    description: 'Say goodbye to red, scaly skin with our effective psoriasis treatments, combining cutting-edge technology with compassionate care.',
    icon: Zap,
    fullDescription: 'Our Psoriasis Therapy is a comprehensive treatment program designed to provide relief from the symptoms of psoriasis, promoting healthy skin and improving quality of life. Our experienced practitioners will work with you to develop a personalized treatment plan, addressing the underlying causes of this chronic condition.',
    benefits: [
      'Reduces inflammation and slows skin cell growth',
      'Improves skin clarity and reduces scaling',
      'Relieves itching, burning, and stinging sensations',
      'Enhances quality of life and overall well-being',
      'Quick recovery time'
    ],
    procedure: 'Our Psoriasis Therapy procedure begins with an initial consultation to discuss treatment options and develop a personalized plan. Our experienced practitioners will assess the severity and extent of your psoriasis, and recommend a course of treatment tailored to your needs. Treatment sessions may involve topical treatments, light therapy, systemic treatments, or biologics, and may be administered in our office or at home. Regular treatment sessions will be scheduled, and our practitioners will monitor your progress and adjust your treatment plan as needed. With ongoing treatment, you can expect to see improvements in skin clarity, reductions in scaling and inflammation, and relief from itching and discomfort.',
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
