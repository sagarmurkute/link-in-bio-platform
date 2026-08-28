import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";

export const metadata = {
  title: "The VYB Manifesto — One identity. One place. One link.",
  description: "The philosophy behind VYB — unifying your online presence into one simple space.",
};

export default function ManifestoPage() {
  return (
    <div className="page loaded">
      {/* Background Elements */}
      <div className="bg-wrap">
        <FluidCanvas />
        <div className="bg-vignette" />
      </div>

      {/* Header */}
      <header className="header">
        <Link href="/" className="brand-link">
          <div className="brand-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span>VYB</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="footer-link font-extrabold text-sm">
            ← Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Editorial Manifesto Layout */}
      <main className="main py-12 flex flex-col max-w-4xl mx-auto">
        <article className="flex flex-col gap-8">
          <h1 className="headline text-6xl sm:text-7xl">
            The internet is full of places to be.<br />
            <span className="text-[#D2E823]">VYB is a place to bring them together.</span>
          </h1>

          <div className="w-full h-[1px] bg-[var(--line)]" />

          <div className="flex flex-col gap-6 text-xl leading-relaxed font-semibold text-[var(--fg-2)]">
            <p className="text-2xl text-[var(--fg)] font-bold">
              Your identity shouldn’t be scattered across platforms. Your Instagram, TikTok, GitHub, portfolio, YouTube, and work destinations shouldn’t require people to hunt for you.
            </p>

            <p>
              Every day, creators, designers, developers, freelancers, musicians, businesses, and students create valuable work across dozens of services. Yet, sharing your online presence remains fragmented across disjointed profiles and long bio links.
            </p>

            <blockquote className="p-6 rounded-3xl bg-[var(--fg)] text-[var(--bg)] font-extrabold text-3xl my-4">
              “VYB gives every person their own digital space.”
            </blockquote>

            <p>
              A single URL — <code className="px-3 py-1 rounded-xl bg-black/20 text-[#D2E823] font-mono text-lg">getvyb.vercel.app/yourname</code> — that becomes your central online identity. A quiet, intentional space for everything you build, write, and share online.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <span>© 2026 VYB Platform. Made with intention.</span>
        </div>
      </footer>
    </div>
  );
}
