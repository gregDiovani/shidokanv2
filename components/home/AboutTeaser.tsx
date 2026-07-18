'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden border border-white/10"
          >
            <Image
              src="/images/black-belt.webp"
              alt="Black belt being tied"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/40 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
                Our Legacy
              </span>
            </div>

            <h2 className="font-display font-bold text-[#F2F2F2] text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-6 text-balance">
              A Lineage of Discipline.
              <br />
              <span className="text-[#DC2626]">A Standard</span> of Excellence.
            </h2>

            <p className="text-[#888888] font-sans text-base leading-relaxed mb-4">
              For over four decades, Shidokan has been shaping warriors, cultivating champions, and
              building character in students of all ages. Our lineage traces directly back to the
              founders of full-contact karate.
            </p>
            <p className="text-[#888888] font-sans text-base leading-relaxed mb-8">
              Every instructor on our floor has earned their rank under pressure. Every program is
              built on a foundation of proven techniques and time-tested philosophy.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-transparent border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 group"
            >
              Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
