'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import ProgramCard from '@/components/ProgramCard'

const programs = [
  {
    slug: 'cubs',
    title: 'Cubs',
    ageRange: 'Ages 4–5',
    description:
      'An introductory class that builds coordination, listening skills, and confidence through fun, structured movement. The first step on a lifelong journey.',
  },
  {
    slug: 'pre-lion',
    title: 'Pre-Lion',
    ageRange: 'Ages 5–8',
    description:
      'Students develop foundational karate techniques, basic self-defense awareness, and the discipline to follow instruction in a dojo setting.',
  },
  {
    slug: 'lion',
    title: 'Lion',
    ageRange: 'Ages 8–18',
    description:
      'Our full youth curriculum. Students train in karate, Muay Thai, and grappling as they progress through the belt system toward black belt.',
  },
  {
    slug: 'adult',
    title: 'Adult',
    ageRange: 'Ages 18+',
    description:
      'A rigorous, full-contact curriculum for adults seeking real martial arts training. All fitness levels welcome — warrior mindset required.',
  },
  {
    slug: 'kata',
    title: 'Kata',
    ageRange: 'All Ages',
    description:
      'Deep study of classical kata patterns. Kata is the living textbook of karate — every movement contains lessons in application and principle.',
  },
  {
    slug: 'demo-team',
    title: 'Demo Team',
    ageRange: 'By Invitation',
    description:
      'An elite group selected for public performances and competitions. Demo Team members represent Shidokan at its highest competitive level.',
  },
]

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Training Programs"
            title="Training for Every Level"
            subtitle="Whether you are four years old or forty, there is a place for you on our mat. Every program is designed to develop real skills and real character."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {programs.map((program, i) => (
            <ProgramCard
              key={program.slug}
              {...program}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="/programs"
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase px-10 py-4 transition-colors duration-200"
          >
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
