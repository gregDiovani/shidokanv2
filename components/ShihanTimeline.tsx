'use client'

import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { TimelineEntry } from '@/lib/shihan-data'

function extractYear(date: string): string {
  const match = date.match(/\d{4}/g)
  return match ? match[match.length - 1] : date
}

export default function ShihanTimeline({ entries }: { entries: TimelineEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const years = useMemo(() => {
    const unique = Array.from(new Set(entries.map((e) => extractYear(e.date))))
    return unique.sort((a, b) => b.localeCompare(a))
  }, [entries])

  const [activeYear, setActiveYear] = useState<string>(years[0])

  const filteredEntries = useMemo(
    () => entries.filter((e) => extractYear(e.date) === activeYear),
    [entries, activeYear]
  )

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => {
              setActiveYear(year)
              setOpenIndex(null)
            }}
            className={`font-display text-xs font-semibold tracking-widest uppercase px-4 py-2 border transition-colors ${
              activeYear === year
                ? 'bg-[#DC2626] border-[#DC2626] text-white'
                : 'border-white/10 text-[#888888] hover:text-[#F2F2F2] hover:border-white/30'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="space-y-3">
      {filteredEntries.map((entry, i) => {
        const isOpen = openIndex === i
        return (
          <div key={`${entry.date}-${i}`} className="border border-white/10 bg-[#0D0D0D]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <div>
                <span className="font-display text-[#DC2626] text-xs font-semibold tracking-widest uppercase">
                  {entry.date}
                </span>
                <p className="font-display text-[#F2F2F2] text-sm sm:text-base font-semibold mt-1 leading-snug">
                  {entry.title}
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[#888888] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 space-y-3 border-t border-white/5">
                {entry.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-[#888888] font-sans text-sm leading-relaxed">
                    {p}
                  </p>
                ))}

                {entry.list && (
                  <ol className="list-decimal list-inside space-y-1 text-[#888888] font-sans text-sm leading-relaxed pl-1">
                    {entry.list.map((item, li) => (
                      <li key={li}>{item}</li>
                    ))}
                  </ol>
                )}

                {entry.sections && (
                  <div className="space-y-4 pt-1">
                    {entry.sections.map((section, si) => (
                      <div key={si}>
                        <p className="font-display text-[#F2F2F2] text-xs font-semibold uppercase tracking-wide mb-2">
                          {section.heading}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-[#888888] font-sans text-sm leading-relaxed pl-1">
                          {section.bullets.map((b, bi) => (
                            <li key={bi}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
      </div>
    </div>
  )
}
