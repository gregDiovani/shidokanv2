'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, User, AtSign } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import T from '@/components/T'
import { ArrowRight } from 'lucide-react'
import type { Dojo } from '@/lib/dojo-data'

export default function DojoSection({ dojos }: { dojos: Dojo[] }) {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow={<T id="Jaringan Dojo" en="Dojo Network" />}
            title={<T id="Cabang Dojo Kami" en="Our Dojo Branches" />}
            subtitle={
              <T
                id="Shidokan Indonesia hadir di berbagai kota, dibina oleh instruktur bersertifikat dengan standar yang sama."
                en="Shidokan Indonesia is present in many cities, coached by certified instructors held to the same standard."
              />
            }
          />
          <Link
            href="/dojo"
            className="inline-flex items-center gap-2 shrink-0 font-display text-sm font-semibold uppercase tracking-widest text-[#DC2626] hover:text-[#F87171] transition-colors"
          >
            <T id="Lihat Semua Dojo" en="View All Dojos" />
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dojos.map((dojo, i) => (
            <motion.div
              key={`${dojo.name}-${dojo.instructor}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="border border-white/10 bg-[#0A0A0A] p-6 hover:border-[#DC2626]/40 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wide leading-snug">
                  {dojo.name}
                </p>
                <span className="shrink-0 font-display text-[10px] font-semibold uppercase tracking-widest text-[#DC2626] border border-[#DC2626]/40 bg-[#DC2626]/10 px-2.5 py-1">
                  {dojo.region}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <User size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-xs text-[#888888]">{dojo.instructor}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-xs text-[#888888] leading-relaxed">{dojo.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-xs text-[#888888]">{dojo.schedule}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-xs text-[#888888]">{dojo.phone}</span>
                </div>
                {dojo.instagram && (
                  <div className="flex items-start gap-2.5">
                    <AtSign size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-[#888888]">{dojo.instagram}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
