import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import CTABanner from '@/components/home/CTABanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Shidokan | Our Story & Lineage',
  description:
    'Learn the history of Shidokan Karate — how Grandmaster Soeno created the Triathlon of Martial Arts and what sets our dojo apart.',
}

const milestones = [
  { year: '1981', event: 'Grandmaster Yoshiji Soeno founds Shidokan, combining full-contact karate, Muay Thai, and grappling.' },
  { year: '1989', event: 'The first Shidokan World Open Championship is held in Osaka, Japan — the toughest full-contact tournament in the world.' },
  { year: '1994', event: 'Shidokan expands internationally, with affiliated dojos opening across North America, Europe, and South America.' },
  { year: '2003', event: 'Our local dojo opens its doors for the first time, bringing the Shidokan system to this community.' },
  { year: '2012', event: 'Dojo celebrates its first generation of homegrown black belts — students who began as children and trained to Shodan.' },
  { year: '2026', event: 'With over 200 active students, the dojo continues to grow while maintaining the original standards of the Shidokan system.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-dojo.webp"
              alt="Shidokan dojo"
              fill
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">About Us</span>
            </div>
            <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 max-w-3xl text-balance">
              A Legacy Built on the Mat
            </h1>
            <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl">
              Shidokan is not just a style — it is a complete system, a philosophy, and a community of dedicated martial artists united by a common standard.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading eyebrow="Our Story" title="Where It All Began" />
              <div className="mt-8 space-y-4 text-[#888888] font-sans text-base leading-relaxed">
                <p>
                  In 1981, Grandmaster Yoshiji Soeno had a vision: create a martial art that could not be gamed, could not be faked, and could not be won through technicalities alone. The result was Shidokan — a system that combines classical karate precision, Muay Thai power, and grappling control into a single cohesive framework.
                </p>
                <p>
                  The name Shidokan means "the school of the way of the warrior." It is not just branding — it is a promise. Every student who walks through our door commits to a path of genuine development, measured not by trophy count but by character forged under pressure.
                </p>
                <p>
                  Our local dojo was founded with the same ethos. Every instructor on our floor trained to black belt under the same rigorous standards. Every curriculum decision is made with one question in mind: does this make our students better martial artists and better people?
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src="/images/shihan-portrait.webp"
                alt="Shidokan sensei"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-white font-semibold text-lg uppercase tracking-wide">Our Head Instructor</p>
                <Link href="/about/profile" className="font-display text-[#DC2626] text-sm tracking-widest uppercase">
                  Profile &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <SectionHeading eyebrow="Timeline" title="Four Decades of Excellence" />
            </div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="grid grid-cols-[80px_1fr] gap-8 items-start py-6 border-b border-white/5 last:border-0"
                >
                  <span className="font-display font-bold text-[#DC2626] text-2xl tracking-tight">{m.year}</span>
                  <p className="text-[#888888] font-sans text-base leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Ready to Begin?"
          subline="Take your first step. Your first class is free, no commitment required."
          buttonText="Try a Free Class"
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  )
}
