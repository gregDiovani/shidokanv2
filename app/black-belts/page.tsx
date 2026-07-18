import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlackBeltsPageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Black Belts | Shidokan',
  description:
    'Meet the black belt holders of our Shidokan dojo — practitioners who earned their rank through years of full-contact training and discipline.',
}

export default function BlackBeltsPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlackBeltsPageBody />
      </main>
      <Footer />
    </>
  )
}
