import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChatFee',
  description: '커리어를 바꾸는 커피 한 잔',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
