"use client";

import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function SectionTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className={styles.title}>
        Our Specialized <span className={styles.gradientText}>Treatments</span>
      </h2>
      <p className={styles.subtitle}>
        Comprehensive care for women's health and aesthetic needs
      </p>
    </motion.div>
  );
}
