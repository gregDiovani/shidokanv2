import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactPageBody from './PageBody'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Shidokan Indonesia',
  description:
    'Get in touch with Shidokan Indonesia in Surabaya. Book your free trial class today — no commitment, no pressure.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageBody />
      </main>
      <Footer />
    </>
  )
}
