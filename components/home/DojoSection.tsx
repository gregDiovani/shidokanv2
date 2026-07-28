'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, User, AtSign } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import T from '@/components/T'
import { useLanguage } from '@/lib/i18n'
import { ArrowRight } from 'lucide-react'
import type { Dojo } from '@/lib/dojo-data'

const PREVIEW_COUNT = 6

export default function DojoSection({ dojos }: { dojos: Dojo[] }) {
  const { lang } = useLanguage()
  const allLabel = lang === 'id' ? 'Semua Kota' : 'All Cities'
  const regionCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const d of dojos) counts.set(d.region, (counts.get(d.region) ?? 0) + 1)
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [dojos])
  const [active, setActive] = useState('')

  const filtered = active === '' ? dojos : dojos.filter((d) => d.region === active)
  const remaining = filtered.length - PREVIEW_COUNT
  const viewAllHref = active === '' ? '/dojo' : `/dojo?city=${encodeURIComponent(active)}`

  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow={<T id="Jaringan Dojo" en="Dojo Network" />}
            title={<T id="Cabang Dojo Kami" en="Our Dojo Network Across Indonesia" />}
            subtitle={
              <T
                id="Shidokan Indonesia hadir di berbagai kota, dibina oleh instruktur bersertifikat dengan standar yang sama."
                en="Shidokan Indonesia is present in many cities, coached by certified instructors held to the same standard."
              />
            }
          />
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 shrink-0 font-display text-sm font-semibold uppercase tracking-widest text-[#DC2626] hover:text-[#F87171] transition-colors"
          >
            <T id="Lihat Semua Dojo" en="View All Dojos" />
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-8">
          <button
            onClick={() => setActive('')}
            className={`shrink-0 font-display text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-200 ${
              active === ''
                ? 'bg-[#DC2626] border-[#DC2626] text-white'
                : 'border-white/10 text-[#888888] hover:border-[#DC2626]/40 hover:text-[#F2F2F2]'
            }`}
          >
            {allLabel} ({dojos.length})
          </button>
          {regionCounts.map(([region, count]) => (
            <button
              key={region}
              onClick={() => setActive(region)}
              className={`shrink-0 font-display text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                active === region
                  ? 'bg-[#DC2626] border-[#DC2626] text-white'
                  : 'border-white/10 text-[#888888] hover:border-[#DC2626]/40 hover:text-[#F2F2F2]'
              }`}
            >
              {region} ({count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.slice(0, PREVIEW_COUNT).map((dojo, i) => (
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
                {dojo.instructor && (
                  <div className="flex items-start gap-2.5">
                    <User size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-[#888888]">{dojo.instructor}</span>
                  </div>
                )}
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-xs text-[#888888] leading-relaxed">{dojo.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-xs text-[#888888]">{dojo.schedule}</span>
                </div>
                {dojo.phone && (
                  <div className="flex items-start gap-2.5">
                    <Phone size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-[#888888]">{dojo.phone}</span>
                  </div>
                )}
                {dojo.instagram && (
                  <div className="flex items-start gap-2.5">
                    <AtSign size={14} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-[#888888]">{dojo.instagram}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full text-center font-sans text-sm text-[#666666] py-12">
              {lang === 'id' ? 'Belum ada dojo di kota ini.' : 'No dojos in this city yet.'}
            </p>
          )}
        </div>

        {remaining > 0 && (
          <div className="mt-8 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-[#888888] hover:text-[#DC2626] transition-colors"
            >
              {lang === 'id'
                ? `+${remaining} dojo lainnya`
                : `+${remaining} more dojos`}
              <ArrowRight size={12} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
