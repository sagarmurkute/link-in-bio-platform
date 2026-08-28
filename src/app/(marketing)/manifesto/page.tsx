import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "The VYB Manifesto — One identity. One place. One link.",
  description: "The philosophy behind VYB — unifying your online presence into one simple space.",
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFFE3] text-[#111111] px-6 lg:px-12">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span className="font-black text-2xl tracking-tight text-[#111111]">VYB</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="font-extrabold text-sm text-[#111111] hover:text-[#FF0000] transition-colors no-underline">
            ← Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Manifesto Content */}
      <main className="w-full max-w-4xl mx-auto my-auto py-12 flex flex-col gap-8">
        <article className="flex flex-col gap-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-[#111111]">
            The internet is full of places to be.<br />
            <span className="text-[#FF0000]">VYB is a place to bring them together.</span>
          </h1>

          <div className="w-full h-[1px] bg-[rgba(200,200,180,0.5)]" />

          <div className="flex flex-col gap-6 text-xl leading-relaxed font-semibold text-[#444444]">
            <p className="text-2xl text-[#111111] font-bold">
              Your identity shouldn’t be scattered across platforms. Your Instagram, TikTok, GitHub, portfolio, YouTube, and work destinations shouldn’t require people to hunt for you.
            </p>

            <p>
              Every day, creators, designers, developers, freelancers, musicians, businesses, and students create valuable work across dozens of services. Yet, sharing your online presence remains fragmented across disjointed profiles and long bio links.
            </p>

            <blockquote className="p-8 rounded-3xl bg-[#111111] text-[#FFFFE3] font-extrabold text-2xl sm:text-3xl my-4">
              “VYB gives every person their own digital space.”
            </blockquote>

            <p>
              A single URL — <code className="px-3 py-1 rounded-xl bg-black/10 text-[#FF0000] font-mono text-lg font-bold">getvyb.vercel.app/yourname</code> — that becomes your central online identity. A quiet, intentional space for everything you build, write, and share online.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto h-20 flex items-center justify-between border-t border-[rgba(200,200,180,0.4)] text-xs font-bold text-[#888888]">
        <div>© 2026 VYB Platform. Made with intention.</div>
        <Link href="/" className="hover:text-[#FF0000] transition-colors no-underline">
          Home
        </Link>
      </footer>
    </div>
  );
}
