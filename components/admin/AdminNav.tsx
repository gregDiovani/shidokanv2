'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/mock-auth'

export default function AdminNav({ title }: { title: string }) {
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.replace('/admin/login')
  }

  return (
    <header className="border-b border-white/10 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display font-bold text-lg tracking-widest text-[#F2F2F2] uppercase">
            Shidokan <span className="text-[#DC2626]">Admin</span>
          </Link>
          <span className="hidden sm:block w-px h-5 bg-white/10" />
          <span className="hidden sm:block font-sans text-sm text-[#888888]">{title}</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/news"
            className="font-sans text-xs text-[#888888] hover:text-[#F2F2F2] tracking-wider uppercase transition-colors"
          >
            View Site
          </Link>
          <button
            onClick={handleLogout}
            className="font-display text-xs font-semibold tracking-widest uppercase text-[#DC2626] hover:text-[#F87171] transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
