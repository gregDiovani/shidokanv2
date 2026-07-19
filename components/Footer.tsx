'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, MapPin, Phone, /* Mail, */ Clock } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.24-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z"/>
    </svg>
  )
}

const quickLinks = [
  { href: '/', id: 'Home', en: 'Home' },
  {
    id: 'Profile',
    en: 'Profile',
    dropdown: [
      { href: '/about/erick-danurahardja', label: 'Erick Danurahardja' },
      { href: '/about/yoshiji-soeno', label: 'Yoshiji Soeno' },
    ],
  },
  { href: '/news', id: 'Berita Dojo', en: 'Dojo News' },
  { href: '/#faq', id: 'FAQ', en: 'FAQ' },
  { href: '/contact', id: 'Kontak', en: 'Contact' },
] as const

// const programs = [
//   { href: '/programs#cubs', label: 'Cubs (4–5)' },
//   { href: '/programs#pre-lion', label: 'Pre-Lion (5–8)' },
//   { href: '/programs#lion', label: 'Lion (8–18)' },
//   { href: '/programs#adult', label: 'Adult (18+)' },
//   { href: '/programs#kata', label: 'Kata (All Ages)' },
//   { href: '/programs#demo-team', label: 'Demo Team' },
// ]

export default function Footer() {
  const { lang } = useLanguage()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!dropdownOpen) return
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [dropdownOpen])

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <Image
                src="/images/doho_transparent.png"
                alt="Shidokan Indonesia"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-widest text-[#F2F2F2] uppercase">
                Shidokan<span className="text-[#DC2626]">ID</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            </Link>
            <p className="text-[#888888] text-sm leading-relaxed mb-6 font-sans">
              {lang === 'id'
                ? 'The Triathlon of Martial Arts. Menempa petarung yang disiplin lewat karate, kickboxing, dan grappling sejak 1981.'
                : 'The Triathlon of Martial Arts. Forging disciplined warriors through karate, Kickboxing, and grappling since 1981.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/shidokan.id?igsh=MWk2bnljMzdkMTVlNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#888888] hover:text-[#F2F2F2] hover:border-[#DC2626] transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=628175061100"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#888888] hover:text-[#F2F2F2] hover:border-[#DC2626] transition-colors"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[#F2F2F2] tracking-widest uppercase text-sm mb-6">
              {lang === 'id' ? 'Tautan Cepat' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                'dropdown' in link ? (
                  <li key={link.id} ref={dropdownRef} className="relative w-fit">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="flex items-center gap-1 text-[#888888] hover:text-[#DC2626] text-sm font-sans transition-colors"
                      aria-expanded={dropdownOpen}
                    >
                      {lang === 'id' ? link.id : link.en}
                      <ChevronRight
                        size={14}
                        className={`transition-colors duration-200 ${dropdownOpen ? 'text-[#DC2626]' : ''}`}
                      />
                    </button>
                    <div
                      className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 w-44 bg-[#0A0A0A] border border-white/10 shadow-lg py-2 z-20 origin-left transition-[opacity,transform] duration-200 ease-out ${
                        dropdownOpen
                          ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto'
                          : 'opacity-0 scale-95 -translate-x-1 pointer-events-none'
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-sans text-[#888888] hover:text-[#F2F2F2] hover:bg-white/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#888888] hover:text-[#DC2626] text-sm font-sans transition-colors"
                    >
                      {lang === 'id' ? link.id : link.en}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-[#F2F2F2] tracking-widest uppercase text-sm mb-6">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#DC2626] mt-0.5 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.+Kalisari+I+No.1%2C+RT.001%2FRW.11%2C+Kapasari%2C+Kec.+Genteng%2C+Surabaya%2C+Jawa+Timur+60272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#F2F2F2] text-sm font-sans leading-relaxed transition-colors"
                >
                  Jl. Kalisari I No.1, RT.001/RW.11, Kapasari,<br />
                  Kec. Genteng, Surabaya, Jawa Timur 60272
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#DC2626] shrink-0" />
                <a href="https://api.whatsapp.com/send?phone=628175061100" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F2F2F2] text-sm font-sans transition-colors">
                  +62 817-5061-100 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#DC2626] mt-0.5 shrink-0" />
                <div className="text-[#888888] text-sm font-sans leading-relaxed">
                  <p>{lang === 'id' ? 'Senin–Jumat: Buka 24 jam' : 'Mon–Fri: Open 24 hours'}</p>
                  <p>{lang === 'id' ? 'Minggu: Tutup' : 'Sunday: Closed'}</p>
                </div>
              </li>
            </ul>

            <div className="mt-5 border border-white/10 overflow-hidden h-40">
              <iframe
                title="Lokasi Shidokan Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m2!2m1!1sJl.%20Kalisari%20I%20No.1%2C%20RT.001%2FRW.11%2C%20Kapasari%2C%20Kec.%20Genteng%2C%20Surabaya%2C%20Jawa%20Timur%2060272"
                className="w-full h-full grayscale-40 contrast-125"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555555] text-xs font-sans">
            &copy; 2026 Shidokan. {lang === 'id' ? 'Semua hak dilindungi.' : 'All rights reserved.'}
          </p>
          <p className="text-[#555555] text-xs font-sans">
            {lang === 'id' ? 'Ditempa dalam disiplin. Dibangun untuk bertahan.' : 'Forged in discipline. Built to last.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
