'use client'

import Image from 'next/image'
import CTABanner from '@/components/home/CTABanner'
import { useLanguage } from '@/lib/i18n'
import type { GalleryImage } from '@/lib/soeno-data'

interface LegacyGalleryProps {
  eyebrow: string
  eyebrowEn: string
  title: string
  titleEn: string
  subtitle: string
  subtitleEn: string
  images: GalleryImage[]
}

export default function LegacyGallery({
  eyebrow,
  eyebrowEn,
  title,
  titleEn,
  subtitle,
  subtitleEn,
  images,
}: LegacyGalleryProps) {
  const { lang } = useLanguage()

  return (
    <>
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? eyebrow : eyebrowEn}
          </span>
          <span className="block w-8 h-px bg-[#DC2626]" />
        </div>
        <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 text-balance">
          {lang === 'id' ? title : titleEn}
        </h1>
        <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl mx-auto">
          {lang === 'id' ? subtitle : subtitleEn}
        </p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-4/5 overflow-hidden border border-white/10 bg-[#0A0A0A]"
            >
              <Image
                src={img.src}
                alt={lang === 'id' ? img.caption : img.captionEn}
                fill
                className="object-contain transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-3 font-sans text-xs text-[#F2F2F2] leading-snug">
                {lang === 'id' ? img.caption : img.captionEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner dark={false} />
    </>
  )
}
