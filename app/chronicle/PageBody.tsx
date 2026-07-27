'use client'

import ShihanTimeline from '@/components/ShihanTimeline'
import { useLanguage } from '@/lib/i18n'
import { timeline, timelineEn } from '@/lib/shihan-data'

export default function ChroniclePageBody() {
  const { lang } = useLanguage()
  const entries = lang === 'id' ? timeline : timelineEn

  return (
    <section className="pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? 'Jejak Langkah' : 'Timeline'}
          </span>
          <span className="block w-8 h-px bg-[#DC2626]" />
        </div>
        <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl uppercase tracking-tight leading-none mb-4">
          Chronicle
        </h1>
        <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl mx-auto">
          {lang === 'id' ? 'List Biografi Shidokan Indonesia' : 'Shidokan Indonesia Biography Timeline'}
        </p>
      </div>

      <ShihanTimeline entries={entries} />
    </section>
  )
}
