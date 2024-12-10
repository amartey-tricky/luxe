import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Droplet } from "lucide-react";

import styles from "./index.module.css";

const treatments = [
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
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
  }
]

type PageProps = {
  params: { slug: string }
}

export default function Page({ params }: PageProps) {
  const treatment = treatments.find(t => t.slug === params.slug)

  if (!treatment) {
    notFound()
  }

  const TreatmentIcon = treatment.icon

  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <Link href="/treatments/aesthetic" className={styles.back_button}>
          <ArrowLeft className={styles.back_button_icon} />
          Back to Aesthetic Treatments
        </Link>
        <div className={styles.treatment_grid}>
          <div>
            <h1 className={styles.treatment_title}>{treatment.name}</h1>
            <article className={styles.treatment_card}>
              <div className={styles.treatment_icon_container}>
                <TreatmentIcon className={styles.treatment_icon} />
              </div>
              <p className={styles.treatment_description}>{treatment.description}</p>
            </article>
            <p className={styles.treatment_fulldescription}>{treatment.fullDescription}</p>
            <h2 className={styles.treatment_benefits_title}>Benefits</h2>
            <ul className={styles.treatment_benefits_list}>
              {treatment.benefits.map((benefit, index) => (
                <li key={index} className={styles.treatment_benefit}>{benefit}</li>
              ))}
            </ul>
            <h2 className={styles.treatment_benefits_title}>Procedure</h2>
            <p className={styles.treatment_procedure_list}>{treatment.procedure}</p>
          </div>
          <div>
            <Image
              src={treatment.image}
              alt={treatment.name}
              width={600}
              height={400}
              className={styles.treatment_image}
            />
            <div className={styles.treatment_contact_container}>
              <h2 className={styles.treatment_contact_title}>Book Your Treatment</h2>
              <p className={styles.treatment_contact_text}>
                Ready to experience the benefits of {treatment.name}? Book your appointment today!
              </p>
              <Link href="/contact" className={styles.treatment_contact_button}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
