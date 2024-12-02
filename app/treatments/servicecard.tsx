"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import styles from "./index.module.css";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  treatments: string[];
  link: string;
  cta: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  hover: {
    y: -5,
    transition: { duration: 0.5 }
  }
}

export function ServiceCard({ icon, title, description, treatments, link, cta }: ServiceCardProps) {
  const Icon = icon;

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={styles.serviceCard}
    >
      <div className={styles.serviceCardIconContainer}>
        <Icon className={styles.serviceCardIcon} />
      </div>
      <h2 className={styles.serviceCardTitle}>{title}</h2>
      <p className={styles.serviceCardDescription}>{description}</p>
      <div className={styles.serviceCardTreatmentsContainer}>
        {treatments.map((treatment) => (
          <p key={treatment}>
            {treatment}
          </p>
        ))}
      </div>
      <Link href={link} className={styles.serviceCardLink}>
        {cta}
      </Link>
    </motion.article>
  )
}
