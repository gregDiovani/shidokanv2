export interface NewsArticle {
  id: string
  category: string
  title: string
  excerpt: string
  date: string
  image: string
  content: string[]
}

// Kosong dulu — nanti diganti fetch ke API asli lewat getNewsList().
const mockNewsArticles: NewsArticle[] = []

export async function getNewsList(): Promise<NewsArticle[]> {
  // TODO: ganti dengan fetch API asli, contoh:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, { next: { revalidate: 3600 } })
  // return res.json()
  return mockNewsArticles
}
