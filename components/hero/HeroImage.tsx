"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './index.module.css';

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-1 relative"
    >
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
          alt="Modern Clinic Interior"
          width={600}
          height={700}
          className={styles.heroImage}
          priority
        />
        <div className={styles.imageBadge}>
          <span className="font-semibold">Trusted by</span>
          <span className="text-2xl font-bold">10,000+</span>
          <span>Patients</span>
        </div>
      </div>
    </motion.div>
  );
}
