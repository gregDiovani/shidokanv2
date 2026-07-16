'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  // { href: '/about', label: 'About' },
  { href: '/about/shihan', label: 'Meet Shihan' },
  // { href: '/programs', label: 'Programs' },
  { href: '/black-belts', label: 'Black Belts' },
  { href: '/dojo', label: 'Dojo List' },
  // { href: '/schedule', label: 'Schedule' },
  { href: '/news', label: 'Dojo News' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

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
            <span className="font-display font-bold text-2xl tracking-widest text-[#F2F2F2] uppercase">
              Shidokan
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
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#888888] hover:text-[#F2F2F2] transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#888888] hover:text-[#F2F2F2] transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <Link
              href="/contact"
              className="ml-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-semibold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              Try a Class
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
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-2 pt-4 border-t border-white/5 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#888888]">
                <InstagramIcon size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#888888]">
                <FacebookIcon size={20} />
              </a>
              <Link
                href="/contact"
                className="ml-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-semibold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors"
              >
                Try a Class
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
