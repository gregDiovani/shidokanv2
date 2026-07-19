import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SoenoPageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yoshiji Soeno | Shidokan Indonesia',
  description:
    'Kenali Yoshiji Soeno, "Tiger of Kyokushin" dan pendiri Karate Shidokan — perjalanan hidup dan warisannya bagi dunia karate.',
}

export default function SoenoPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoenoPageBody />
      </main>
      <Footer />
    </>
  )
}
