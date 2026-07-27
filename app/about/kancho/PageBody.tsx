'use client'

import { useLanguage } from '@/lib/i18n'

export default function KanchoPageBody() {
  const { lang } = useLanguage()

  return (
    <section className="pt-40 pb-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="block w-8 h-px bg-[#DC2626]" />
        <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
          Shidokan Legacy
        </span>
        <span className="block w-8 h-px bg-[#DC2626]" />
      </div>
      <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl uppercase tracking-tight leading-none mb-6">
        Kancho
      </h1>
      <p className="text-[#888888] font-sans text-lg leading-relaxed">
        {lang === 'id' ? 'Profil segera hadir.' : 'Profile coming soon.'}
      </p>
    </section>
  )
}
