"use client";

import { motion } from 'framer-motion';
import { Award, Clock, HeartPulse, Users } from 'lucide-react';
import styles from './styles.module.css';

const features = [
  {
    icon: Award,
    title: "Excellence in Care",
    description: "Excellence in Care, Your Beauty, Our Priority. Delivering personalized, compassionate, and exceptional aesthetic care."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Where expertise meets artistry. Our team is dedicated to helping you achieve your aesthetic goals."
  },
  {
    icon: Clock,
    title: "Personalized Treatment Plans",
    description: "Experience care that's as unique as you are. Personalized treatment plans for optimal health."
  },
  {
    icon: HeartPulse,
    title: "Personalized Care",
    description: "Tailored treatment plans that address your unique needs and goals."
  }
];

export function ChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={styles.title}>
            Why Choose <span className={styles.gradientText}>Our Clinic</span>
          </h2>
          <p className={styles.subtitle}>
            Experience the perfect blend of expertise, technology, and compassionate care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={styles.featureCard}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
