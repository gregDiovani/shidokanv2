'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

export default function IdentitySection() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Selamat Datang di Shidokan Indonesia"
              title="Membangun Karakter Melalui Bela Diri, Menginspirasi Indonesia yang Lebih Aktif"
              size="md"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-4 text-[#888888] font-sans text-base leading-relaxed"
            >
              <p>
              OSU...
              </p>
              
              <p>
                Sebagai Induk Organisasi Olahraga (INORGA) yang tergabung dalam Komite Olahraga Masyarakat Indonesia (KORMI), Shidokan Indonesia berkomitmen menghadirkan bela diri sebagai olahraga yang dapat dinikmati oleh seluruh lapisan masyarakat, sekaligus menjadi sarana pembentukan karakter, kesehatan, dan pengembangan diri sepanjang hayat.
              </p>
              <p>
                Berlandaskan filosofi Bushido, Shidokan tidak hanya mengajarkan teknik bertarung, tetapi juga menanamkan nilai disiplin, rasa hormat, keberanian, ketangguhan, kerendahan hati, dan tanggung jawab sebagai bekal menghadapi tantangan kehidupan modern.
              </p>
              <p>
                Bersama KORMI, kami mengajak seluruh masyarakat Indonesia untuk menjalani gaya hidup aktif, membangun tubuh yang sehat, mental yang kuat, serta menjadikan bela diri sebagai bagian dari perjalanan menuju kualitas hidup yang lebih baik.
              </p>
              <p className="border-l-2 border-[#DC2626] pl-4 italic text-[#F2F2F2] font-display tracking-wide">
                “Melatih Tubuh, Menguatkan Jiwa, Membentuk Karakter.”
              </p>
            </motion.div>
          </div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:sticky lg:top-28"
          >
            <div className="relative aspect-square overflow-hidden border border-white/10">
              <Image
                src="/images/home/Shidokan.png"
                alt="Shidokan crest emblem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/20" />
            </div>
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-white mt-8">
              <Image
                src="/images/home/kormi.png"
                alt="KORMI logo"
                fill
                className="object-contain p-4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
