import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShihanPageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile | Shidokan Indonesia',
  description:
    'Kenali Shihan Erick Danurahardja, Branch President Shidokan Indonesia — perjalanan, prestasi, dan sejarah perguruan.',
}

export default function ShihanPage() {
  return (
    <>
      <Navbar />
      <main>
        <ShihanPageBody />
      </main>
      <Footer />
    </>
  )
}
