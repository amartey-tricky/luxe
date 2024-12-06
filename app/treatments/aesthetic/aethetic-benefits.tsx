"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function AestheticBenefits() {
  const benefits = [
    "Enhanced natural beauty and radiant skin",
    "Boosted self-confidence and self-esteem",
    "Personalized treatments tailored to your unique needs",
    "Non-invasive solutions for various skin concerns",
    "Long-lasting results with minimal downtime"
  ]

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Benefits of Our Aesthetic Treatments</h2>
        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-6"
            >
              <div className="rounded-full bg-purple-100 p-2 mr-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-lg text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
