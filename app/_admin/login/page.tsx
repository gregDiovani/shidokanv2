'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { login, MOCK_CREDENTIALS } from '@/lib/mock-auth'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (login(email, password)) {
      router.push('/admin/news')
    } else {
      setError('Email atau password salah.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="font-display font-bold text-2xl tracking-widest text-[#F2F2F2] uppercase">
            Shidokan
          </Link>
          <div className="flex items-center justify-center gap-3 mt-4 mb-2">
            <span className="block w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-[#DC2626] text-xs tracking-[0.2em] uppercase font-semibold">
              Admin Panel
            </span>
            <span className="block w-8 h-px bg-[#DC2626]" />
          </div>
          <h1 className="font-display font-bold text-[#F2F2F2] text-2xl uppercase tracking-tight">
            Sign In
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="border border-white/10 bg-[#0D0D0D] p-8 space-y-5">
          <div>
            <label className="block font-display text-xs font-semibold uppercase tracking-widest text-[#888888] mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@shidokan.com"
              className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
            />
          </div>

          <div>
            <label className="block font-display text-xs font-semibold uppercase tracking-widest text-[#888888] mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#DC2626] transition-colors"
            />
          </div>

          {error && (
            <p className="text-[#F87171] font-sans text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3.5 transition-colors duration-200"
          >
            Log In
          </button>

          <p className="text-center font-sans text-xs text-[#666666] pt-2">
            Demo — gunakan {MOCK_CREDENTIALS.email} / {MOCK_CREDENTIALS.password}
          </p>
        </form>
      </div>
    </div>
  )
}
