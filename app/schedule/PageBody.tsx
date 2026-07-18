'use client'

import CTABanner from '@/components/home/CTABanner'
import { motion } from 'framer-motion'
import { Clock, Calendar } from 'lucide-react'

const weeklySchedule = [
  {
    day: 'Monday',
    classes: [
      { time: '5:00 – 5:45 PM', program: 'Pre-Lion', ageRange: 'Ages 5–8', instructor: 'Sensei Rivera' },
      { time: '7:00 – 8:30 PM', program: 'Adult', ageRange: 'Ages 18+', instructor: 'Shihan Haruki' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '5:15 – 5:45 PM', program: 'Cubs', ageRange: 'Ages 4–5', instructor: 'Sensei Chen' },
      { time: '6:00 – 7:00 PM', program: 'Lion', ageRange: 'Ages 8–18', instructor: 'Sensei Rivera' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '5:00 – 5:45 PM', program: 'Pre-Lion', ageRange: 'Ages 5–8', instructor: 'Sensei Chen' },
      { time: '7:00 – 8:30 PM', program: 'Adult', ageRange: 'Ages 18+', instructor: 'Shihan Haruki' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '6:00 – 7:00 PM', program: 'Lion', ageRange: 'Ages 8–18', instructor: 'Shihan Haruki' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '6:00 – 7:00 PM', program: 'Kata', ageRange: 'All Ages', instructor: 'Shihan Haruki' },
      { time: '7:00 – 8:30 PM', program: 'Adult', ageRange: 'Ages 18+', instructor: 'Sensei Rivera' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '9:00 – 10:30 AM', program: 'Adult', ageRange: 'Ages 18+', instructor: 'Shihan Haruki' },
      { time: '10:15 – 10:45 AM', program: 'Cubs', ageRange: 'Ages 4–5', instructor: 'Sensei Chen' },
      { time: '10:45 – 11:30 AM', program: 'Pre-Lion', ageRange: 'Ages 5–8', instructor: 'Sensei Chen' },
      { time: '11:30 AM – 12:30 PM', program: 'Lion', ageRange: 'Ages 8–18', instructor: 'Sensei Rivera' },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      { time: '10:00 AM – 12:00 PM', program: 'Demo Team', ageRange: 'By Invitation', instructor: 'Shihan Haruki' },
    ],
  },
]

const programColors: Record<string, string> = {
  'Cubs': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Pre-Lion': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Lion': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Adult': 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20',
  'Kata': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Demo Team': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default function SchedulePageBody() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">Schedule</span>
        </div>
        <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none mb-6 max-w-3xl text-balance">
          Find Your Training Time
        </h1>
        <p className="text-[#888888] font-sans text-lg leading-relaxed max-w-2xl">
          We offer classes six days a week across all age groups and skill levels. Find a time that works for your schedule — and commit to it.
        </p>
      </section>

      {/* Weekly schedule */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {weeklySchedule.map((dayData, i) => (
            <motion.div
              key={dayData.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#111111] border border-white/5 overflow-hidden"
            >
              <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5 bg-[#0D0D0D]">
                <Calendar size={16} className="text-[#DC2626]" />
                <h2 className="font-display font-bold text-[#F2F2F2] text-xl uppercase tracking-wide">
                  {dayData.day}
                </h2>
                <span className="text-[#555555] font-sans text-sm ml-auto">
                  {dayData.classes.length} {dayData.classes.length === 1 ? 'class' : 'classes'}
                </span>
              </div>

              <div className="divide-y divide-white/5">
                {dayData.classes.map((cls, j) => (
                  <div key={j} className="flex flex-wrap items-center gap-4 px-6 py-4">
                    <div className="flex items-center gap-2 w-48">
                      <Clock size={14} className="text-[#555555]" />
                      <span className="text-[#F2F2F2] font-sans text-sm font-medium">{cls.time}</span>
                    </div>
                    <span className={`border font-display text-xs tracking-widest uppercase px-3 py-1 font-semibold ${programColors[cls.program] || 'bg-white/5 text-white/60 border-white/10'}`}>
                      {cls.program}
                    </span>
                    <span className="text-[#555555] font-sans text-sm">{cls.ageRange}</span>
                    <span className="text-[#888888] font-sans text-sm ml-auto">{cls.instructor}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] border border-[#DC2626]/20 p-6">
          <p className="text-[#888888] font-sans text-sm leading-relaxed">
            <span className="text-[#DC2626] font-semibold">Note: </span>
            Schedule is subject to change for holidays, seminars, and grading events. Follow our social media or check with the front desk for the most current information.
            First-time students should arrive 10 minutes early to complete an enrollment form.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to Train?"
        subline="Your first class is free. No contract, no pressure."
        buttonText="Book Your First Class"
        buttonHref="/contact"
        dark={false}
      />
    </>
  )
}
