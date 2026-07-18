import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProgramsPageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs | Shidokan Karate',
  description:
    'From Cubs (ages 4–5) to the Adult program and Demo Team, explore Shidokan training programs for every age and skill level.',
}

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProgramsPageBody />
      </main>
      <Footer />
    </>
  )
}
