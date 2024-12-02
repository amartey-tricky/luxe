import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { ServiceGrid } from "./servicegrid";
import styles from './index.module.css';

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleWrap}>
          <h1 className={styles.title}>Treatments</h1>
          <p className={styles.titleDescription}>
            Experience exceptional care with our comprehensive range of medical and aesthetic services, 
              tailored to enhance your natural beauty and well-being.
          </p>
          </div>
        </div>
      </section>
      <section className={styles.servicesContainer}>
        <div className={styles.servicesWrapper}>
          <ServiceGrid />
        </div>
      </section>
      <section className={styles.ctaContainer}>
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaWrap}>
            <Calendar className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>Ready to Start Your Treatment?</h2>
            <p className={styles.ctaDescription}>
              Book a consultation with our expert team and discover how we can help you achieve your beauty and wellness goals.
            </p>
            <div className={styles.ctaButtonContainer}>
              <Link href="/contact" className={styles.ctaButton}>
                Book a Consultation
              </Link>
              <Link href="/services" className={styles.ctaButtonAlt}>
                Meet Our Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
