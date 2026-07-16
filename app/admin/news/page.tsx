'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'
import AdminGuard from '@/components/admin/AdminGuard'
import AdminNav from '@/components/admin/AdminNav'
import { newsArticles as initialArticles, type NewsArticle } from '@/lib/news-data'

function AdminNewsList() {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles)

  const handleDelete = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <>
      <AdminNav title="Manage News" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#DC2626]" />
              <span className="font-display text-[#DC2626] text-xs tracking-[0.2em] uppercase font-semibold">
                Dojo News
              </span>
            </div>
            <h1 className="font-display font-bold text-[#F2F2F2] text-3xl uppercase tracking-tight">
              Manage Articles
            </h1>
          </div>
          <Link
            href="/admin/news/new"
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 transition-colors duration-200"
          >
            <Plus size={16} />
            Add News
          </Link>
        </div>

        <div className="border border-white/10 divide-y divide-white/10">
          {articles.length === 0 && (
            <div className="p-8 text-center font-sans text-[#666666] text-sm">
              Belum ada berita.
            </div>
          )}
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-[#0D0D0D]"
            >
              <div className="min-w-0">
                <span className="inline-block font-display text-[10px] font-semibold uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/10 px-2 py-1 mb-2">
                  {article.category}
                </span>
                <p className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wide truncate">
                  {article.title}
                </p>
                <p className="font-sans text-xs text-[#666666] mt-1">{article.date}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <Link
                  href={`/news/${article.id}`}
                  target="_blank"
                  className="font-sans text-xs text-[#888888] hover:text-[#F2F2F2] uppercase tracking-wider transition-colors"
                >
                  Preview
                </Link>
                <button
                  onClick={() => handleDelete(article.id)}
                  aria-label="Delete article"
                  className="text-[#888888] hover:text-[#DC2626] transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 font-sans text-xs text-[#666666]">
          Catatan: ini masih data mock — perubahan di halaman ini tidak tersimpan permanen sampai backend terhubung.
        </p>
      </main>
    </>
  )
}

export default function AdminNewsPage() {
  return (
    <AdminGuard>
      <AdminNewsList />
    </AdminGuard>
  )
}
