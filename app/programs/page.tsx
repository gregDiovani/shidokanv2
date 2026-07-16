'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import CTABanner from '@/components/home/CTABanner'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const programs = [
  {
    id: 'cubs',
    title: 'Cubs',
    ageRange: 'Ages 4–5',
    tagline: 'Their First Step on the Path',
    description:
      'The Cubs program is designed specifically for our youngest students. Through age-appropriate games, movement exercises, and beginner karate fundamentals, Cubs develop coordination, focus, and the ability to follow structured instruction. Every class reinforces listening skills and builds the confidence that will serve them throughout their martial arts journey.',
    curriculum: ['Basic stances and movement', 'Counting in Japanese', 'Simple blocking and striking drills', 'Dojo etiquette and bowing', 'Fun coordination games'],
    schedule: 'Tuesday 5:15–5:45 PM | Saturday 10:15–10:45 AM',
  },
  {
    id: 'pre-lion',
    title: 'Pre-Lion',
    ageRange: 'Ages 5–8',
    tagline: 'Building the Foundation',
    description:
      'Pre-Lion bridges the gap between Cubs and the full youth curriculum. Students learn proper karate technique, begin progressing through the belt system, and develop the self-discipline required for more advanced training. Classes are structured, high-energy, and fun — while holding students to a genuine standard of performance.',
    curriculum: ['Traditional kata (forms)', 'Punching, kicking, and blocking combinations', 'Partner drills and light contact sparring', 'Basic self-defense scenarios', 'Mental discipline and focus'],
    schedule: 'Monday / Wednesday 5:00–5:45 PM | Saturday 10:45–11:30 AM',
  },
  {
    id: 'lion',
    title: 'Lion',
    ageRange: 'Ages 8–18',
    tagline: 'Where Champions Are Made',
    description:
      'The Lion program is our full youth curriculum. Students train in classical karate, Muay Thai striking, and basic grappling as they advance through the belt system toward black belt. This program demands real commitment — and delivers real results. Many of our national champions began in the Lion program.',
    curriculum: ['Full Shidokan curriculum: karate, Muay Thai, grappling', 'Kata and bunkai (applications)', 'Controlled full-contact sparring', 'Competition preparation', 'Physical conditioning and strength'],
    schedule: 'Tuesday / Thursday 6:00–7:00 PM | Saturday 11:30 AM–12:30 PM',
  },
  {
    id: 'adult',
    title: 'Adult',
    ageRange: 'Ages 18+',
    tagline: 'Real Training. Real Results.',
    description:
      'No pads, no participation trophies — just rigorous, honest martial arts training. The Adult program is open to all fitness levels but demands a warrior mindset. Students train the complete Shidokan system and are expected to participate in controlled sparring as they progress. This is the real thing.',
    curriculum: ['Full-contact karate fundamentals', 'Muay Thai striking: punches, kicks, knees, elbows', 'Grappling: takedowns, clinch, ground work', 'Competition preparation (optional)', 'Advanced conditioning and recovery'],
    schedule: 'Monday / Wednesday / Friday 7:00–8:30 PM | Saturday 9:00–10:30 AM',
  },
  {
    id: 'kata',
    title: 'Kata',
    ageRange: 'All Ages',
    tagline: 'The Living Textbook of Karate',
    description:
      'Kata is the preserved encyclopedia of karate technique — a sequence of movements encoding strikes, blocks, throws, and joint locks in a form that can be practiced alone. In this dedicated class, students study kata in depth: the movements, their applications (bunkai), and the principles behind them. A critical complement to sparring training.',
    curriculum: ['Traditional Shidokan and Kyokushin kata', 'Bunkai — practical applications of each kata', 'Breathing, visualization, and kiai', 'Competition kata preparation', 'Advanced forms for senior students'],
    schedule: 'Friday 6:00–7:00 PM',
  },
  {
    id: 'demo-team',
    title: 'Demo Team',
    ageRange: 'By Invitation Only',
    tagline: 'Representing Shidokan at the Highest Level',
    description:
      'The Demo Team is an elite group selected from our most dedicated students to represent the dojo at public events, competitions, and exhibitions. Members perform synchronized kata, breaking demonstrations, and technical showcases that display the full depth of the Shidokan system. Membership is by instructor invitation and requires a minimum rank.',
    curriculum: ['Advanced synchronized kata performance', 'Breaking techniques', 'Choreographed demonstration sequences', 'Public speaking and stage presence', 'National-level competition representation'],
    schedule: 'Sunday 10:00 AM–12:00 PM | Additional sessions as required',
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">Programs</span>
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 max-w-3xl text-balance">
            Training for Every Level
          </h1>
          <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl">
            From your first class at age four to advanced competition preparation, every Shidokan program is designed to develop real skill and genuine character.
          </p>
        </section>

        {/* Programs */}
        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] border border-white/5 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left */}
                <div className="p-8 lg:p-10 bg-[#0D0D0D] border-b lg:border-b-0 lg:border-r border-white/5">
                  <span className="font-display text-[#DC2626] text-xs tracking-[0.2em] uppercase font-semibold mb-2 block">
                    {program.ageRange}
                  </span>
                  <h2 className="font-display font-bold text-[#F2F2F2] text-4xl uppercase tracking-tight mb-2">
                    {program.title}
                  </h2>
                  <p className="text-[#555555] font-sans text-sm mb-6">{program.tagline}</p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="font-display text-[#555555] text-xs tracking-widest uppercase mb-1">Schedule</p>
                    <p className="text-[#888888] font-sans text-sm leading-relaxed">{program.schedule}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="p-8 lg:p-10 lg:col-span-2">
                  <p className="text-[#888888] font-sans text-base leading-relaxed mb-6">{program.description}</p>
                  <h3 className="font-display text-[#F2F2F2] text-sm tracking-[0.15em] uppercase font-semibold mb-4">
                    Curriculum Includes
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {program.curriculum.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#888888] font-sans text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 transition-colors group"
                  >
                    Enquire About This Program
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <CTABanner
          headline="Not Sure Where to Start?"
          subline="Come in for a free trial class. Our instructors will assess your level and recommend the right program."
          buttonText="Book a Free Trial"
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  )
}
