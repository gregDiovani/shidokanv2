import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChroniclePageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chronicle | Shidokan Indonesia',
  description: 'Perjalanan sejarah Shidokan Indonesia.',
}

export default function ChroniclePage() {
  return (
    <>
      <Navbar />
      <main>
        <ChroniclePageBody />
      </main>
      <Footer />
    </>
  )
}
