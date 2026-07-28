'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { QUOTES, getRandomQuote, type Quote } from '@/lib/quotes-data'

interface CTABannerProps {
  dark?: boolean
}

export default function CTABanner({ dark = true }: CTABannerProps) {
  const [quote, setQuote] = useState<Quote>(QUOTES[0])

  useEffect(() => {
    setQuote(getRandomQuote())
  }, [])

  return (
    <section
      className={`relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 ${
        dark ? 'bg-[#0D0D0D] border-y border-white/5' : 'bg-[#DC2626]'
      }`}
    >
      <div
        className={`pointer-events-none absolute -top-16 -right-16 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ${
          dark ? 'opacity-5' : 'opacity-10'
        }`}
      >
        <Image src="/images/shidokan-crest.webp" alt="" fill className="object-cover" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p
          className={`font-display italic font-medium text-2xl md:text-3xl lg:text-4xl leading-snug text-balance ${
            dark ? 'text-[#F2F2F2]' : 'text-white'
          }`}
        >
          “{quote.text}”
        </p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <span className={`block w-8 h-px ${dark ? 'bg-[#DC2626]' : 'bg-white/60'}`} />
          <span
            className={`font-display text-xs tracking-[0.25em] uppercase font-semibold ${
              dark ? 'text-[#DC2626]' : 'text-white/90'
            }`}
          >
            {quote.author}
          </span>
          <span className={`block w-8 h-px ${dark ? 'bg-[#DC2626]' : 'bg-white/60'}`} />
        </div>
      </motion.div>
    </section>
  )
}
