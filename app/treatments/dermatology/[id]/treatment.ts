import { LucideIcon, Droplet, Zap, Slice, LifeBuoy } from "lucide-react";
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
    procedure: 'The acne treatment procedure begins with an initial consultation to discuss concerns and develop a personalized treatment plan. A thorough skin analysis is conducted to assess skin type and condition.',
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
    procedure: 'The eczema therapy procedure begins with an initial consultation to discuss symptoms and develop a personalized treatment plan. A thorough skin analysis is conducted to assess the severity and type of eczema.',
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
    procedure: 'Our wart removal therapy is a quick and effective treatment that can be completed in a few simple steps. The process begins with a consultation with our experienced practitioner, who will assess the warts and recommend the best treatment approach.',
    image: '/images/iv-infusion-therapy.jpg'
  },
  {
    id: 4,
    name: 'Psoriasis Therapy',
    slug: 'psoriasis-therapy',
    description: 'Say goodbye to red, scaly skin with our effective psoriasis treatments, combining cutting-edge technology with compassionate care.',
    icon: Zap,
    fullDescription: 'Our Psoriasis Therapy is a comprehensive treatment program designed to provide relief from the symptoms of psoriasis, promoting healthy skin and improving quality of life. Our experienced practitioners will work with you to develop a personalized treatment plan.',
    benefits: [
      'Reduces inflammation and slows skin cell growth',
      'Improves skin clarity and reduces scaling',
      'Relieves itching, burning, and stinging sensations',
      'Enhances quality of life and overall well-being',
      'Quick recovery time'
    ],
    procedure: 'Our Psoriasis Therapy procedure begins with an initial consultation to discuss treatment options and develop a personalized plan. Our experienced practitioners will assess the severity of the condition and recommend the best course of action.',
    image: '/images/laser-therapy.jpg'
  },
    {
    id: 5,
    name: 'DPN Therapy',
    slug: 'dpn-therapy',
    description: 'Dermatological Procedures for Nevus and Other Lesions (DPN) involves minor surgical procedures to remove unwanted skin growths, such as skin tags, moles, warts, and seborrheic keratoses, improving skin appearance and health.',
    icon: Slice,
    fullDescription: 'Dermatological Procedures for Nevus and Other Lesions (DPN) is a specialized treatment approach focused on safely and effectively removing unwanted skin growths, such as skin tags, moles, warts, and seborrheic keratoses. By removing these growths, individuals can achieve smoother, more even-toned skin and alleviate concerns about their appearance. DPN procedures are quick, painless, and performed in-office, with minimal downtime, involving local anesthesia and specialized instruments to carefully remove unwanted growths, reducing the risk of skin cancer, irritation, inflammation, or infection.',
    benefits: [
      "Improved appearance through removal of unwanted skin growths.",
      "Reduced risk of skin cancer by removing potentially cancerous lesions.", 
      "Relief from discomfort, irritation, or inflammation caused by skin growths.",
      "Prevention of infection, inflammation, or other complications.",
      "Boosted confidence and self-esteem through improved skin appearance."
    ],
    procedure: 'The DPN procedure typically begins with a thorough examination of the skin growths to determine the best course of treatment. A local anesthetic may be administered to ensure comfort during the procedure. The unwanted growths are then carefully removed using specialized instruments, such as scalpel, cryotherapy, or laser technology. The treated area is cleaned and dressed to promote healing. The entire procedure is usually quick, taking only a few minutes to an hour to complete.',
    image: 'https://res.cloudinary.com/da9sofcno/image/upload/f_auto,q_auto/v1/luxe-treatments/des1hmoulaj9swi9xupt'
  },
  {
    id: 6,
    name: 'General Dermatology Treatments',
    slug: 'general-dermatology-treatments',
    description: 'General dermatology treatments address various skin concerns, including acne, psoriasis, eczema, and skin allergies. Treatments may include topical creams, oral medications, and procedures like chemical peels and laser therapy.',
    icon: LifeBuoy,
    fullDescription: 'General dermatology treatments encompass a wide range of therapies and procedures aimed at addressing various skin concerns not limited to specific treatments mentioned earlier. This comprehensive approach includes treatments for acne, psoriasis, eczema, skin allergies, and other conditions, utilizing topical creams, oral medications, and procedures like chemical peels, microdermabrasion, and laser therapy. General dermatology treatments may also involve skin checks, biopsies, and guidance on skincare routines, sun protection, and prevention of skin diseases.',
    benefits: [
      'Improved skin health and appearance.',
      'Effective management of skin conditions such as acne, psoriasis, and ecoriasis.',
      'Prevention of skin diseases and skin cancer through early detection and treatment.',
      'Personalized guidance on skincare routines and sun protection.',
      'Enhanced overall well-being and self-confidence through healthy and radiant skin.'
    
    ],
    procedure: 'A general dermatology procedure typically begins with a thorough examination of the skin to diagnose the condition and determine the best course of treatment. Based on the diagnosis, the dermatologist may prescribe topical or oral medications, recommend lifestyle changes, or perform procedures such as biopsies, chemical peels, or laser therapy. The dermatologist will provide personalized guidance on skincare routines, sun protection, and prevention of skin diseases to help manage the condition and achieve optimal skin health.',
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
