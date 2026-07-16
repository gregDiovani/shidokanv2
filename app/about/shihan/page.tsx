import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTABanner from '@/components/home/CTABanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Shihan | Shidokan Karate',
  description:
    'Learn about our head instructor — his background, achievements, and philosophy that shape the Shidokan dojo.',
}

const credentials = [
  { label: 'Rank', value: '7th Degree Black Belt — Shidokan' },
  { label: 'Additional', value: '5th Degree Black Belt — Kyokushin Karate' },
  { label: 'Muay Thai', value: 'Licensed trainer & former competitor' },
  { label: 'Grappling', value: 'Black Belt — Brazilian Jiu-Jitsu' },
  { label: 'Competition', value: '12 National Championship titles' },
  { label: 'Teaching', value: '25+ years of full-time instruction' },
]

export default function ShihanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">Meet Shihan</span>
          </div>
        </section>

        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 max-w-md">
              <Image
                src="/images/shihan-portrait.png"
                alt="Shihan — Head Instructor"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display font-bold text-white text-3xl uppercase tracking-wide">Shihan James Haruki</p>
                <p className="font-display text-[#DC2626] text-sm tracking-widest uppercase mt-1">Head Instructor & Dojo-cho</p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:pt-4">
              <h1 className="font-display font-bold text-[#F2F2F2] text-5xl md:text-6xl uppercase tracking-tight leading-none mb-8 text-balance">
                Forged Through <span className="text-[#DC2626]">Forty Years</span> of Training
              </h1>

              <div className="space-y-4 text-[#888888] font-sans text-base leading-relaxed mb-10">
                <p>
                  Shihan James Haruki began his martial arts journey at age eight under the guidance of a local karate master. By sixteen, he had competed at the national level. By twenty-four, he had earned his first black belt in Shidokan — a rank he describes as "the beginning, not the end."
                </p>
                <p>
                  Over the following decades, Shihan Haruki pursued mastery across every pillar of the Shidokan system. He trained in Thailand, competed across three continents, and studied under two of Grandmaster Soeno's original senior students. His depth of knowledge across striking, Muay Thai, and grappling is unmatched in our region.
                </p>
                <p>
                  But Shihan Haruki will tell you that his greatest achievement is not a trophy — it is the hundreds of students he has guided to black belt over 25 years of teaching. His philosophy is simple: the mat is the ultimate classroom, and the only test that matters is the one you put yourself through every day.
                </p>
                <p>
                  As Dojo-cho (head of the school), Shihan Haruki personally oversees curriculum, grading, and the culture of the dojo. He teaches multiple classes per week alongside his senior instructors and remains an active competitor in masters-division events.
                </p>
              </div>

              {/* Credentials */}
              <div className="border border-white/10 p-6">
                <h2 className="font-display font-semibold text-[#F2F2F2] text-lg uppercase tracking-wide mb-6">
                  Credentials
                </h2>
                <div className="space-y-3">
                  {credentials.map((c) => (
                    <div key={c.label} className="flex items-start gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="font-display text-[#DC2626] text-xs tracking-[0.15em] uppercase font-semibold w-28 shrink-0 mt-0.5">{c.label}</span>
                      <span className="text-[#888888] font-sans text-sm">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="block w-12 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">In His Own Words</span>
              <span className="block w-12 h-px bg-[#DC2626]" />
            </div>
            <blockquote className="font-display font-bold text-[#F2F2F2] text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight text-balance">
              &ldquo;I don&apos;t teach people how to fight. I teach people how to face themselves.&rdquo;
            </blockquote>
            <cite className="block mt-6 font-display text-[#555555] text-sm tracking-widest uppercase not-italic">
              — Shihan James Haruki, Dojo-cho
            </cite>
          </div>
        </section>

        <CTABanner
          headline="Train Under Shihan"
          subline="Your first class is free. Come see what real martial arts training looks like."
          buttonText="Book a Free Class"
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  )
}
