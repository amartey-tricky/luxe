'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Droplet, Weight, Heart } from 'lucide-react'


const treatments = [
  {
    name: 'PRP Therapy',
    description: 'Utilizes the patient\'s own plasma to stimulate collagen production, improve skin texture, and reduce fine lines. It can also be used for hair restoration and joint healing.',
    icon: Droplet
  },
  {
    name: 'Medical Weight Loss Therapy',
    description: 'A supervised approach to weight loss involving medications, dietary plans, and lifestyle adjustments to achieve sustainable results.',
    icon: Weight
  },
  {
    name: 'Family Planning',
    description: 'Comprehensive reproductive health solutions, including counseling and contraceptive options, to support patients\' reproductive goals.',
    icon: Heart
  }
]

export default function MedicalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <TreatmentsSection />
      <BenefitsSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Advanced <span className="text-blue-600">Medical Treatments</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our range of medical treatments designed to address health conditions impacting appearance and well-being, blending cutting-edge science with personalized care.
          </p>
          <motion.a
            href="#treatments"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-10"
          >
            Explore Treatments
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-600" />
      </motion.div>
    </section>
  )
}

function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Medical Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} treatment={treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TreatmentCard({ treatment, index }: { treatment: typeof treatments[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-blue-100 p-4"
          >
            <treatment.icon className="w-8 h-8 text-blue-600" />
          </motion.div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{treatment.name}</h3>
        <p className="text-gray-600 text-center">{treatment.description}</p>
      </div>
    </motion.div>
  )
}

function BenefitsSection() {
  const benefits = [
    "Personalized care tailored to your specific health needs",
    "Cutting-edge treatments leveraging the latest medical advancements",
    "Holistic approach addressing both appearance and overall well-being",
    "Expert medical professionals guiding your treatment journey",
    "Sustainable results that improve quality of life"
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Benefits of Our Medical Treatments</h2>
        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-6"
            >
              <div className="rounded-full bg-blue-100 p-2 mr-4">
                <ChevronDown className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-lg text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
