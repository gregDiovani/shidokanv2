'use client'

import { useLanguage } from '@/lib/i18n'

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label="Switch language"
      className={`font-display text-xs font-semibold tracking-widest uppercase border border-white/15 px-2.5 py-1 text-[#888888] hover:text-[#F2F2F2] hover:border-[#DC2626] transition-colors ${className}`}
    >
      {lang === 'id' ? 'EN' : 'ID'}
    </button>
  )
}
