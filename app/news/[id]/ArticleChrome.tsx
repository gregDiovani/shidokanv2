'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function BackToNewsLink({ date }: { date: string }) {
  const { lang } = useLanguage()
  return (
    <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
      <time className="text-[#555555] font-sans text-sm tracking-wider uppercase">{date}</time>
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-[#888888] hover:text-[#F2F2F2] font-display text-sm tracking-widest uppercase transition-colors"
      >
        <ArrowLeft size={14} />
        {lang === 'id' ? 'Semua Berita' : 'All News'}
      </Link>
    </div>
  )
}

export function MoreFromDojoHeading() {
  const { lang } = useLanguage()
  return (
    <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
      {lang === 'id' ? 'Lainnya dari Dojo' : 'More from the Dojo'}
    </span>
  )
}
