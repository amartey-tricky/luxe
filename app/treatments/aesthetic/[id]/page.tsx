import styles from "./index.module.css";
import { treatmentData } from "./care-data";

import { LucideIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TreatmentProps {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
  benefits: string[];
}

type Props = {
  params: {
    id: string;
  }
}

export default function TreatmentPage(props: Props) {
  const treatment = treatmentData.find((t: TreatmentProps) => t.slug === props.params.id)
 //const treatment = treatmentData.find((t: TreatmentProps) => t.id === Number.parseInt(params.id))
 // const treatment = treatmentData.find((t: TreatmentProps) => t.slug === params.id)

  if (!treatment) {
    return <div>Treatment not found</div>;
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
