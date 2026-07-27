import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import KanchoPageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kancho | Shidokan Indonesia',
  description: 'Profil Kancho Shidokan Indonesia.',
}

export default function KanchoPage() {
  return (
    <>
      <Navbar />
      <main>
        <KanchoPageBody />
      </main>
      <Footer />
    </>
  )
}
