'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { TimelineEntry } from '@/lib/shihan-data'

export default function ShihanTimeline({ entries }: { entries: TimelineEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {entries.map((entry, i) => {
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
  )
}
