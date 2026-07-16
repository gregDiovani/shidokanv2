'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="group bg-[#111111] border border-white/5 p-6 hover:border-[#DC2626]/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-10 h-10 bg-[#DC2626]/10 flex items-center justify-center mb-4 group-hover:bg-[#DC2626]/20 transition-colors">
        <Icon size={20} className="text-[#DC2626]" />
      </div>
      <h3 className="font-display font-semibold text-[#F2F2F2] text-lg tracking-wide uppercase mb-2">
        {title}
      </h3>
      <p className="text-[#888888] text-sm font-sans leading-relaxed">{description}</p>
    </motion.div>
  )
}
