"use client";

import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { BackgroundGradient } from './BackgroundGradient';
import styles from './index.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <BackgroundGradient />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] py-12">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
