'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ProgramCardProps {
  slug: string
  title: string
  ageRange: string
  description: string
  index?: number
}

export default function ProgramCard({ slug, title, ageRange, description, index = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="group bg-[#111111] border border-white/5 p-6 flex flex-col hover:border-[#DC2626]/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="mb-4">
        <span className="font-display text-[#DC2626] text-xs tracking-[0.2em] uppercase font-semibold">
          {ageRange}
        </span>
      </div>
      <h3 className="font-display font-bold text-[#F2F2F2] text-xl tracking-wide uppercase mb-3">
        {title}
      </h3>
      <p className="text-[#888888] text-sm font-sans leading-relaxed flex-1 mb-6">{description}</p>
      <Link
        href={`/programs#${slug}`}
        className="inline-flex items-center gap-2 text-[#DC2626] font-display text-sm tracking-widest uppercase font-semibold hover:gap-3 transition-all duration-200"
      >
        Learn More
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  )
}
