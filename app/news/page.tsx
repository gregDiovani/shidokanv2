import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsPageBody from './PageBody'
import { getNewsList } from '@/lib/news-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dojo News | Shidokan Indonesia',
  description:
    'Stay up to date with the latest news, competition results, grading announcements, and events from Shidokan Indonesia.',
}

export default async function NewsPage() {
  const newsArticles = await getNewsList()

  return (
    <>
      <Navbar />
      <main>
        <NewsPageBody newsArticles={newsArticles} />
      </main>
      <Footer />
    </>
  )
}
