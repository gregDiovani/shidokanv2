'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const virtues = [
  {
    kanji: '律',
    name: 'Discipline',
    description: 'The foundation of all growth. Every rep, every class, every belt is earned through consistent, deliberate effort.',
  },
  {
    kanji: '礼',
    name: 'Respect',
    description: 'Bow to your opponent. Honor your sensei. Respect is not weakness — it is the mark of a true martial artist.',
  },
  {
    kanji: '勇',
    name: 'Courage',
    description: 'Step onto the mat when you are afraid. Compete when the outcome is uncertain. Courage is action in the face of doubt.',
  },
  {
    kanji: '誠',
    name: 'Integrity',
    description: 'Train honestly. Test your limits honestly. A rank means nothing if it was not genuinely earned.',
  },
  {
    kanji: '制',
    name: 'Self-Control',
    description: 'Power without control is dangerous. We train the body and the mind in equal measure.',
  },
  {
    kanji: '継',
    name: 'Perseverance',
    description: 'Fall seven times, rise eight. The Shidokan spirit does not yield. It adapts, recovers, and pushes forward.',
  },
]

export default function BushidoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bushido-warrior.png"
          alt="Bushido warrior"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Philosophy"
            title="Guided by Bushido"
            subtitle="The warrior's code is not a relic of history — it is the standard by which every Shidokan practitioner is measured."
          />
        </div>

        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[#DC2626] tracking-[0.2em] uppercase text-sm font-semibold mb-12"
          >
            The Six Virtues We Live By
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {virtues.map((virtue, i) => (
            <motion.div
              key={virtue.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="group bg-[#111111]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-[#DC2626]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-display text-4xl text-[#DC2626]/40 leading-none group-hover:text-[#DC2626]/60 transition-colors">
                  {virtue.kanji}
                </span>
                <h3 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide mt-1">
                  {virtue.name}
                </h3>
              </div>
              <p className="text-[#888888] text-sm font-sans leading-relaxed">{virtue.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
