"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import styles from "./index.module.css";
import Link from "next/link";

interface AetheticCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AestheticCard({ icon, title, description }: AetheticCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = icon;

  return (
    <Link 
      href={`/treatments/aesthetic/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className={styles.cardLink}
    >
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${styles.aetheticCard} ${isHovered ? styles.cardHover : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className={styles.iconTransform}
            >
              <Icon className={styles.icon} />
            </motion.div>
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </motion.article>
    </Link>
  )
}
