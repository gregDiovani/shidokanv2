import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://budokarate.or.id'),
  title: 'Shidokan Indonesia — The Triathlon of Martial Arts',
  description:
    'Shidokan Karate combines full-contact karate, Muay Thai, and grappling into one complete martial arts system. Train with purpose. Earn your rank.',
  keywords: ['Shidokan', 'karate', 'martial arts', 'Muay Thai', 'grappling', 'dojo', 'self-defense'],
  openGraph: {
    title: 'Shidokan Indonesia',
    description: 'The Triathlon of Martial Arts',
    url: '/',
    siteName: 'Shidokan Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/carousel/hero-bg1.webp', width: 1920, height: 1280 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shidokan Indonesia',
    description: 'The Triathlon of Martial Arts',
    images: ['/carousel/hero-bg1.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/doho_transparent.png',
    shortcut: '/images/doho_transparent.png',
    apple: '/images/doho_transparent.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-[#0A0A0A]`}>
      <body className="font-sans antialiased grain">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
