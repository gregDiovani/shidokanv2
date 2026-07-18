'use client'

import NewsCard from '@/components/NewsCard'
import { useLanguage } from '@/lib/i18n'
import type { NewsArticle } from '@/lib/news-data'

export default function NewsPageBody({ newsArticles }: { newsArticles: NewsArticle[] }) {
  const { lang } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">
            {lang === 'id' ? 'Berita Terbaru' : 'Latest News'}
          </span>
        </div>
        <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none max-w-3xl text-balance">
          {lang === 'id' ? 'Dari Dojo' : 'From the Dojo'}
        </h1>
      </section>

      {/* All articles */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {newsArticles.length === 0 ? (
          <p className="text-center font-sans text-sm text-[#666666] py-12">
            {lang === 'id' ? 'Belum ada berita saat ini.' : 'No news yet.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <NewsCard
                key={article.id}
                id={article.id}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                image={article.image}
                index={i}
              />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
