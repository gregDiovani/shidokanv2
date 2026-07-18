'use client'

import { useState } from 'react'
import { MapPin, Phone, /* Mail, */ Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'

export default function ContactPageBody() {
  const { lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const lines =
      lang === 'id'
        ? [
            `Halo Shidokan Indonesia, saya ingin coba kelas gratis.`,
            `Nama: ${form.name}`,
            form.message && `Pesan: ${form.message}`,
          ]
        : [
            `Hi Shidokan Indonesia, I'd like to try a free class.`,
            `Name: ${form.name}`,
            form.message && `Message: ${form.message}`,
          ]

    const waUrl = `https://api.whatsapp.com/send?phone=628175061100&text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? 'Hubungi Kami' : 'Get in Touch'}
          </span>
        </div>
        <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 max-w-3xl text-balance">
          {lang === 'id' ? 'Melangkah ke Matras' : 'Step on the Mat'}
        </h1>
        <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-xl">
          {lang === 'id'
            ? 'Kelas pertamamu gratis. Isi form dan kami akan menghubungimu dalam 24 jam untuk konfirmasi jadwal.'
            : 'Your first class is free. Fill out the form and we will be in touch within 24 hours to confirm your booking.'}
        </p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] border border-white/5 p-8"
            >
              <h2 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide mb-6">
                {lang === 'id' ? 'Info Kontak' : 'Contact Info'}
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">
                      {lang === 'id' ? 'Alamat' : 'Address'}
                    </p>
                    <p className="text-[#888888] font-sans text-sm leading-relaxed">
                      Jl. Kalisari I No.1, RT.001/RW.11, Kapasari,<br />
                      Kec. Genteng, Surabaya, Jawa Timur 60272, Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">WhatsApp</p>
                    <a href="https://api.whatsapp.com/send?phone=628175061100" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#F2F2F2] font-sans text-sm transition-colors">
                      +62 817-5061-100
                    </a>
                  </div>
                </div>
                {/* Email dinonaktifkan sementara — belum ada alamat resmi
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">Email</p>
                    <a href="mailto:info@shidokan.com" className="text-[#888888] hover:text-[#F2F2F2] font-sans text-sm transition-colors">
                      info@shidokan.com
                    </a>
                  </div>
                </div>
                */}
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">
                      {lang === 'id' ? 'Jam Buka' : 'Hours'}
                    </p>
                    <div className="text-[#888888] font-sans text-sm leading-relaxed space-y-0.5">
                      <p>{lang === 'id' ? 'Senin–Jumat: Buka 24 jam' : 'Mon–Fri: Open 24 hours'}</p>
                      <p>{lang === 'id' ? 'Minggu: Tutup' : 'Sunday: Closed'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#DC2626]/10 border border-[#DC2626]/20 p-6"
            >
              <p className="font-display text-[#DC2626] text-sm tracking-[0.15em] uppercase font-semibold mb-2">
                {lang === 'id' ? 'Kelas Percobaan Gratis' : 'Free Trial Class'}
              </p>
              <p className="text-[#888888] font-sans text-sm leading-relaxed">
                {lang === 'id'
                  ? 'Setiap murid baru berhak atas satu kelas percobaan gratis tanpa komitmen apapun. Cukup datang dengan pakaian olahraga yang nyaman — sisanya kami yang siapkan.'
                  : 'Every new student receives one free trial class with no obligation. Just show up in comfortable workout clothes — we will take care of the rest.'}
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 bg-[#111111] border border-white/5 p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12">
                <CheckCircle size={48} className="text-[#DC2626] mb-6" />
                <h2 className="font-display font-bold text-[#F2F2F2] text-3xl uppercase tracking-wide mb-4">
                  {lang === 'id' ? 'Mengarahkan ke WhatsApp' : 'Redirecting to WhatsApp'}
                </h2>
                <p className="text-[#888888] font-sans text-base leading-relaxed max-w-sm">
                  {lang === 'id' ? (
                    <>
                      Pesan kamu sudah kami siapkan di WhatsApp. Kalau tab baru tidak terbuka otomatis, hubungi kami langsung di{' '}
                      <a href="https://api.whatsapp.com/send?phone=628175061100" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] hover:underline">
                        +62 817-5061-100
                      </a>.
                    </>
                  ) : (
                    <>
                      Your message is ready on WhatsApp. If the new tab did not open automatically, reach us directly at{' '}
                      <a href="https://api.whatsapp.com/send?phone=628175061100" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] hover:underline">
                        +62 817-5061-100
                      </a>.
                    </>
                  )}
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide mb-8">
                  {lang === 'id' ? 'Form Pendaftaran' : 'Registration Form'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                      {lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
                      placeholder="Gregorio Diovani"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                      {lang === 'id' ? 'Pesan (opsional)' : 'Message (optional)'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors resize-none"
                      placeholder={
                        lang === 'id'
                          ? 'Contoh: Saya ingin daftar kelas, dojo mana yang terdekat dengan lokasi saya?'
                          : 'E.g. I would like to register for a class — which dojo is closest to my location?'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase py-4 transition-colors duration-200"
                  >
                    {lang === 'id' ? 'Kirim via WhatsApp' : 'Send via WhatsApp'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
