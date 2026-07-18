import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchedulePageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Class Schedule | Shidokan Indonesia',
  description:
    'View the weekly Shidokan Karate class schedule — six days a week across Cubs, Pre-Lion, Lion, Adult, Kata, and Demo Team programs.',
}

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main>
        <SchedulePageBody />
      </main>
      <Footer />
    </>
  )
}
