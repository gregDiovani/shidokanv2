'use client'

import Image from 'next/image'
import CTABanner from '@/components/home/CTABanner'
import { useLanguage } from '@/lib/i18n'
import {
  soenoBioParagraphs,
  soenoBioParagraphsEn,
  soenoGallery,
  soenoQuickFacts,
  soenoQuickFactsEn,
} from '@/lib/soeno-data'

export default function SoenoPageBody() {
  const { lang } = useLanguage()
  const bio = lang === 'id' ? soenoBioParagraphs : soenoBioParagraphsEn
  const facts = lang === 'id' ? soenoQuickFacts : soenoQuickFactsEn

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? 'Pendiri Shidokan' : 'Founder of Shidokan'}
          </span>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src="/images/soeno/soeno.webp"
                alt="Yoshiji Soeno"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display font-bold text-white text-3xl uppercase tracking-wide">Yoshiji Soeno</p>
                <p className="font-display text-[#DC2626] text-sm tracking-widest uppercase mt-1">
                  {lang === 'id' ? 'Tiger of Kyokushin' : 'Tiger of Kyokushin'}
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:pt-4">
            <h1 className="font-display font-bold text-[#F2F2F2] text-5xl md:text-6xl uppercase tracking-tight leading-none mb-8 text-balance">
              {lang === 'id' ? (
                <>Sang <span className="text-[#DC2626]">Tiger</span> of Kyokushin</>
              ) : (
                <>The <span className="text-[#DC2626]">Tiger</span> of Kyokushin</>
              )}
            </h1>

            <div className="space-y-4 text-[#888888] font-sans text-base leading-relaxed mb-10">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="border border-white/10 p-6">
              <h2 className="font-display font-semibold text-[#F2F2F2] text-lg uppercase tracking-wide mb-6">
                {lang === 'id' ? 'Ringkasan' : 'Summary'}
              </h2>
              <div className="space-y-3">
                {facts.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="font-display text-[#DC2626] text-xs tracking-[0.15em] uppercase font-semibold w-28 shrink-0 mt-0.5">{c.label}</span>
                    <span className="text-[#888888] font-sans text-sm">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
                {lang === 'id' ? 'Galeri' : 'Gallery'}
              </span>
              <span className="block w-8 h-px bg-[#DC2626]" />
            </div>
            <h2 className="font-display font-bold text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-tight text-balance max-w-2xl mx-auto">
              {lang === 'id' ? 'Jejak Perjalanan Sang Legenda' : "The Legend's Journey in Photos"}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {soenoGallery.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-square overflow-hidden border border-white/10 bg-[#0A0A0A]"
              >
                <Image
                  src={img.src}
                  alt={lang === 'id' ? img.caption : img.captionEn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 p-3 font-sans text-xs text-[#F2F2F2] leading-snug opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {lang === 'id' ? img.caption : img.captionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={lang === 'id' ? 'Berlatih dengan Warisan Shidokan' : 'Train Within the Shidokan Legacy'}
        subline={
          lang === 'id'
            ? 'Kelas pertama gratis, tanpa komitmen. Rasakan sendiri standar latihan Shidokan.'
            : 'Your first class is free, no commitment. Experience the Shidokan training standard for yourself.'
        }
        buttonText={lang === 'id' ? 'Coba Kelas Gratis' : 'Try a Free Class'}
        buttonHref="/contact"
        dark={false}
      />
    </>
  )
}
