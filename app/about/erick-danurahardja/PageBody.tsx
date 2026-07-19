'use client'

import Image from 'next/image'
import CTABanner from '@/components/home/CTABanner'
import ShihanTimeline from '@/components/ShihanTimeline'
import { useLanguage } from '@/lib/i18n'
import {
  bioParagraphs,
  bioParagraphsEn,
  quickFacts,
  quickFactsEn,
  testimonials,
  timeline,
  timelineEn,
} from '@/lib/shihan-data'

export default function ShihanPageBody() {
  const { lang } = useLanguage()
  const bio = lang === 'id' ? bioParagraphs : bioParagraphsEn
  const facts = lang === 'id' ? quickFacts : quickFactsEn
  const entries = lang === 'id' ? timeline : timelineEn

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? 'Profil' : 'Profile'}
          </span>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Portrait */}
          <div className="flex flex-col gap-6 max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 shrink-0">
              <Image
                src="/images/2-home-profil.webp"
                alt="Shihan Erick Danurahardja"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display font-bold text-white text-3xl uppercase tracking-wide">Erick Danurahardja</p>
                <p className="font-display text-[#DC2626] text-sm tracking-widest uppercase mt-1">
                  {lang === 'id' ? 'Shihan & Branch President Indonesia' : 'Shihan & Branch President Indonesia'}
                </p>
              </div>
            </div>

            {/* Spacer pushes the awards photo down so its bottom lines up with the Ringkasan box */}
            <div className="flex-1" />

            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 shrink-0">
              <Image
                src="/images/awards.webp"
                alt={lang === 'id' ? 'Penghargaan Shihan Erick Danurahardja' : 'Awards received by Shihan Erick Danurahardja'}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:pt-4">
            <h1 className="font-display font-bold text-[#F2F2F2] text-5xl md:text-6xl uppercase tracking-tight leading-none mb-8 text-balance">
              {lang === 'id' ? (
                <>Sejarah & <span className="text-[#DC2626]">Biografi</span> Perguruan</>
              ) : (
                <>History & <span className="text-[#DC2626]">Biography</span> of the Organization</>
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

      {/* Legends Testimonials */}
      <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
                {lang === 'id' ? 'Testimoni Legenda' : 'Legend Testimonials'}
              </span>
              <span className="block w-8 h-px bg-[#DC2626]" />
            </div>
            <h2 className="font-display font-bold text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-tight text-balance max-w-2xl mx-auto">
              {lang === 'id'
                ? 'Beberapa legend yang pernah berkomentar langsung kepada Erick'
                : 'A few legends who have shared their thoughts on Erick directly'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-white/10 bg-[#0A0A0A] p-6 text-center flex flex-col items-center"
              >
                <div className="relative w-32 aspect-[2/3] overflow-hidden border border-white/10 mb-5">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <p className="text-[#F2F2F2] font-sans text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-display font-semibold text-[#F2F2F2] text-sm uppercase tracking-wide">{t.name}</p>
                <p className="font-sans text-xs text-[#666666] mt-1">{t.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
              {lang === 'id' ? 'Jejak Langkah' : 'Timeline'}
            </span>
            <span className="block w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-bold text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-tight">
            {lang === 'id' ? 'List Biografi Shidokan Indonesia' : 'Shidokan Indonesia Biography Timeline'}
          </h2>
        </div>

        <ShihanTimeline entries={entries} />
      </section>

      <CTABanner
        headline={lang === 'id' ? 'Berlatih Bersama Shihan' : 'Train With Shihan'}
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
