'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTABanner from '@/components/home/CTABanner'
import { blackBeltRanks } from '@/lib/black-belts-data'
import { useLanguage } from '@/lib/i18n'

function BeltStripes({ count }: { count: number }) {
  return (
    <div className="relative h-8 w-24 sm:w-28 shrink-0 rounded-sm bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-2">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="block w-1.5 h-6 bg-[#EAB308]" />
        ))}
      </div>
    </div>
  )
}

export default function BlackBeltsPageBody() {
  const { lang } = useLanguage()
  const [openRanks, setOpenRanks] = useState<Record<string, boolean>>(
    Object.fromEntries(blackBeltRanks.map((rank) => [rank.dan, true]))
  )

  const toggleRank = (dan: string) => {
    setOpenRanks((prev) => ({ ...prev, [dan]: !prev[dan] }))
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/black-belt.webp"
            alt="Shidokan black belt"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
              {lang === 'id' ? 'Aula Tingkatan' : 'Hall of Rank'}
            </span>
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 max-w-3xl text-balance">
            Black Belts
          </h1>
          <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl">
            {lang === 'id'
              ? 'Setiap garis di sabuk menandai bertahun-tahun keringat, disiplin, dan ujian full-contact. Inilah para praktisi yang berhasil meraihnya.'
              : 'Every stripe on the belt marks years of sweat, discipline, and full-contact testing. These are the practitioners who earned theirs.'}
          </p>
        </div>
      </section>

      {/* Rank Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {blackBeltRanks.map((rank) => {
          const isOpen = openRanks[rank.dan]
          return (
            <div key={rank.dan}>
              <button
                type="button"
                onClick={() => toggleRank(rank.dan)}
                className="w-full flex flex-wrap items-center gap-6 mb-10 text-left"
                aria-expanded={isOpen}
              >
                <SectionHeading eyebrow={rank.label} title={rank.dan} />
                <BeltStripes count={rank.stripes} />
                <ChevronDown
                  size={22}
                  className={`ml-auto text-[#666666] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-200 ${
                      isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                    }`}
                  >
                    {rank.members.map((member) => (
                      <div
                        key={member.name}
                        className="group relative overflow-hidden border border-white/10 bg-[#0D0D0D] px-6 py-5 transition-colors duration-200 hover:border-[#DC2626]/40"
                      >
                        <div className="absolute left-0 top-0 h-full w-1 bg-[#DC2626]" />
                        <p className="font-display font-semibold text-[#F2F2F2] text-lg uppercase tracking-wide leading-snug">
                          {member.name}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-sans text-xs text-[#666666] tracking-wider">
                            {member.number !== '-' ? `No. ${member.number}` : rank.dan}
                          </span>
                          <span
                            className={`font-display text-xs font-semibold uppercase tracking-widest px-2 py-1 ${
                              member.status === 'Aktif'
                                ? 'text-[#22C55E] bg-[#22C55E]/10'
                                : 'text-[#888888] bg-white/5'
                            }`}
                          >
                            {member.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <CTABanner
        headline={lang === 'id' ? 'Kejar Sabuk Hitammu' : 'Chase Your Black Belt'}
        subline={
          lang === 'id'
            ? 'Setiap nama di dinding ini memulai dari hari pertama. Bergabunglah dan mulai jalanmu sendiri menuju puncak.'
            : 'Every name on this wall started on day one. Join us and start your own path to the top.'
        }
        buttonText={lang === 'id' ? 'Coba Kelas Gratis' : 'Try a Free Class'}
        buttonHref="/contact"
        dark={false}
      />
    </>
  )
}
