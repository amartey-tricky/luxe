"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './styles.module.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Cosmetic Surgery Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    content: "The care and attention I received were exceptional. The results exceeded my expectations, and the staff made me feel comfortable throughout the entire process.",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "Prenatal Care Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    content: "As a first-time mother, I couldn't have asked for better prenatal care. The doctors were knowledgeable, caring, and always available to answer my questions.",
    rating: 5
  },
  {
    id: 3,
    name: "Michelle Chen",
    role: "Gynecology Patient",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    content: "I've been a patient for over 5 years, and the level of care has always been outstanding. The staff is professional, friendly, and truly cares about their patients.",
    rating: 5
  }
];

export function Testimonials() {
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
            What Our <span className={styles.gradientText}>Patients Say</span>
          </h2>
          <p className={styles.subtitle}>
            Real experiences from our valued patients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={styles.testimonialCard}
            >
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={styles.star} fill="currentColor" />
                ))}
              </div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
