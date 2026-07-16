'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import NewsCard from '@/components/NewsCard'

const latestNews = [
  {
    id: 'regional-tournament-results',
    category: 'Competition',
    title: 'Shidokan Sweeps Regional Tournament with Five Gold Medals',
    excerpt:
      'Our competitors dominated the mat at this year\'s Regional Open, bringing home five gold medals across four divisions and setting a new dojo record.',
    date: 'June 28, 2026',
    image: '/images/news-tournament.png',
  },
  {
    id: 'summer-intensive-program',
    category: 'Training',
    title: 'Summer Intensive Training Camp Now Open for Registration',
    excerpt:
      'The annual Summer Intensive is back. Two weeks of morning sessions, technical seminars, and conditioning designed to fast-track your development.',
    date: 'June 15, 2026',
    image: '/images/news-training.png',
  },
  {
    id: 'black-belt-grading-june',
    category: 'Grading',
    title: 'Three Students Earn Black Belt in June Grading Ceremony',
    excerpt:
      'After years of dedication, three of our students achieved the rank of Shodan in a rigorous three-hour grading session before a full panel of black belts.',
    date: 'June 3, 2026',
    image: '/images/news-grading.png',
  },
]

export default function NewsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <SectionHeading
          eyebrow="Dojo News"
          title="Latest from the Dojo"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0"
        >
          <Link
            href="/news"
            className="border border-white/20 hover:border-[#DC2626] text-[#888888] hover:text-[#DC2626] font-display text-sm tracking-widest uppercase px-6 py-3 transition-colors duration-200 inline-block"
          >
            View All News
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestNews.map((post, i) => (
          <NewsCard key={post.id} {...post} index={i} />
        ))}
      </div>
    </section>
  )
}
