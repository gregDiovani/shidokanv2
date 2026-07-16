'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { dojoList } from '@/lib/dojo-data'

export default function DojoSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Jaringan Dojo"
            title="Cabang Dojo Kami"
            subtitle="Shidokan Indonesia hadir di berbagai kota, dibina oleh instruktur bersertifikat dengan standar yang sama."
          />
          <Link
            href="/dojo"
            className="inline-flex items-center gap-2 shrink-0 font-display text-sm font-semibold uppercase tracking-widest text-[#DC2626] hover:text-[#F87171] transition-colors"
          >
            Lihat Semua Dojo
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dojoList.map((dojo, i) => (
            <motion.div
              key={dojo.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="border border-white/10 bg-[#0A0A0A] p-6 hover:border-[#DC2626]/40 transition-colors duration-200"
            >
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#DC2626] mt-1 shrink-0" />
                <div>
                  <p className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wide leading-snug">
                    {dojo.name}
                  </p>
                  <p className="font-sans text-xs text-[#666666] mt-2 tracking-wide uppercase">
                    {dojo.region}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
