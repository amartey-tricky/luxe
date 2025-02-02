import { LucideIcon, Droplet, Weight, Heart, ShieldPlus, Pill, Ribbon } from "lucide-react";
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
    image: "https://drive.google.com/file/d/1Hb4R7MAY1VshokevP3MRiDQ2vZQwxgHB/view?usp=sharing"
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
  },
   {
    id: 4,
    name: "IV Infusions",
    slug: "iv-infusions",
    description: "IV Infusion Therapy delivers essential nutrients, vitamins, and medications directly into the bloodstream, promoting optimal hydration, rejuvenation, and wellness.",
    icon: ShieldPlus,
    fullDescription: "Indulge in the ultimate rejuvenation experience with our IV Infusion Therapy, a luxurious treatment that delivers essential nutrients, vitamins, and minerals directly into the bloodstream. This bespoke therapy addresses specific health and wellness concerns, including fatigue, dehydration, migraines, skin health, and immune system support. Our expert medical professionals create personalized IV cocktails using high-quality ingredients and advanced technology, allowing you to relax and rejuvenate in our serene environment, reclaiming vitality, rejuvenating the body, and revitalizing the mind.",
    benefits: [
      "Relieves fatigue & energy depletion",
      "Replenishes hydration & electrolytes", 
      "Alleviates migraines & headaches",
      "Promotes skin health & anti-aging",
      "Boosts immune system",
      "Aids post-workout recovery",
      "Supports detoxification & antioxidant replenishment",
      "Rapidly relieves hangover symptoms, restoring vitality and hydration"
    ],
    procedure: "Our IV Infusion Therapy procedure begins with a thorough medical history review and consent form signing, followed by vital sign measurement to ensure stability. A suitable vein is selected, and the skin is cleaned and disinfected before IV insertion. Our expert medical professionals then administer a customized IV cocktail, featuring a tailored blend of vitamins, minerals, antioxidants, and medications, which is continuously monitored during treatment. Upon completion, the IV line is removed, and post-treatment monitoring ensures a safe and effective experience.",
    image: "/iv-infusions.jpg"
  },
  {
    id: 5,
    name: "STI Therapy",
    slug: "sti-therapy",
    description: "STI Therapy provides effective treatment and management of sexually transmitted infections, promoting healthy sexual well-being and preventing long-term complications.",
    icon: Ribbon,
    fullDescription: "Our comprehensive STI treatment program provides confidential and compassionate care, including diagnostic testing, antibiotic and antiviral therapies, and counseling, for a range of STIs such as chlamydia, gonorrhea, herpes, HPV, and hepatitis B and C. Our expert medical professionals ensure a non-judgmental and supportive experience, promoting physical and emotional well-being, and providing education on risk reduction and prevention strategies to support overall health and wellness.",
    benefits: [

      "Confidential and compassionate care",
      "Accurate diagnostic testing",
      "Effective antibiotic and antiviral therapies",
      "Personalized counseling and education",
      "Treatment for a range of STIs",
      "Promotion of physical and emotional well-being"
    ],
    procedure: "Our comprehensive STI treatment program follows a thorough and confidential procedure, ensuring accurate diagnosis and effective treatment. The process begins with diagnostic testing, including blood tests, urine tests, and swab tests, to determine the presence and type of STI. Our expert medical professionals will discuss treatment options, which may include antibiotic or antiviral therapies, and provide personalized counseling to address emotional or psychological concerns. Our counselors will also provide education on risk reduction and prevention strategies, and support to promote overall health and wellness. Throughout the process, our team provides a non-judgmental and supportive experience.",
    image: "/images/sti-therapy.jpg"
  },
  {
    id: 6,
    name: "Gynecological Infections Therapy",
    slug: "gynecological-infections-therapy",
    description: "Gyne Infection Therapy provides targeted treatment and management of gynecological infections, relieving symptoms, promoting healing, and restoring vaginal health.",
    icon: Pill,
    fullDescription: "Our comprehensive gynecological infections treatment program provides confidential, effective, and compassionate care for women diagnosed with or suspected of having a gynecological infection. Our expert medical professionals conduct thorough medical histories, physical examinations, and diagnostic testing to determine the presence and type of infection. We treat a range of gynecological infections, including bacterial vaginosis, yeast infections, and chlamydia, using antibiotic, antifungal, and antiviral therapies. Our program also includes personalized counseling and education on risk reduction and prevention strategies.",
    benefits: [
      "Confidential and compassionate care",
      "Accurate diagnosis and effective treatment",
      "Relief from symptoms and improvement in overall health",
      "Personalized counseling and education",
      "Reduced risk of complications and long-term health problems",
      "Improved quality of life and well-being",
      "Comprehensive health counseling",
    ],
    procedure: "Our comprehensive gynecological infections treatment program follows a thorough and confidential procedure. The process begins with a thorough medical history and physical examination, including a pelvic examination, to identify symptoms and determine the need for diagnostic testing. Our expert medical professionals will discuss treatment options with you, which may include antibiotic, antifungal, or antiviral therapies, and provide personalized counseling.",
    image: "/images/gynecological-infections-therapy.jpg"
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
