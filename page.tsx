'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError('이메일 또는 비밀번호를 확인해주세요.'); setLoading(false) }
    else router.push('/home')
  }

  async function handleKakao() {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: `${location.origin}/auth/callback` }
    })
  }

  return (
    <div className="flex flex-col min-h-screen px-7 justify-center">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-blue-700 tracking-tight mb-2">ChatFee</h1>
        <p className="text-gray-500 text-base leading-relaxed">커리어를 바꾸는<br />커피 한 잔</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">이메일</p>
          <input
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 transition-colors"
            type="email" placeholder="email@example.com"
            value={email} onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">비밀번호</p>
          <input
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 transition-colors"
            type="password" placeholder="비밀번호 입력"
            value={password} onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

      <button
        onClick={handleLogin} disabled={loading}
        className="w-full bg-blue-700 text-white font-semibold rounded-2xl py-4 text-sm transition-opacity active:opacity-80 disabled:opacity-50"
      >
        {loading ? '로그인 중...' : '로그인'}
      </button>

      <div className="text-center my-4 text-gray-400 text-sm">또는</div>

      <button
        onClick={handleKakao}
        className="w-full bg-yellow-300 text-gray-800 font-semibold rounded-2xl py-4 text-sm transition-opacity active:opacity-80"
      >
        카카오로 로그인
      </button>

      <p className="text-center mt-6 text-sm text-gray-500">
        계정이 없으신가요?{' '}
        <Link href="/signup" className="text-blue-700 font-semibold">회원가입</Link>
      </p>
    </div>
  )
}
