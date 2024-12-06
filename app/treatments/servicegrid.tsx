"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./servicecard";
import { services } from "./servicedata";
import styles from "./index.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export function ServiceGrid() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.serviceGrid}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          treatments={service.treatments}
          link={service.link}
          cta="Learn More"
          />
      ))}
    </motion.section>
  )
}
