'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import LanguageToggle from '@/components/LanguageToggle'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.24-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z"/>
    </svg>
  )
}

const navLinks = [
  { href: '/', id: 'Home', en: 'Home' },
  { href: '/about/profile', id: 'Profile', en: 'Profile' },
  { href: '/black-belts', id: 'Black Belts', en: 'Black Belts' },
  { href: '/dojo', id: 'Dojo List', en: 'Dojo List' },
  { href: '/news', id: 'Berita Dojo', en: 'Dojo News' },
  { href: '/#faq', id: 'FAQ', en: 'FAQ' },
  { href: '/contact', id: 'Kontak', en: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { lang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome || mobileOpen
          ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/doho_transparent.png"
              alt="Shidokan Indonesia"
              width={40}
              height={40}
              className="h-9 w-9 lg:h-10 lg:w-10 object-contain"
              priority
            />
            <span className="font-display font-bold text-2xl tracking-widest text-[#F2F2F2] uppercase">
              Shidokan<span className="text-[#DC2626]">ID</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[#DC2626]'
                    : 'text-[#888888] hover:text-[#F2F2F2]'
                }`}
              >
                {lang === 'id' ? link.id : link.en}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/shidokan.id?igsh=MWk2bnljMzdkMTVlNg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#888888] hover:text-[#F2F2F2] transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=628175061100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#888888] hover:text-[#F2F2F2] transition-colors"
            >
              <WhatsAppIcon size={18} />
            </a>
            <LanguageToggle />
            <Link
              href="/contact"
              className="ml-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-semibold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              {lang === 'id' ? 'Coba Kelas' : 'Try a Class'}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#F2F2F2] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/5 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-2 font-display text-lg tracking-widest uppercase transition-colors ${
                  pathname === link.href
                    ? 'text-[#DC2626]'
                    : 'text-[#888888] hover:text-[#F2F2F2]'
                }`}
              >
                {lang === 'id' ? link.id : link.en}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-2 pt-4 border-t border-white/5 mt-4">
              <a href="https://www.instagram.com/shidokan.id?igsh=MWk2bnljMzdkMTVlNg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#888888]">
                <InstagramIcon size={20} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=628175061100" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#888888]">
                <WhatsAppIcon size={20} />
              </a>
              <LanguageToggle />
              <Link
                href="/contact"
                className="ml-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-semibold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors"
              >
                {lang === 'id' ? 'Coba Kelas' : 'Try a Class'}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
