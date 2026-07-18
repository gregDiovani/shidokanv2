'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import T from '@/components/T'

export default function IdentitySection() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow={<T id="Identitas Kami" en="Our Identity" />}
              title={<T id="Tradisi. Disiplin. Jiwa." en="Tradition. Discipline. Spirit." />}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-4 text-[#888888] font-sans text-base leading-relaxed"
            >
              <p>
                <T
                  id="Didirikan oleh Grandmaster Yoshiji Soeno pada 1981, Shidokan lahir dari keyakinan bahwa pesilat modern harus serba bisa, teruji dalam pertarungan, dan kuat secara spiritual."
                  en="Founded by Grandmaster Yoshiji Soeno in 1981, Shidokan was born from a belief that the modern martial artist must be versatile, battle-tested, and spiritually grounded."
                />
              </p>
              <p>
                <T
                  id="Kami meneruskan tradisi itu. Lambang kami mewakili persatuan tiga aliran bela diri, komitmen pada latihan seumur hidup, dan jiwa Bushido yang membimbing setiap murid yang menginjak matras kami."
                  en="We carry that tradition forward. Our crest represents the union of three arts, the commitment to lifelong training, and the Bushido spirit that guides every student who steps onto our mat."
                />
              </p>
              <p>
                <T
                  id="Ini bukan sekadar kebugaran. Ini bukan sekadar olahraga. Ini adalah jalan hidup."
                  en="This is not fitness. This is not sport. This is a way of life."
                />
              </p>
            </motion.div>
          </div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden border border-white/10">
                <Image
                  src="/images/shidokan-crest.webp"
                  alt="Shidokan crest emblem"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/20" />
              </div>
              <p className="text-[#555555] text-xs font-sans text-center tracking-wider uppercase">
                <T id="Lambang Shidokan" en="The Shidokan Crest" />
              </p>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative aspect-square overflow-hidden border border-white/10">
                <Image
                  src="/images/dojo-logo.webp"
                  alt="Shidokan dojo logo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/20" />
              </div>
              <p className="text-[#555555] text-xs font-sans text-center tracking-wider uppercase">
                <T id="Lencana Dojo" en="Dojo Badge" />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
