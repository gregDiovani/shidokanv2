'use client'

import CTABanner from '@/components/home/CTABanner'
import DojoListFilter from '@/components/DojoListFilter'
import { useLanguage } from '@/lib/i18n'
import type { Dojo } from '@/lib/dojo-data'

export default function DojoPageBody({ dojos }: { dojos: Dojo[] }) {
  const { lang } = useLanguage()

  return (
    <>
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? 'Jaringan Dojo' : 'Dojo Network'}
          </span>
        </div>
        <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none max-w-3xl text-balance">
          Dojo List
        </h1>
        <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl mt-6">
          {lang === 'id'
            ? 'Cabang-cabang resmi Shidokan Indonesia yang tersebar di berbagai kota, dibina oleh instruktur bersertifikat.'
            : 'Official Shidokan Indonesia branches spread across several cities, coached by certified instructors.'}
        </p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DojoListFilter dojos={dojos} />
      </section>

      <CTABanner
        headline={lang === 'id' ? 'Cari Dojo Terdekat?' : 'Looking for the Nearest Dojo?'}
        subline={
          lang === 'id'
            ? 'Hubungi kami untuk info jadwal latihan dan lokasi dojo terdekat dari tempatmu.'
            : 'Contact us for training schedules and the dojo location closest to you.'
        }
        buttonText={lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
        buttonHref="/contact"
        dark={false}
      />
    </>
  )
}
