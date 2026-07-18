'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import NewsCard from '@/components/NewsCard'
import T from '@/components/T'
import type { NewsArticle } from '@/lib/news-data'

export default function NewsSection({ articles }: { articles: NewsArticle[] }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <SectionHeading
          eyebrow={<T id="Berita Dojo" en="Dojo News" />}
          title={<T id="Terbaru dari Dojo" en="Latest from the Dojo" />}
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
            <T id="Lihat Semua Berita" en="View All News" />
          </Link>
        </motion.div>
      </div>

      {articles.length === 0 ? (
        <p className="text-center font-sans text-sm text-[#666666] py-12">
          <T id="Belum ada berita saat ini." en="No news yet." />
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((post, i) => (
            <NewsCard
              key={post.id}
              id={post.id}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              index={i}
            />
          ))}
        </div>
      )}
    </section>
  )
}
