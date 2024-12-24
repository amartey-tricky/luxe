"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';

interface TreatmentCardProps {
  treatment: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  const Icon = treatment.icon;
  
  return (
    <motion.div
      variants={cardVariants}
      className={styles.treatmentCard}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link href={`/treatments/${treatment.id}`}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.cardTitle}>{treatment.title}</h3>
      <p className={styles.cardDescription}>{treatment.description}</p>
      </Link>
    </motion.div>
  );
}
