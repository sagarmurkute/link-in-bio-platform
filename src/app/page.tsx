import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { FluidCanvas } from "@/components/FluidCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between p-8 md:p-16 max-w-7xl mx-auto z-10 selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      <CustomCursor />
      <FluidCanvas />
      <div className="bg-vignette" />
      <div className="noise-layer" />

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center w-full">
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[var(--fg)]">
          <div className="w-7 h-7 rounded-full border border-[var(--line-2)] flex items-center justify-center bg-[var(--card-bg)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5l8 14 8-14" />
            </svg>
          </div>
          <span className="font-semibold">VYB</span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--line-2)] bg-[var(--card-bg)] text-xs font-mono tracking-wider text-[var(--fg)] hover:border-[var(--fg)] transition-all"
          >
            <span>Sign In</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Main Hero Body */}
      <main className="relative z-20 my-auto py-16 flex flex-col gap-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--line-2)] bg-[var(--card-bg)] text-[11px] font-mono tracking-widest text-[var(--muted)] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Private Build Opening Soon</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl leading-[0.92] tracking-tight text-[var(--fg)]">
            Something new <br />
            <span className="italic font-normal text-[var(--fg-2)]">is coming.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--muted)] font-light leading-relaxed max-w-2xl">
            The internet gave us a thousand places to be. VYB is a quiet, crafted space to bring them together into one single link.
          </p>
        </div>

        <WaitlistForm />
      </main>

      {/* Footer */}
      <footer className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-[var(--line)] font-mono text-xs text-[var(--muted)]">
        <div>
          <span>© 2026 VYB. Built with intention.</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/manifesto" className="hover:text-[var(--fg)] transition-colors inline-flex items-center gap-1">
            <span>Read Manifesto</span>
            <span>→</span>
          </Link>
          <span>/</span>
          <a href="https://getvyb.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">
            Website
          </a>
          <span>/</span>
          <a href="https://github.com/sagarmurkute" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
