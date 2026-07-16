'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { isLoggedIn } from '@/lib/mock-auth'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace('/admin/login')
      return
    }
    setChecked(true)
  }, [router])

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <span className="font-display text-[#666666] text-sm tracking-widest uppercase">Loading...</span>
      </div>
    )
  }

  return <>{children}</>
}
