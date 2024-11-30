"use client";

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './index.module.css';

export function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0"
    >
      <h1 className={styles.heroTitle}>
        Your Journey to
        <span className={styles.gradientText}> Beauty & Wellness</span>
      </h1>
      <p className={styles.heroDescription}>
        Experience exceptional care in obstetrics, gynecology, and cosmetic surgery. 
        Our expert team is dedicated to enhancing your natural beauty and ensuring 
        your well-being at every stage of life.
      </p>
      <div className={styles.buttonGroup}>
        <Button size="lg" className={styles.primaryButton}>
          <Calendar className="mr-2 h-5 w-5" />
          Book Consultation
        </Button>
        <Button 
          size="lg" 
          variant="ghost" 
          className={styles.secondaryButton}
        >
          Our Services
        </Button>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>15+</span>
          <span className={styles.statLabel}>Years Experience</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>10k+</span>
          <span className={styles.statLabel}>Happy Patients</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>98%</span>
          <span className={styles.statLabel}>Success Rate</span>
        </div>
      </div>
    </motion.div>
  );
}
