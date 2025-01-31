"use client";

import { motion } from 'framer-motion';
import { Star, CircleUserRound } from 'lucide-react';
import styles from './styles.module.css';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Med",
    role: "Aesthetic Therapy Client",
    icon: CircleUserRound,
    content: "The care and attention I received were exceptional. The results exceeded my expectations, and the staff made me feel comfortable throughout the entire process.",
    rating: 5
  },
  {
    id: 2,
    name: "Jemimah",
    role: "Laser Therapy Client",
    icon: CircleUserRound,
    content: "I'm absolutely thrilled with the exceptional service I received at Luxe Clinic Ghana! The staff were warm, welcoming, and extremely professional. After detailed consultations with them, they provided tailored solutions that exceeded my expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Mathew",
    role: "Facials & PRP Therapy Client",
    icon: CircleUserRound,
    content: "I highly recommend LUXE CLINIC to anyone looking for professional, personalized, and effective skincare solutions. They truly care about their clients and go above and beyond to deliver outstanding results.",
    rating: 5
  }
];

export function Testimonials() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const slide = (direction) => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;

    if (direction === 'left') {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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

        <div className={styles.sliderContainer} ref={containerRef}>
          <button onClick={() => slide('left')}>Left</button>
          <div className={styles.slider} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                  <testimonial.icon className={styles.avatar} />
                  <div>
                    <h4 className={styles.name}>{testimonial.name}</h4>
                    <p className={styles.role}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button onClick={() => slide('right')}>Right</button>
        </div>
      </div>
    </section>
  );
}
