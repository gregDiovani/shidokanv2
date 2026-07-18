'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import T from '@/components/T'
import { useLanguage } from '@/lib/i18n'

const faqs = [
  {
    question: {
      id: 'Apakah kelas pertama benar-benar gratis?',
      en: 'Is the first class really free?',
    },
    answer: {
      id: 'Ya. Setiap murid baru berhak atas satu kelas percobaan gratis tanpa komitmen apapun. Cukup datang dengan pakaian olahraga yang nyaman, sisanya kami yang siapkan.',
      en: 'Yes. Every new student gets one free trial class with no obligation. Just show up in comfortable workout clothes — we take care of the rest.',
    },
  },
  {
    question: {
      id: 'Mulai usia berapa bisa bergabung?',
      en: 'What age can students start?',
    },
    answer: {
      id: 'Shidokan menerima murid mulai usia 4 tahun (program anak) hingga dewasa. Kurikulum disesuaikan bertahap sesuai usia dan kemampuan, sampai program dewasa full-contact.',
      en: 'Shidokan accepts students from age 4 (kids program) through adult. The curriculum scales gradually by age and ability, up to the full-contact adult program.',
    },
  },
  {
    question: {
      id: 'Apa saja yang dipelajari di Shidokan?',
      en: 'What do you learn at Shidokan?',
    },
    answer: {
      id: 'Shidokan adalah "Triathlon of Martial Arts" — menggabungkan karate full-contact, kickboxing, dan grappling dalam satu sistem latihan yang utuh.',
      en: 'Shidokan is the "Triathlon of Martial Arts" — combining full-contact karate, kickboxing, and grappling into one complete training system.',
    },
  },
  {
    question: {
      id: 'Bagaimana sistem kenaikan sabuk (Kyu/Dan)?',
      en: 'How does the belt (Kyu/Dan) grading system work?',
    },
    answer: {
      id: 'Kenaikan tingkat mengikuti sistem Kyu dan Dan standar internasional, diuji langsung oleh Shihan atau penguji bersertifikat sesuai standar Shidokan Honbu Jepang.',
      en: 'Rank promotion follows the international Kyu and Dan system, tested directly by a Shihan or certified examiner per Shidokan Honbu Japan standards.',
    },
  },
  {
    question: {
      id: 'Dojo cabang ada di mana saja?',
      en: 'Where are the branch dojos located?',
    },
    answer: {
      id: 'Shidokan Indonesia punya jaringan dojo di berbagai kota — Surabaya, Bali, Jawa Barat, Sulawesi Tengah, dan terus berkembang. Cek daftar lengkapnya di halaman Dojo List.',
      en: 'Shidokan Indonesia has a dojo network across several cities — Surabaya, Bali, West Java, Central Sulawesi, and growing. Check the full list on the Dojo List page.',
    },
  },
  {
    question: {
      id: 'Apa yang perlu dibawa saat kelas pertama?',
      en: 'What should I bring to my first class?',
    },
    answer: {
      id: 'Cukup bawa diri dan pakaian olahraga yang nyaman untuk bergerak bebas. Perlengkapan latihan lain akan dijelaskan oleh instruktur di tempat.',
      en: 'Just bring yourself and comfortable workout clothes you can move freely in. Any other gear will be explained by the instructor on-site.',
    },
  },
  {
    question: {
      id: 'Bagaimana cara mendaftar atau bertanya lebih lanjut?',
      en: 'How do I register or ask more questions?',
    },
    answer: {
      id: 'Paling cepat lewat WhatsApp kami — klik tombol WhatsApp di navbar/footer, atau isi form di halaman Contact yang otomatis mengarahkan pesan kamu ke WhatsApp.',
      en: 'Fastest way is our WhatsApp — click the WhatsApp button in the navbar/footer, or fill out the form on the Contact page which routes your message straight to WhatsApp.',
    },
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { lang } = useLanguage()

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<T id="Pertanyaan yang Sering Diajukan" en="Frequently Asked Questions" />}
          subtitle={
            <T
              id="Belum ketemu jawaban yang kamu cari? Hubungi kami langsung lewat WhatsApp."
              en="Can't find the answer you're looking for? Reach out to us directly on WhatsApp."
            />
          }
          centered
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question.en} className="border border-white/10 bg-[#0D0D0D]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[#F2F2F2] text-sm sm:text-base font-semibold">
                    {lang === 'id' ? faq.question.id : faq.question.en}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#888888] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5">
                    <p className="text-[#888888] font-sans text-sm leading-relaxed">
                      {lang === 'id' ? faq.answer.id : faq.answer.en}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
