import type { Metadata } from "next";
import { ContactForm } from "./contactform";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./index.module.css";

const title = "Contact Us";
const description = "Contact Luxe Clinic for all enquiries, including appointments, consultations, and more.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    siteName: "Luxe Clinic",
    type: "website",
    images: [
      { url: "https://utfs.io/f/NLBok024UocEBeqrcFOSzPxtqk1XmV0sMTZ254ObNahgefcI" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      { url: "https://utfs.io/f/NLBok024UocEBeqrcFOSzPxtqk1XmV0sMTZ254ObNahgefcI" }
    ],
    creator: "@luxeclinic",
    site: "@luxeclinic"
  }
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Send us a message</h2>
            <ContactForm />
          </div>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <div className={styles.contactInfo}>
              <article className={styles.contactInfoItem_first}>
                <MapPin className={styles.contactInfoIcon_first} />
                <div className={styles.contactInfoText}>
                  <h3 className={styles.contactInfoTitle}>Address</h3>
                  <p className={styles.contactInfoDescription}>
                    Kalpohin Estates, Tamale, Ghana
                  </p>
                </div>
              </article>
              <article className={styles.contactInfoItem}>
                <Phone className={styles.contactInfoIcon} />
                <div className={styles.contactInfoText}>
                  <h3 className={styles.contactInfoTitle}>Phone</h3>
                  <p className={styles.contactInfoDescription}>
                    0303 980 050
                  </p>
                </div>
              </article>
              <article className={styles.contactInfoItem}>
                <Mail className={styles.contactInfoIcon} />
                <div className={styles.contactInfoText}>
                  <h3 className={styles.contactInfoTitle}>Email</h3>
                  <p className={styles.contactInfoDescription}>
                      luxeclinic@gmail.com
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
