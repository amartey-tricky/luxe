"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./index.module.css";

export function AestheticHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.heroWrapper}
        >
          <h1 className={styles.heroTitle}>Enhance Your Natural <span className={styles.heroTitleHighlight}>Beauty</span></h1>
          <p className={styles.heroDescription}>
            Discover our range of aesthetic treatments designed to help you achieve radiant, youthful skin and boost your confidence.
          </p>
          <motion.a
            href="#aesthetic"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.heroLink}
          >
            Explore Aesthetic Treatments
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0], }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={styles.heroArrow}
      >
        <ChevronDown className={styles.heroArrowIcon} />
      </motion.div>
    </section>
  )
}
