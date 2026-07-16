import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTABanner from '@/components/home/CTABanner'
import { MapPin } from 'lucide-react'
import { dojoList } from '@/lib/dojo-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dojo List | Shidokan Indonesia',
  description: 'Daftar cabang dojo Shidokan Indonesia di berbagai kota.',
}

export default function DojoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
              Jaringan Dojo
            </span>
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none max-w-3xl text-balance">
            Dojo List
          </h1>
          <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl mt-6">
            Cabang-cabang resmi Shidokan Indonesia yang tersebar di berbagai kota, dibina oleh instruktur bersertifikat.
          </p>
        </section>

        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dojoList.map((dojo) => (
              <div
                key={dojo.name}
                className="border border-white/10 bg-[#0D0D0D] p-6 hover:border-[#DC2626]/40 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#DC2626] mt-1 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wide leading-snug">
                      {dojo.name}
                    </p>
                    <p className="font-sans text-xs text-[#666666] mt-2 tracking-wide uppercase">
                      {dojo.region}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          headline="Cari Dojo Terdekat?"
          subline="Hubungi kami untuk info jadwal latihan dan lokasi dojo terdekat dari tempatmu."
          buttonText="Hubungi Kami"
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  )
}
