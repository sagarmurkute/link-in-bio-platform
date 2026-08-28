import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { FluidCanvas } from "@/components/FluidCanvas";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "The VYB Manifesto — One identity. One place. One link.",
  description: "The philosophy behind VYB — unifying your online presence into one simple space.",
};

export default function ManifestoPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between p-8 md:p-16 max-w-5xl mx-auto z-10 selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      <CustomCursor />
      <FluidCanvas />
      <div className="bg-vignette" />
      <div className="noise-layer" />

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center w-full mb-16">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Announcement</span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      {/* Manifesto Body */}
      <main className="relative z-20 my-auto flex flex-col gap-12 max-w-3xl">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            THE MANIFESTO / PHILOSOPHY
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl leading-[0.96] text-[var(--fg)]">
            The internet gave us a thousand places to be. <br />
            <span className="italic text-[var(--fg-2)]">VYB is a place to bring them together.</span>
          </h1>
        </div>

        <div className="flex flex-col gap-8 text-lg sm:text-xl text-[var(--muted)] font-light leading-relaxed">
          <p>
            Your identity shouldn’t be scattered across platforms. Your Instagram, GitHub, portfolio, YouTube, work, and other destinations shouldn’t require people to hunt for you.
          </p>

          <blockquote className="p-8 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] font-serif text-3xl sm:text-4xl text-[var(--fg)] italic leading-snug">
            “One identity. One place. One link.”
          </blockquote>

          <p>
            A single URL — <code className="px-2.5 py-1 rounded bg-[var(--card-bg)] border border-[var(--line-2)] font-mono text-sm text-[var(--fg)]">getvyb.vercel.app/yourname</code> — that becomes your central online identity. A quiet, intentional space for everything you build, write, and share online.
          </p>

          <p>
            Because VYB isn’t launched yet, the manifesto makes the vision clear without pretending to be a finished product.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--fg)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
          >
            <span>Claim Your Handle Early</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-12 mt-16 border-t border-[var(--line)] font-mono text-xs text-[var(--muted)]">
        <div>
          <span>© 2026 VYB. Built with intention.</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-[var(--fg)] transition-colors">
            ← Announcement
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
