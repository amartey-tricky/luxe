import { Sparkles, Syringe, UserPlus } from "lucide-react";

export const services = [
  {
    icon: Sparkles,
    title: "Aesthetic Treatments",
    description: "Adavanced cosmetic treatments to enhance your natural beauty.",
    treatments: [
      "• Facial Rejuvenation",
      "• Skin Tightening",
      "• Anti-Aging Treatments",
      "• Dermal Fillers"
    ],
    link: "/treatments",
    cta: "Book a Consultation"
  },
  {
    icon: Syringe,
    title: "Medical Treatments",
    description: "Professional medical services with state-of-the-art technology.",
    treatments: [
      "• Gynecological Care",
      "• Obstetric Services",
      "• Preventive Medicine",
      "• Health Screenings"
    ],
    link: "/treatments",
    cta: "Schedule a Consultation"
  },
  {
    icon: UserPlus,
    title: "Wellness Programs",
    description: "Personalized wellness programs designed to support your overall health and well-being.",
    treatments: [
      "• Nutritional Counseling",
      "• Lifestyle Medicine",
      "• Weight Management",
      "• Hormone Therapy"
    ],
    link: "/treatments",
    cta: "Learn More"
  }
]
