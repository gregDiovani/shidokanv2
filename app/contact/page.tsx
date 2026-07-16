'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const programs = [
  'Cubs (Ages 4–5)',
  'Pre-Lion (Ages 5–8)',
  'Lion (Ages 8–18)',
  'Adult (Ages 18+)',
  'Kata (All Ages)',
  'Demo Team',
  'Not sure — help me decide',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production, send to an API route or form service
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">Get in Touch</span>
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 max-w-3xl text-balance">
            Step on the Mat
          </h1>
          <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-xl">
            Your first class is free. Fill out the form and we will be in touch within 24 hours to confirm your booking.
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
                  Contact Info
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">Address</p>
                      <p className="text-[#888888] font-sans text-sm leading-relaxed">
                        123 Dojo Lane, Suite 200<br />
                        Your City, ST 00000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">Phone</p>
                      <a href="tel:+15551234567" className="text-[#888888] hover:text-[#F2F2F2] font-sans text-sm transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">Email</p>
                      <a href="mailto:info@shidokan.com" className="text-[#888888] hover:text-[#F2F2F2] font-sans text-sm transition-colors">
                        info@shidokan.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-[#DC2626] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display text-[#F2F2F2] text-sm tracking-wide uppercase font-semibold mb-1">Hours</p>
                      <div className="text-[#888888] font-sans text-sm leading-relaxed space-y-0.5">
                        <p>Mon–Fri: 4:00 PM – 8:30 PM</p>
                        <p>Saturday: 8:30 AM – 1:00 PM</p>
                        <p>Sunday: By appointment</p>
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
                  Free Trial Class
                </p>
                <p className="text-[#888888] font-sans text-sm leading-relaxed">
                  Every new student receives one free trial class with no obligation. Just show up in comfortable workout clothes — we will take care of the rest.
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
                    Message Received
                  </h2>
                  <p className="text-[#888888] font-sans text-base leading-relaxed max-w-sm">
                    Thank you for reaching out. A member of our team will contact you within 24 hours to confirm your free trial class.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide mb-8">
                    Book Your Free Trial Class
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="program" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                          Program of Interest
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={form.program}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-white/10 text-[#888888] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
                        >
                          <option value="">Select a program</option>
                          {programs.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-display text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors resize-none"
                        placeholder="Tell us about your martial arts experience, goals, or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase py-4 transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
