'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { Clock } from 'lucide-react'

const schedule = [
  {
    program: 'Cubs',
    ageRange: 'Ages 4–5',
    sessions: [
      { days: 'Tuesday', time: '5:15 – 5:45 PM' },
      { days: 'Saturday', time: '10:15 – 10:45 AM' },
    ],
  },
  {
    program: 'Pre-Lion',
    ageRange: 'Ages 5–8',
    sessions: [
      { days: 'Monday / Wednesday', time: '5:00 – 5:45 PM' },
      { days: 'Saturday', time: '10:45 – 11:30 AM' },
    ],
  },
  {
    program: 'Lion',
    ageRange: 'Ages 8–18',
    sessions: [
      { days: 'Tuesday / Thursday', time: '6:00 – 7:00 PM' },
      { days: 'Saturday', time: '11:30 AM – 12:30 PM' },
    ],
  },
  {
    program: 'Adult',
    ageRange: 'Ages 18+',
    sessions: [
      { days: 'Monday / Wednesday / Friday', time: '7:00 – 8:30 PM' },
      { days: 'Saturday', time: '9:00 – 10:30 AM' },
    ],
  },
  {
    program: 'Kata',
    ageRange: 'All Ages',
    sessions: [
      { days: 'Friday', time: '6:00 – 7:00 PM' },
    ],
  },
  {
    program: 'Demo Team',
    ageRange: 'By Invitation',
    sessions: [
      { days: 'Sunday', time: '10:00 AM – 12:00 PM' },
    ],
  },
]

export default function ScheduleSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <SectionHeading
          eyebrow="Weekly Schedule"
          title="Find Your Training Time"
          subtitle="Our class schedule is designed to fit around school and work. Find the right times and commit to your training."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map((item, i) => (
          <motion.div
            key={item.program}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
            className="bg-[#111111] border border-white/5 p-6 hover:border-[#DC2626]/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide">
                  {item.program}
                </h3>
                <span className="font-display text-[#DC2626] text-xs tracking-[0.2em] uppercase font-semibold">
                  {item.ageRange}
                </span>
              </div>
              <div className="w-8 h-8 bg-[#DC2626]/10 flex items-center justify-center">
                <Clock size={16} className="text-[#DC2626]" />
              </div>
            </div>
            <div className="space-y-3 border-t border-white/5 pt-4">
              {item.sessions.map((session, j) => (
                <div key={j} className="flex items-start justify-between gap-4">
                  <span className="text-[#888888] text-sm font-sans">{session.days}</span>
                  <span className="text-[#F2F2F2] text-sm font-sans font-medium whitespace-nowrap">
                    {session.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
