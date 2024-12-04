import { ContactForm } from "./contactform";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./index.module.css";

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
                    Kalpohini Estates, Tamale, Ghana
                  </p>
                </div>
              </article>
              <article className={styles.contactInfoItem}>
                <Phone className={styles.contactInfoIcon} />
                <div className={styles.contactInfoText}>
                  <h3 className={styles.contactInfoTitle}>Phone</h3>
                  <p className={styles.contactInfoDescription}>
                    0302 980 050
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
