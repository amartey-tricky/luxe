import styles from "./index.module.css";
import type { Metadata } from "next";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CldImage from "@/components/cldimage";
import { getTreatmentBySlug, getAllTreatmentSlugs } from "./treatment";

export async function generateStaticParams() {
  return getAllTreatmentSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const res = await params;
  const treatment = getTreatmentBySlug(res.id);

  return {
    title: `${treatment.name} | Aesthetic Treatment`,
    description: treatment.description,
    openGraph: {
      title: `${treatment.name} | Aesthetic Treatment`,
      description: treatment.description,
      url: `https://luxeclinicgh.com/treatments/aesthetic/${treatment.slug}`,
      type: "website",
      images: [
        { url: treatment.image }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${treatment.name} | Aesthetic Treatment`,
      description: treatment.description,
      images: [
        { url: treatment.image}
      ]
    }
  }
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const props = await params
  const treatment = getTreatmentBySlug(props.id);
  const TreatmentIcon = treatment.icon;
  
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <Link href="/treatments/medical" className={styles.back_button}>
          <ArrowLeft className={styles.back_button_icon} />
          Back to MedicalTreatments
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
            <CldImage
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
              <Link href="https://cal.com/luxe-clinic-gh/luxe-appointment" className={styles.treatment_contact_button}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) 
}
