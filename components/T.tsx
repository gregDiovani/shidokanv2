'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/lib/i18n'

export default function T({ id, en }: { id: ReactNode; en: ReactNode }) {
  const { lang } = useLanguage()
  return <>{lang === 'id' ? id : en}</>
}
