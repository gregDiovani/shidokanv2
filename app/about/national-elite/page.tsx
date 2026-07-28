import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegacyGallery from '@/components/about/LegacyGallery'
import { nationalEliteGallery } from '@/lib/legacy-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'National Elite | Shidokan Indonesia',
  description: 'Atlet-atlet nasional Shidokan Indonesia yang berlaga dan berprestasi di kancah Kyokushin.',
}

export default function NationalElitePage() {
  return (
    <>
      <Navbar />
      <main>
        <LegacyGallery
          eyebrow="Shidokan Legacy"
          eyebrowEn="Shidokan Legacy"
          title="National Elite Squad"
          titleEn="National Elite Squad"
          subtitle="Atlet nasional Shidokan Indonesia yang berprestasi di berbagai kejuaraan Kyokushin."
          subtitleEn="Shidokan Indonesia's national athletes competing and achieving across Kyokushin championships."
          images={nationalEliteGallery}
        />
      </main>
      <Footer />
    </>
  )
}
