"use client";

import { motion } from 'framer-motion';
import { TreatmentCard } from './TreatmentCard';
import { treatments } from './treatment-data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function TreatmentGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {treatments.map((treatment, index) => (
        <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
      ))}
    </motion.div>
  );
}
