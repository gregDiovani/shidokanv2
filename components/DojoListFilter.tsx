'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Clock, Phone, User, AtSign, Sparkles, Map as MapIcon } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import type { Dojo } from '@/lib/dojo-data'

export default function DojoListFilter({ dojos }: { dojos: Dojo[] }) {
  const { lang } = useLanguage()
  const searchParams = useSearchParams()
  const allLabel = lang === 'id' ? 'Semua Kota' : 'All Cities'
  const regionCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const d of dojos) counts.set(d.region, (counts.get(d.region) ?? 0) + 1)
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [dojos])
  const regions = useMemo(() => regionCounts.map(([region]) => region), [regionCounts])
  const initialCity = searchParams.get('city') ?? ''
  const [active, setActive] = useState(regions.includes(initialCity) ? initialCity : '')

  const filtered = active === '' ? dojos : dojos.filter((d) => d.region === active)

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-10">
        <button
          onClick={() => setActive('')}
          className={`font-display text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-200 ${
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
            className={`font-display text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-200 ${
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
        {filtered.map((dojo, i) => (
          <div
            key={`${dojo.name}-${i}`}
            className="border border-white/10 bg-[#0D0D0D] p-6 hover:border-[#DC2626]/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-2 mb-4">
              <p className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wide leading-snug">
                {dojo.name}
              </p>
              <span className="shrink-0 font-display text-[10px] font-semibold uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/10 px-2 py-1">
                {dojo.region}
              </span>
            </div>
            <div className="space-y-2.5">
              {dojo.instructor && (
                <div className="flex items-start gap-2.5">
                  <User size={15} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-[#888888]">{dojo.instructor}</span>
                </div>
              )}
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#DC2626] mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-[#888888] leading-relaxed">{dojo.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-[#DC2626] mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-[#888888]">{dojo.schedule}</span>
              </div>
              {dojo.phone && (
                <div className="flex items-start gap-2.5">
                  <Phone size={15} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-[#888888]">{dojo.phone}</span>
                </div>
              )}
              {dojo.instagram && (
                <div className="flex items-start gap-2.5">
                  <AtSign size={15} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-[#888888]">{dojo.instagram}</span>
                </div>
              )}
            </div>

            {dojo.skills && (
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={13} className="text-[#DC2626]" />
                  <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-[#666666]">
                    {lang === 'id' ? 'Keahlian' : 'Skills'}
                  </span>
                </div>
                <ul className="space-y-1">
                  {dojo.skills.map((skill) => (
                    <li key={skill} className="font-sans text-xs text-[#888888] leading-relaxed">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dojo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-[#DC2626] hover:text-[#F87171] transition-colors"
            >
              <MapIcon size={14} />
              {lang === 'id' ? 'Buka di Google Maps' : 'Open in Google Maps'}
            </a>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center font-sans text-sm text-[#666666] py-12">
            {lang === 'id' ? 'Belum ada dojo di region ini.' : 'No dojos in this region yet.'}
          </p>
        )}
      </div>
    </div>
  )
}
