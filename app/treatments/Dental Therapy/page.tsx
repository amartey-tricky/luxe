'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Droplet, Zap, Leaf, Slice, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

const treatments = [
  {
    name: 'Teeth Whitening',
    description: 'Unlock a brighter, more radiant smile with our Luxe Teeth Whitening treatment. Our expert dentists use advanced technology to safely and effectively whiten your teeth, leaving you with a brilliant smile.',
    icon: Droplet
  },
  {
    name: 'Teeth Scaling & Planing',
    description: 'Experience the ultimate in oral hygiene with our Luxe Dental Cleaning. Our expert hygienists use state-of-the-art technology to gently remove plaque, tartar, and stains, leaving your mouth feeling fresh and clean.',
    icon: Zap
  },
  {
    name: 'General Dental Services',
    description: 'We will be updating our dental services as and when more become available.',
    icon: Leaf
  }
];

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <TreatmentsSection />
      <BenefitsSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Revitalize Your <span className="text-green-600">Body and Mind</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our range of dental treatments designed to support overall oral health and vitality, ensuring optimal oral health and a beautiful smile.
          </p>
          <motion.a
            href="#treatments"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-lg md:px-10"
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
        <ChevronDown className="w-8 h-8 text-green-600" />
      </motion.div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Dental Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} treatment={treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({ treatment, index }: { treatment: typeof treatments[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out
        ${isHovered ? 'bg-gradient-to-br from-green-100 to-white' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/treatments/dental/${treatment.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-full bg-green-100 p-4"
            >
              <treatment.icon className="w-8 h-8 text-green-600" />
            </motion.div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{treatment.name}</h3>
          <p className="text-gray-600 text-center">{treatment.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

function BenefitsSection() {
  const benefits = [
    "Enhance your oral well-being with our expert dental therapies.",
    "Unlock a brighter smile and boost your self-confidence with our dental therapies.",
    "Transform your smile with our cutting-edge dental therapies.",
    "Protect your overall health by preventing oral health issues with our dental therapies.",
    "Say goodbye to oral pain and discomfort with our expert dental therapies."
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Benefits of Our Dental Treatments</h2>
        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-6"
            >
              <div className="rounded-full bg-green-100 p-2 mr-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-lg text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
