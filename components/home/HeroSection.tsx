'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import T from '@/components/T'

const slides = [
  '/images/hero-bg2.webp',
  '/images/hero-bg3.webp',
  '/images/hero-bg4.webp',
]

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[slideIndex]}
              alt="Shidokan Karate dojo"
              fill
              priority={slideIndex === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-12 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.25em] uppercase font-semibold">
              Est. 1981
            </span>
            <span className="block w-12 h-px bg-[#DC2626]" />
          </div>

          <h1 className="font-display font-bold text-[#F2F2F2] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-none mb-4 text-balance">
            Shidokan
            <br />
            <span className="text-[#DC2626]">Indonesia</span>
          </h1>

          <p className="font-display text-[#888888] text-xl sm:text-2xl md:text-3xl uppercase tracking-widest mb-10">
            The Triathlon of Martial Arts
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-display text-[#555555] text-xs tracking-[0.2em] uppercase">
          <T id="Gulir" en="Scroll" />
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-[#555555]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
