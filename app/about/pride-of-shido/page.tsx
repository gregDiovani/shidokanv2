import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegacyGallery from '@/components/about/LegacyGallery'
import { prideOfShidoGallery } from '@/lib/legacy-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pride of Shido | Shidokan Indonesia',
  description: 'Atlet dan murid Shidokan Indonesia yang telah menorehkan prestasi membanggakan.',
}

export default function PrideOfShidoPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegacyGallery
          eyebrow="Shidokan Legacy"
          eyebrowEn="Shidokan Legacy"
          title="Pride of Shido"
          titleEn="Pride of Shido"
          subtitle="Murid dan atlet Shidokan Indonesia yang membawa nama dojo dengan prestasi mereka."
          subtitleEn="Shidokan Indonesia students and athletes carrying the dojo's name through their achievements."
          images={prideOfShidoGallery}
        />
      </main>
      <Footer />
    </>
  )
}
