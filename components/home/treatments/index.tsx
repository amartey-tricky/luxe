"use client";

import { motion } from 'framer-motion';
import { TreatmentGrid } from './TreatmentGrid';
import { SectionTitle } from './SectionTitle';
import styles from './styles.module.css';

export function Treatments() {
  return (
    <section className={styles.treatmentsSection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle />
        <TreatmentGrid />
      </div>
    </section>
  );
}
