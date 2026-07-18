'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import T from '@/components/T'
import { useLanguage } from '@/lib/i18n'

const virtues = [
  {
    kanji: '律',
    name: { id: 'Disiplin', en: 'Discipline' },
    description: {
      id: 'Fondasi dari semua perkembangan. Setiap repetisi, setiap kelas, setiap sabuk diraih lewat usaha yang konsisten dan disengaja.',
      en: 'The foundation of all growth. Every rep, every class, every belt is earned through consistent, deliberate effort.',
    },
  },
  {
    kanji: '礼',
    name: { id: 'Hormat', en: 'Respect' },
    description: {
      id: 'Membungkuk pada lawan. Hormati sensei. Hormat bukan kelemahan — itu tanda seorang pesilat sejati.',
      en: 'Bow to your opponent. Honor your sensei. Respect is not weakness — it is the mark of a true martial artist.',
    },
  },
  {
    kanji: '勇',
    name: { id: 'Keberanian', en: 'Courage' },
    description: {
      id: 'Menginjak matras saat takut. Bertanding walau hasilnya tidak pasti. Keberanian adalah tindakan di tengah keraguan.',
      en: 'Step onto the mat when you are afraid. Compete when the outcome is uncertain. Courage is action in the face of doubt.',
    },
  },
  {
    kanji: '誠',
    name: { id: 'Integritas', en: 'Integrity' },
    description: {
      id: 'Berlatih dengan jujur. Uji batas kemampuan dengan jujur. Sebuah tingkatan tidak berarti apa-apa jika tidak benar-benar diraih.',
      en: 'Train honestly. Test your limits honestly. A rank means nothing if it was not genuinely earned.',
    },
  },
  {
    kanji: '制',
    name: { id: 'Kendali Diri', en: 'Self-Control' },
    description: {
      id: 'Kekuatan tanpa kendali itu berbahaya. Kami melatih tubuh dan pikiran secara seimbang.',
      en: 'Power without control is dangerous. We train the body and the mind in equal measure.',
    },
  },
  {
    kanji: '継',
    name: { id: 'Ketekunan', en: 'Perseverance' },
    description: {
      id: 'Jatuh tujuh kali, bangkit delapan kali. Jiwa Shidokan tidak pernah menyerah. Ia beradaptasi, pulih, dan terus maju.',
      en: 'Fall seven times, rise eight. The Shidokan spirit does not yield. It adapts, recovers, and pushes forward.',
    },
  },
]

export default function BushidoSection() {
  const { lang } = useLanguage()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bushido-warrior.png"
          alt="Bushido warrior"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            eyebrow={<T id="Filosofi" en="Philosophy" />}
            title={<T id="Dipandu oleh Bushido" en="Guided by Bushido" />}
            subtitle={
              <T
                id="Kode kesatria bukan peninggalan sejarah — itu adalah standar yang mengukur setiap praktisi Shidokan."
                en="The warrior's code is not a relic of history — it is the standard by which every Shidokan practitioner is measured."
              />
            }
          />
        </div>

        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[#DC2626] tracking-[0.2em] uppercase text-sm font-semibold mb-12"
          >
            <T id="Enam Nilai yang Kami Pegang" en="The Six Virtues We Live By" />
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {virtues.map((virtue, i) => (
            <motion.div
              key={virtue.name.en}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="group bg-[#111111]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-[#DC2626]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-display text-4xl text-[#DC2626]/40 leading-none group-hover:text-[#DC2626]/60 transition-colors">
                  {virtue.kanji}
                </span>
                <h3 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide mt-1">
                  {lang === 'id' ? virtue.name.id : virtue.name.en}
                </h3>
              </div>
              <p className="text-[#888888] text-sm font-sans leading-relaxed">
                {lang === 'id' ? virtue.description.id : virtue.description.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
