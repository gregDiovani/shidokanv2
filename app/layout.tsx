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
  title: 'Shidokan Karate — The Triathlon of Martial Arts',
  description:
    'Shidokan Karate combines full-contact karate, Muay Thai, and grappling into one complete martial arts system. Train with purpose. Earn your rank.',
  keywords: ['Shidokan', 'karate', 'martial arts', 'Muay Thai', 'grappling', 'dojo', 'self-defense'],
  openGraph: {
    title: 'Shidokan Karate',
    description: 'The Triathlon of Martial Arts',
    type: 'website',
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
