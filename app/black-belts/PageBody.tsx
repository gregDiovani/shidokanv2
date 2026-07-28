'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTABanner from '@/components/home/CTABanner'
import { blackBeltRanks } from '@/lib/black-belts-data'
import { useLanguage } from '@/lib/i18n'

const statusStyles: Record<string, string> = {
  Aktif: 'text-[#22C55E] bg-[#22C55E]/10',
  Dicabut: 'text-[#EAB308] bg-[#EAB308]/10',
  'Mengundurkan Diri': 'text-[#EF4444] bg-[#EF4444]/10',
  'Meninggal Dunia': 'text-[#EAB308] bg-[#EAB308]/10',
  Dipecat: 'text-[#EF4444] bg-[#EF4444]/10',
}

function BeltStripes({ count }: { count: number }) {
  return (
    <div className="relative h-10 w-56 sm:w-64 shrink-0 rounded-sm bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center pl-3 pr-2">
      
      <div className="flex-1" />
      <div className="flex items-center gap-1 mx-2">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="block w-1.5 h-6 bg-[#EAB308]" />
        ))}
      </div>
      <div className="relative w-14 h-9 shrink-0">
        <Image
          src="/images/shidokan-belt-rotated-90-right.png"
          alt="Shido-kan woven label"
          fill
          className="object-contain"
        />
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
            Kuro Obi
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
                    className={`overflow-x-auto border border-white/10 transition-opacity duration-200 ${
                      isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                    }`}
                  >
                    <table className="w-full min-w-180 border-collapse text-left">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/3">
                          <th className="w-12 px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-[#666666]">
                            No
                          </th>
                          <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-[#666666]">
                            {lang === 'id' ? 'Nama' : 'Name'}
                          </th>
                          <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-[#666666]">
                            {lang === 'id' ? 'Cabang' : 'Branch'}
                          </th>
                          <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-[#666666]">
                            {lang === 'id' ? 'No. Sertifikat' : 'Certificate No.'}
                          </th>
                          <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-[#666666]">
                            {lang === 'id' ? 'Tanggal Terbit' : 'Date Issued'}
                          </th>
                          <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-[#666666] text-right">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rank.members.map((member, i) => (
                          <tr
                            key={`${member.name}-${member.number}`}
                            className={`border-b border-white/5 last:border-0 transition-colors duration-150 hover:bg-white/4 ${
                              i % 2 === 1 ? 'bg-white/1.5' : ''
                            }`}
                          >
                            <td className="px-4 py-3 font-sans text-sm text-[#666666] tabular-nums">{i + 1}</td>
                            <td className="px-4 py-3 font-display font-semibold text-[#F2F2F2] text-sm uppercase tracking-wide">
                              {member.name}
                            </td>
                            <td className="px-4 py-3 font-sans text-sm text-[#888888]">{member.branch}</td>
                            <td className="px-4 py-3 font-mono text-xs text-[#888888] tracking-wide">
                              {member.number}
                            </td>
                            <td className="px-4 py-3 font-sans text-sm text-[#888888] whitespace-nowrap">
                              {member.dateIssued}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <span
                                className={`inline-block font-display text-xs font-semibold uppercase tracking-widest px-2 py-1 whitespace-nowrap ${
                                  statusStyles[member.status] ?? 'text-[#888888] bg-white/5'
                                }`}
                              >
                                {member.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <CTABanner dark={false} />
    </>
  )
}
