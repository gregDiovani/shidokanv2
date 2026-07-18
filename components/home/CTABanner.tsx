'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import T from '@/components/T'

interface CTABannerProps {
  headline: ReactNode
  subline?: ReactNode
  buttonText: ReactNode
  buttonHref: string
  dark?: boolean
}

export default function CTABanner({ headline, subline, buttonText, buttonHref, dark = true }: CTABannerProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[#0D0D0D] border-y border-white/5' : 'bg-[#DC2626]'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {dark && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="block w-12 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-sm tracking-[0.25em] uppercase font-semibold">
                <T id="Mulai Sekarang" en="Get Started" />
              </span>
              <span className="block w-12 h-px bg-[#DC2626]" />
            </div>
          )}

          <h2 className={`font-display font-bold uppercase tracking-tight leading-none text-5xl md:text-6xl lg:text-7xl mb-4 text-balance ${dark ? 'text-[#F2F2F2]' : 'text-white'}`}>
            {headline}
          </h2>

          {subline && (
            <p className={`font-sans text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto ${dark ? 'text-[#888888]' : 'text-white/80'}`}>
              {subline}
            </p>
          )}

          <Link
            href={buttonHref}
            className={`inline-block font-display font-bold text-sm tracking-widest uppercase px-10 py-4 transition-colors duration-200 ${
              dark
                ? 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
                : 'bg-white hover:bg-gray-100 text-[#0A0A0A]'
            }`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
