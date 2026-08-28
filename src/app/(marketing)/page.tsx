import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="page loaded">
      {/* Linktree Atmosphere */}
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
          <ThemeToggle />
          <Link href="/login" className="linktree-btn linktree-btn-purple">
            Log in
          </Link>
          <Link href="/signup" className="linktree-btn hidden sm:inline-flex">
            Sign up free
          </Link>
        </div>
      </header>

      {/* Main Content (Hero & Live Card Stack) */}
      <main className="main py-12">
        {/* Left Column: Hero Announcement */}
        <div className="flex flex-col justify-center">
          <h1 className="headline">
            Everything you are.<br />
            In one simple link in bio.
          </h1>

          <p className="sub">
            Join creators using VYB for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other profiles.
          </p>

          <WaitlistForm />
        </div>

        {/* Right Column: Live Linktree Creator Profile Stack */}
        <div className="flex justify-center items-center">
          <div className="linktree-card-stack">
            {/* Profile Avatar Header */}
            <div className="flex flex-col items-center text-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#7800FF] via-[#FF1493] to-[#D2E823] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-[#1E2330]">@sagar</h3>
                <p className="text-xs font-semibold text-gray-500">Digital Creator & Developer ⚡️</p>
              </div>
            </div>

            {/* Stacked Link Pills */}
            <div className="flex flex-col gap-3 pt-2">
              <a href="#" className="card-pill">
                <span>🔥 Latest YouTube Video</span>
                <span>↗</span>
              </a>
              <a href="#" className="card-pill card-pill-purple">
                <span>💻 GitHub Open Source Projects</span>
                <span>↗</span>
              </a>
              <a href="#" className="card-pill card-pill-pink">
                <span>📸 Instagram Portfolio & Reel</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <span>© 2026 VYB Platform. Inspired by modern link-in-bio design.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/manifesto" className="footer-link">Manifesto</Link>
          <Link href="/pricing" className="footer-link">Pricing</Link>
          <a href="https://github.com/sagarmurkute" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
