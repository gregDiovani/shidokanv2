import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/about/shihan', label: 'Meet Shihan' },
  { href: '/programs', label: 'Programs' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/news', label: 'Dojo News' },
  { href: '/contact', label: 'Contact' },
]

const programs = [
  { href: '/programs#cubs', label: 'Cubs (4–5)' },
  { href: '/programs#pre-lion', label: 'Pre-Lion (5–8)' },
  { href: '/programs#lion', label: 'Lion (8–18)' },
  { href: '/programs#adult', label: 'Adult (18+)' },
  { href: '/programs#kata', label: 'Kata (All Ages)' },
  { href: '/programs#demo-team', label: 'Demo Team' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="font-display font-bold text-2xl tracking-widest text-[#F2F2F2] uppercase">
                Shidokan
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            </Link>
            <p className="text-[#888888] text-sm leading-relaxed mb-6 font-sans">
              The Triathlon of Martial Arts. Forging disciplined warriors through karate,
              Muay Thai, and grappling since 1981.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#888888] hover:text-[#F2F2F2] hover:border-[#DC2626] transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#888888] hover:text-[#F2F2F2] hover:border-[#DC2626] transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[#F2F2F2] tracking-widest uppercase text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#DC2626] text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-[#F2F2F2] tracking-widest uppercase text-sm mb-6">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[#888888] hover:text-[#DC2626] text-sm font-sans transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-[#F2F2F2] tracking-widest uppercase text-sm mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#DC2626] mt-0.5 shrink-0" />
                <span className="text-[#888888] text-sm font-sans leading-relaxed">
                  123 Dojo Lane, Suite 200<br />
                  Your City, ST 00000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#DC2626] shrink-0" />
                <a href="tel:+15551234567" className="text-[#888888] hover:text-[#F2F2F2] text-sm font-sans transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#DC2626] shrink-0" />
                <a href="mailto:info@shidokan.com" className="text-[#888888] hover:text-[#F2F2F2] text-sm font-sans transition-colors">
                  info@shidokan.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#DC2626] mt-0.5 shrink-0" />
                <div className="text-[#888888] text-sm font-sans leading-relaxed">
                  <p>Mon–Fri: 4:00 PM – 8:00 PM</p>
                  <p>Saturday: 9:00 AM – 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555555] text-xs font-sans">
            &copy; 2026 Shidokan. All rights reserved.
          </p>
          <p className="text-[#555555] text-xs font-sans">
            Forged in discipline. Built to last.
          </p>
        </div>
      </div>
    </footer>
  )
}
