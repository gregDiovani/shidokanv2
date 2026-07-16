'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface NewsCardProps {
  id: string
  category: string
  title: string
  excerpt: string
  date: string
  image: string
  index?: number
}

export default function NewsCard({ id, category, title, excerpt, date, image, index = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-[#DC2626]/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <span className="absolute top-4 left-4 bg-[#DC2626] text-white font-display text-xs tracking-widest uppercase px-3 py-1 font-semibold">
          {category}
        </span>
      </div>
      <div className="p-6">
        <time className="text-[#555555] text-xs font-sans tracking-wider uppercase">{date}</time>
        <h3 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide mt-2 mb-3 leading-tight text-balance">
          {title}
        </h3>
        <p className="text-[#888888] text-sm font-sans leading-relaxed mb-6">{excerpt}</p>
        <Link
          href={`/news/${id}`}
          className="inline-flex items-center gap-2 text-[#DC2626] font-display text-sm tracking-widest uppercase font-semibold hover:gap-3 transition-all duration-200"
        >
          Read More
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}
