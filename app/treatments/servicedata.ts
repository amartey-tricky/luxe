import { Sparkles, Syringe, UserPlus } from "lucide-react";

export const services = [
   {
    icon: UserPlus,
    title: "Dermatology",
    description: "These treatments aim to improve overall health, hydration, and vitality, contributing to a balanced lifestyle.",
    treatments: [
      "• ",
      "• Laser Therapy",
    ],
    link: "/treatments/wellness",
    cta: "Learn More"
  }
  {
    icon: Sparkles,
    title: "Aesthetic Treatments",
    description: "These treatments focus on enhancing physical appearance by improving skin texture, tone, and overall beauty.",
    treatments: [
      "• Chemical Peels",
      "• Facials",
    ],
    link: "/treatments/aesthetic",
    cta: "Book a Consultation"
  },
  {
    icon: Syringe,
    title: "Medical Treatments",
    description: "These therapies address specific health or medical conditions, including skin regeneration and hormone management.",
    treatments: [
      "• PRP Therapy (Platelet-Rich Plasma Therapy)",
      "• Medical Weight Loss Therapy",
    ],
    link: "/treatments/medical",
    cta: "Schedule a Consultation"
  },
 
]
