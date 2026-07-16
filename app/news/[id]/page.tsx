import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsCard from '@/components/NewsCard'
import { newsArticles } from '@/lib/news-data'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ id: a.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const article = newsArticles.find((a) => a.id === id)
  if (!article) return {}
  return {
    title: `${article.title} | Shidokan News`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params
  const article = newsArticles.find((a) => a.id === id)

  if (!article) notFound()

  const related = newsArticles.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/50 to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <span className="inline-block bg-[#DC2626] text-white font-display text-xs tracking-widest uppercase px-3 py-1 font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="font-display font-bold text-[#F2F2F2] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight text-balance">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
            <time className="text-[#555555] font-sans text-sm tracking-wider uppercase">{article.date}</time>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#888888] hover:text-[#F2F2F2] font-display text-sm tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              All News
            </Link>
          </div>

          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-[#888888] font-sans text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-16">
              <div className="flex items-center gap-3 mb-12">
                <span className="block w-8 h-px bg-[#DC2626]" />
                <span className="font-display text-[#DC2626] text-sm tracking-[0.2em] uppercase font-semibold">More from the Dojo</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((post, i) => (
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
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
