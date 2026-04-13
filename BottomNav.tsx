'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/home', icon: '🏠', label: '홈' },
  { href: '/search', icon: '🔍', label: '검색' },
  { href: '/bookings', icon: '📅', label: '예약' },
  { href: '/my-profile', icon: '👤', label: '내 정보' },
]

export default function BottomNav() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 flex items-center justify-around h-16 pb-1 z-50">
      {tabs.map(t => (
        <Link key={t.href} href={t.href}
          className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-colors ${path.startsWith(t.href) ? 'text-blue-700' : 'text-gray-400'}`}>
          <span className="text-xl">{t.icon}</span>
          <span className={`text-[10px] font-semibold ${path.startsWith(t.href) ? 'text-blue-700' : 'text-gray-400'}`}>{t.label}</span>
        </Link>
      ))}
    </nav>
  )
}
