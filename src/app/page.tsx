import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { FluidCanvas } from "@/components/FluidCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between z-10 selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      <CustomCursor />
      <FluidCanvas />
      <div className="bg-vignette" />
      <div className="bg-grid" />
      <div className="noise-layer" />

      {/* Top Header */}
      <header className="relative z-20 w-full max-w-[1720px] mx-auto px-8 md:px-12 py-7 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-3 text-[var(--fg)] group text-decoration-none">
          <div className="w-8 h-8 rounded-full border border-[var(--line-2)] bg-[var(--card-bg)] flex items-center justify-center shadow-lg group-hover:border-[var(--fg)] transition-all">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5l8 14 8-14" />
            </svg>
          </div>
          <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase">VYB</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-7 font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--muted-2)]">
            <span>2026</span>
            <span>/</span>
            <span>PRIVATE BUILD</span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-full border border-[var(--line-2)] bg-[var(--card-bg)] text-[11px] font-mono tracking-widest uppercase text-[var(--fg)] hover:border-[var(--fg)] transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <main className="relative z-20 flex-1 w-full max-w-[1720px] mx-auto px-8 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-[1.25fr_1px_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Hero Announcement */}
        <div className="flex flex-col justify-center py-6">
          <div className="flex items-center gap-4 mb-8 text-[var(--muted)] font-mono text-[10px] tracking-[0.2em] uppercase">
            <div className="w-8 h-[1px] bg-[var(--line-2)]" />
            <span>ANNOUNCEMENT 001</span>
          </div>

          <h1 className="font-serif text-[clamp(52px,8vw,120px)] leading-[0.88] tracking-[-0.04em] mb-8 text-[var(--fg)]">
            Something new <br />
            <span className="italic font-normal text-[var(--fg-2)]">is coming.</span>
          </h1>

          <p className="max-w-[440px] text-base leading-relaxed text-[var(--muted)] tracking-tight mb-8">
            The internet gave us a thousand places to be. <strong className="text-[var(--fg)] font-medium">VYB</strong> is a quiet, crafted space to bring them together into one single link.
          </p>

          <div className="w-full max-w-[440px] h-[1px] bg-[var(--line)] mb-8" />

          {/* Manifesto Teaser */}
          <div className="flex items-start gap-5 mb-10">
            <span className="font-mono text-xs text-[var(--muted-2)] mt-1">01</span>
            <div className="font-serif text-2xl sm:text-3xl leading-snug text-[var(--fg)]">
              “One identity. One place. <span className="italic text-[var(--muted)]">One link.”</span>
            </div>
          </div>

          {/* Waitlist Access Form */}
          <div className="flex flex-col gap-4 max-w-[380px]">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[var(--muted)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8E2D9] shadow-[0_0_10px_rgba(245,242,237,0.7)] animate-pulse" />
              <span>CLAIM YOUR HANDLE EARLY</span>
            </div>
            <WaitlistForm />
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div className="hidden lg:block w-[1px] h-full bg-[var(--line)]" />

        {/* Right Column: Platform Information Panel */}
        <div className="flex flex-col justify-center gap-8 py-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted-2)]">
              WHY VYB EXISTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight tracking-tight text-[var(--fg)]">
              Your identity shouldn't be scattered across 10+ different URLs.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] italic leading-relaxed">
              Instagram, GitHub, YouTube, portfolio, and work destinations combined into one clean URL: getvyb.vercel.app/you
            </p>
          </div>

          <div className="w-full h-[1px] bg-[var(--line)]" />

          {/* How It Works Steps */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted-2)]">
              HOW IT WORKS
            </span>

            <div className="flex flex-col gap-3">
              <div className="pl-4 border-l border-[var(--line-2)] hover:border-[var(--fg)] transition-colors py-1">
                <span className="font-mono text-xs font-medium text-[var(--fg)] uppercase tracking-wider block">01 / Claim Handle</span>
                <span className="text-xs text-[var(--muted)]">Reserve your username (e.g. getvyb.vercel.app/sagar).</span>
              </div>

              <div className="pl-4 border-l border-[var(--line-2)] hover:border-[var(--fg)] transition-colors py-1">
                <span className="font-mono text-xs font-medium text-[var(--fg)] uppercase tracking-wider block">02 / Connect Destinations</span>
                <span className="text-xs text-[var(--muted)]">Add your work, code, media, store, and social links.</span>
              </div>

              <div className="pl-4 border-l border-[var(--line-2)] hover:border-[var(--fg)] transition-colors py-1">
                <span className="font-mono text-xs font-medium text-[var(--fg)] uppercase tracking-wider block">03 / Share Anywhere</span>
                <span className="text-xs text-[var(--muted)]">One single URL representing your full digital presence.</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[var(--line)]" />

          {/* Built For Audience Badges */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted-2)]">
              BUILT FOR
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--fg-2)] font-mono">
              <span className="hover:text-[var(--fg)] transition-colors">Creators</span>
              <span className="text-[var(--muted-2)]">/</span>
              <span className="hover:text-[var(--fg)] transition-colors">Designers</span>
              <span className="text-[var(--muted-2)]">/</span>
              <span className="hover:text-[var(--fg)] transition-colors">Developers</span>
              <span className="text-[var(--muted-2)]">/</span>
              <span className="hover:text-[var(--fg)] transition-colors">Freelancers</span>
              <span className="text-[var(--muted-2)]">/</span>
              <span className="hover:text-[var(--fg)] transition-colors">Musicians</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full max-w-[1720px] mx-auto px-8 md:px-12 py-7 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono text-[var(--muted-2)]">
        <div>
          <span>© 2026 VYB. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/manifesto" className="text-[var(--muted-2)] hover:text-[var(--fg)] transition-colors">
            Read Manifesto →
          </Link>
          <span>/</span>
          <a href="https://getvyb.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-2)] hover:text-[var(--fg)] transition-colors">
            Website
          </a>
          <span>/</span>
          <a href="https://github.com/sagarmurkute" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-2)] hover:text-[var(--fg)] transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
