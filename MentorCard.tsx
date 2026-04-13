import Link from 'next/link'

export default function MentorCard({ mentor, isAlumni }: { mentor: any; isAlumni?: boolean }) {
  const initials = mentor.name?.slice(0, 1) || '?'
  const colors = ['bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-red-100 text-red-700', 'bg-purple-100 text-purple-700', 'bg-amber-100 text-amber-700']
  const color = colors[mentor.name?.charCodeAt(0) % colors.length] || colors[0]

  return (
    <Link href={`/profile/${mentor.id}`}>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 mb-2.5 active:scale-[0.98] transition-transform">
        <div className="flex gap-3 items-start">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0 ${color}`}>
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900 text-sm">{mentor.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{mentor.company} · {mentor.position || '재직중'}</p>
              </div>
              {isAlumni && (
                <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md whitespace-nowrap ml-2">★ 직속선배</span>
              )}
            </div>
            {mentor.school && (
              <p className="text-xs text-gray-400 mt-1">{mentor.school} {mentor.major}</p>
            )}
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {mentor.company && <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{mentor.company}</span>}
              {mentor.major && <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{mentor.major}</span>}
            </div>
            <div className="flex justify-between items-center mt-2.5">
              <span className="text-xs text-gray-400">⭐ 4.8</span>
              <span className="text-xs font-bold text-blue-700">무료</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
