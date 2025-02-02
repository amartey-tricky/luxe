"use client";

import Link from "next/link";
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
  We are dedicated to maintaining exceptional standards in all our services and we are proud of every member of staff for their commitment to professional standards and conduct.
      </p>
      <div className={styles.buttonGroup}>
        <Link href="https://forms.gle/C5idmfezqW6vsp2FA">
          <Button size="lg" className={styles.primaryButton}>
            <Calendar className="mr-2 h-5 w-5" />
            Book Consultation
          </Button>
        </Link>
        <Button 
          size="lg" 
          variant="ghost" 
          className={styles.secondaryButton}
          as="a"
          href="/treatments"
        >
          Our Services
        </Button>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>1+</span>
          <span className={styles.statLabel}>Years Experience</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>100+</span>
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
