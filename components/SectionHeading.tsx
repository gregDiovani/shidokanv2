'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-display font-bold leading-none tracking-tight ${
          light ? 'text-[#0A0A0A]' : 'text-[#F2F2F2]'
        } text-4xl md:text-5xl lg:text-6xl uppercase text-balance`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed font-sans max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-[#444444]' : 'text-[#888888]'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
