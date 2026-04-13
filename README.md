# ChatFee 🍵

커리어를 바꾸는 커피 한 잔 — 유료 커피챗 매칭 플랫폼

## 배포 방법 (Vercel)

### 1단계 — GitHub에 올리기

1. [github.com](https://github.com) 로그인
2. 우측 상단 **"+"** → **"New repository"** 클릭
3. Repository name: `chatfee`
4. **"Create repository"** 클릭
5. 생성된 페이지에서 **"uploading an existing file"** 클릭
6. 이 폴더 안의 모든 파일을 드래그 앤 드롭
7. **"Commit changes"** 클릭

### 2단계 — Vercel에 배포하기

1. [vercel.com](https://vercel.com) 로그인
2. **"Add New Project"** 클릭
3. GitHub 연동 후 `chatfee` 저장소 선택
4. **"Environment Variables"** 섹션에서 아래 두 개 추가:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://jagjuifnwkzslsaibjuo.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (본인 키 입력)
5. **"Deploy"** 클릭
6. 2~3분 후 `chatfee.vercel.app` 주소로 접속 가능!

## 기술 스택

- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **배포**: Vercel

## 화면 구성

| 경로 | 화면 |
|------|------|
| `/` | 로그인 |
| `/signup` | 회원가입 |
| `/home` | 홈 (멘토 피드) |
| `/search` | 멘토 검색 |
| `/profile/[id]` | 멘토 프로필 상세 |
| `/book/[id]` | 커피챗 예약 |
| `/bookings` | 예약 현황 |
| `/my-profile` | 내 정보 |
