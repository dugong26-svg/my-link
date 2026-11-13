export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-950">
      <main className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-lg shadow-zinc-200/50 ring-1 ring-zinc-200/80 dark:bg-zinc-900 dark:shadow-none dark:ring-zinc-800">
        {/* 프로필 이미지 / 아바타 */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-md">
          <span className="text-3xl font-semibold tracking-wider">희진</span>
        </div>

        {/* 이름 */}
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          김희진
        </h1>

        {/* 직무 / 역할 타이틀 */}
        <p className="mt-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
          Frontend Developer
        </p>

        {/* 소개글 */}
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          사용자 중심의 경험과 지속 가능한 코드를 고민하는
          <br />
          한양대학교 개발자입니다.
          <br />
          새로운 기술을 탐구하고, 아이디어를 웹 서비스로
          <br />
          구현하는 과정을 즐깁니다.
        </p>

        {/* 심플한 구분선 및 링크 준비 섹션 */}
        <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex flex-wrap justify-center gap-1.5">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              #Frontend
            </span>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
              #Next.js
            </span>
            <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
              #TypeScript
            </span>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              #UX/UI
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
