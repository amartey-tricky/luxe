import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { ServiceGrid } from "./servicegrid";
import styles from './index.module.css';

const title = 'Treatments || Luxe Clinic';
const description = 'Experience exceptional care with our comprehensive range of medical and aesthetic services, tailored to enhance your natural beauty and well-being.';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    type: 'website',
    images: [
      { url: "https://utfs.io/f/NLBok024UocEi8S6fbvETcldH19G7r5xp803kbJBMvWqhPgj" }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [
      { url: "https://utfs.io/f/NLBok024UocEi8S6fbvETcldH19G7r5xp803kbJBMvWqhPgj" }
    ],
    creator: '@luxeclinic',
    site: '@luxeclinic'
  },
}

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
