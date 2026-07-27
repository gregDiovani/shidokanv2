import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegacyGallery from '@/components/about/LegacyGallery'
import { hallOfLegendsGallery } from '@/lib/legacy-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hall of Legends | Shidokan Indonesia',
  description: 'Para tokoh dan legenda dunia Kyokushin serta Shidokan internasional.',
}

export default function HallOfLegendsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegacyGallery
          eyebrow="Shidokan Legacy"
          eyebrowEn="Shidokan Legacy"
          title="Hall of Legends"
          titleEn="Hall of Legends"
          subtitle="Para tokoh dan legenda dunia Kyokushin serta Shidokan internasional."
          subtitleEn="Legendary figures from the wider Kyokushin and international Shidokan world."
          images={hallOfLegendsGallery}
        />
      </main>
      <Footer />
    </>
  )
}
