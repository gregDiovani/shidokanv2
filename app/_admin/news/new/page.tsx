'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminGuard from '@/components/admin/AdminGuard'
import AdminNav from '@/components/admin/AdminNav'

const categories = ['Competition', 'Training', 'Grading', 'Dojo News']

function NewArticleForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [excerpt, setExcerpt] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submit — no backend wired up yet, this just simulates a save.
    setSubmitted(true)
    setTimeout(() => {
      router.push('/admin/news')
    }, 1200)
  }

  const inputClass =
    'w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors'
  const labelClass = 'block font-display text-xs font-semibold uppercase tracking-widest text-[#888888] mb-2'

  return (
    <>
      <AdminNav title="Add News" />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-xs tracking-[0.2em] uppercase font-semibold">
              New Article
            </span>
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-3xl uppercase tracking-tight">
            Tambah Berita
          </h1>
        </div>

        {submitted ? (
          <div className="border border-[#22C55E]/30 bg-[#22C55E]/10 px-6 py-5">
            <p className="font-display font-semibold text-[#22C55E] uppercase tracking-wide text-sm">
              Berita berhasil disimpan (mock)
            </p>
            <p className="font-sans text-sm text-[#888888] mt-1">Mengalihkan ke daftar berita...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-white/10 bg-[#0D0D0D] p-8 space-y-6">
            <div>
              <label className={labelClass}>Judul</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul berita"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputClass}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>URL Gambar</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/images/news-example.png"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Ringkasan (Excerpt)</label>
              <textarea
                required
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Ringkasan singkat berita untuk ditampilkan di card"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label className={labelClass}>Isi Berita</label>
              <textarea
                required
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tulis isi berita. Pisahkan tiap paragraf dengan baris baru."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-3.5 transition-colors duration-200"
              >
                Simpan Berita
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin/news')}
                className="font-display text-sm font-semibold uppercase tracking-widest text-[#888888] hover:text-[#F2F2F2] transition-colors"
              >
                Batal
              </button>
            </div>
          </form>
        )}
      </main>
    </>
  )
}

export default function NewArticlePage() {
  return (
    <AdminGuard>
      <NewArticleForm />
    </AdminGuard>
  )
}
