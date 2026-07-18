'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'

export default function NotFound() {
  const { lang } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center max-w-xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
              404
            </span>
            <span className="block w-8 h-px bg-[#DC2626]" />
          </div>

          <h1 className="font-display font-bold text-[#F2F2F2] text-6xl sm:text-7xl uppercase tracking-tight leading-none mb-6 text-balance">
            {lang === 'id' ? (
              <>Di Luar <span className="text-[#DC2626]">Batas</span></>
            ) : (
              <>Out of <span className="text-[#DC2626]">Bounds</span></>
            )}
          </h1>

          <p className="text-[#888888] font-sans text-base leading-relaxed mb-10">
            {lang === 'id'
              ? 'Halaman yang kamu cari tidak ada di dojo ini. Mungkin sudah dipindah, atau alamatnya salah ketik.'
              : "The page you're looking for isn't in this dojo. It may have moved, or the address was mistyped."}
          </p>

          <Link
            href="/"
            className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200"
          >
            {lang === 'id' ? 'Kembali ke Home' : 'Back to Home'}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
