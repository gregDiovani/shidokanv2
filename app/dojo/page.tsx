import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DojoPageBody from './PageBody'
import { getDojoList } from '@/lib/dojo-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dojo List | Shidokan Indonesia',
  description: 'Daftar cabang dojo Shidokan Indonesia di berbagai kota.',
}

export default async function DojoPage() {
  const dojos = await getDojoList()

  return (
    <>
      <Navbar />
      <main>
        <DojoPageBody dojos={dojos} />
      </main>
      <Footer />
    </>
  )
}
