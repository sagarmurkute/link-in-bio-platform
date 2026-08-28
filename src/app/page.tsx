import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="page loaded">
      {/* Radiant Background Atmosphere */}
      <div className="bg-wrap">
        <FluidCanvas />
        <div className="bg-vignette" />
        <div className="bg-grid" />
        <div className="noise" />
      </div>

      {/* Header */}
      <header className="header">
        <Link href="/" className="brand-link">
          <div className="brand-mark">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5l8 14 8-14" />
            </svg>
          </div>
          <span className="brand-name mono upper text-lg font-extrabold tracking-widest gradient-text">
            VYB
          </span>
        </Link>

        <div className="header-right">
          <div className="header-meta mono upper">
            <span className="text-[#EC4899]">2026</span>
            <span className="opacity-40">/</span>
            <span className="text-[#8B5CF6]">PRIVATE BUILD</span>
          </div>

          <div className="status mono upper">
            <span className="status-dot" />
            <span>Coming Soon ✨</span>
          </div>

          <ThemeToggle />

          <Link
            href="/login"
            className="mono upper transition-all hover:scale-105"
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
              color: "#FFFFFF",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(236, 72, 153, 0.4)"
            }}
          >
            Sign In ↗
          </Link>
        </div>
      </header>

      {/* Main Content (Two-Column Layout) */}
      <main className="main">
        {/* Content Column (Left) */}
        <div className="content">
          <div className="kicker">
            <span className="text-base">⚡️</span>
            <span className="mono upper">Announcement 001 / 2026 — Link-in-Bio System</span>
          </div>

          <h1 className="headline serif">
            <span className="l"><span className="gradient-text">Something new</span></span>
            <span className="l"><span className="italic font-light text-[var(--fg)]">is coming.</span></span>
          </h1>

          <p className="sub">
            The internet gave us a thousand places to be. <strong className="gradient-text-alt">VYB</strong> is a quiet, crafted space to bring them together into one simple link that feels like you.
          </p>

          <div className="divider" />

          <div className="manifesto">
            <div className="manifesto-index mono upper">01</div>
            <div className="manifesto-content-wrap">
              <div className="manifesto-text">
                One identity.<br />
                <span className="gradient-text font-serif italic">Everything you.</span>
              </div>
              <Link href="/manifesto" className="manifesto-link mono upper mt-2 inline-flex items-center gap-1.5 text-[#EC4899] hover:underline font-bold">
                Read manifesto ↗
              </Link>
            </div>
          </div>

          <div className="stay">
            <div className="stay-top mb-3 flex items-center gap-2">
              <span className="text-base">🚀</span>
              <span className="stay-label mono upper text-[#A855F7] font-bold">Claim Handle Early — Private Access</span>
            </div>
            <div className="stay-desc mono text-sm mb-4">Leave your email to claim your custom handle before launch.</div>
            <WaitlistForm />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="vline" />

        {/* Information Panel (Right Rail) */}
        <div className="rail">
          <div className="info-panel">
            {/* About VYB Section */}
            <div className="panel-section">
              <div className="panel-tag mono upper">WHY VYB EXISTS</div>
              <h2 className="panel-heading serif">Your identity shouldn't be scattered across 10+ URLs.</h2>
              <p className="panel-quote mono">“Instagram, GitHub, YouTube, portfolio, and work destinations combined into getvyb.vercel.app/you”</p>
            </div>

            {/* How It Works Section */}
            <div className="panel-section">
              <div className="panel-tag mono upper">HOW IT WORKS</div>
              <div className="steps-list">
                <div className="step-item">
                  <div className="step-header mono upper">01 — Claim Handle</div>
                  <p className="step-text">Reserve your unique username (e.g. getvyb.vercel.app/sagar).</p>
                </div>
                <div className="step-item">
                  <div className="step-header mono upper">02 — Connect Links</div>
                  <p className="step-text">Bring your code, socials, store, and media into one stack.</p>
                </div>
                <div className="step-item">
                  <div className="step-header mono upper">03 — Share Anywhere</div>
                  <p className="step-text">One URL representing your full digital presence.</p>
                </div>
              </div>
            </div>

            {/* Built For Section */}
            <div className="panel-section">
              <div className="panel-tag mono upper">BUILT FOR CREATORS</div>
              <div className="audience-tags">
                <span className="audience-tag">Creators ✨</span>
                <span className="audience-tag">Designers 🎨</span>
                <span className="audience-tag">Developers 💻</span>
                <span className="audience-tag">Freelancers 🚀</span>
                <span className="audience-tag">Musicians 🎵</span>
                <span className="audience-tag">Businesses 💼</span>
              </div>
            </div>

            {/* Product Philosophy */}
            <div className="panel-philosophy">
              <span className="philosophy-text serif">One identity. One place. One link.</span>
            </div>

            {/* Status Footer */}
            <div className="panel-footer mono upper">
              <div className="panel-status-left flex items-center gap-2">
                <span className="status-dot" />
                <span className="status-label">VYB / 2026</span>
              </div>
              <span className="status-coming font-bold text-[#EC4899]">PRIVATE ACCESS</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer mono upper">
        <div className="footer-left">
          <span>© 2026 VYB. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <Link href="/manifesto" className="footer-link">Read manifesto →</Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <a href="https://getvyb.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-link">Website</a>
          <span style={{ opacity: 0.3 }}>/</span>
          <a href="https://github.com/sagarmurkute" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
