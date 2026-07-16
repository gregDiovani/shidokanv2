import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsCard from '@/components/NewsCard'
import { newsArticles } from '@/lib/news-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dojo News | Shidokan Karate',
  description:
    'Stay up to date with the latest news, competition results, grading announcements, and events from Shidokan Karate.',
}

export default function NewsPage() {
  const [featured, ...rest] = newsArticles

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">Latest News</span>
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none max-w-3xl text-balance">
            From the Dojo
          </h1>
        </section>

        {/* All articles */}
        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>
      </main>
      <Footer />
    </>
  )
}
