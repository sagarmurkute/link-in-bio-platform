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
        <div className="bg-grid" />
        <div className="noise" />
      </div>

      {/* Header */}
      <header className="header">
        <Link href="/" className="brand-link">
          <div className="brand-mark">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5l8 14 8-14" />
            </svg>
          </div>
          <span className="brand-name mono upper">VYB</span>
        </Link>

        <div className="header-right">
          <Link href="/" className="back-link mono upper">
            ← Back to Announcement
          </Link>
          <div className="status mono upper">
            <span className="status-dot" />
            <span>Manifesto 001</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Editorial Manifesto Layout */}
      <main className="manifesto-main">
        <article className="manifesto-container">
          {/* Top Metadata */}
          <div className="manifesto-header">
            <div className="kicker-line" />
            <div className="mono upper manifesto-tag">VYB Philosophy / Announcement 001</div>
          </div>

          {/* Editorial Main Title */}
          <h1 className="manifesto-title serif">
            The internet is full of places to be.<br />
            <span className="title-highlight">VYB is a place to bring them together.</span>
          </h1>

          <div className="manifesto-divider" />

          {/* Main Editorial Body */}
          <div className="manifesto-body">
            <p className="lead-paragraph serif">
              Your identity shouldn’t be scattered across platforms. Your Instagram, GitHub, portfolio, YouTube, work, and other destinations shouldn’t require people to hunt for you.
            </p>

            <p className="body-paragraph">
              Every day, creators, designers, developers, freelancers, musicians, businesses, and students create valuable work across dozens of services. Yet, sharing your online presence remains fragmented across disjointed profiles and long bio links.
            </p>

            <p className="body-paragraph">
              You should have one simple place that represents you.
            </p>

            {/* Core Callout Quote */}
            <blockquote className="manifesto-quote serif">
              “VYB gives every person their own digital space.”
            </blockquote>

            <p className="body-paragraph">
              A single URL — <code className="url-badge mono">getvyb.vercel.app/yourname</code> — that becomes your central online identity. A quiet, intentional space for everything you build, write, and share online.
            </p>

            {/* Emphasized Product Philosophy Banner */}
            <div className="philosophy-banner">
              <div className="banner-border" />
              <span className="philosophy-tag mono upper">PRODUCT PHILOSOPHY</span>
              <h2 className="philosophy-statement serif">One identity. One place. One link.</h2>
            </div>

            <p className="body-paragraph">
              We’re building VYB thoughtfully in private. We’re opening slowly to ensure every profile feels personal, fast, and crafted with intention.
            </p>
          </div>

          <div className="manifesto-divider" />

          {/* Manifesto Footer CTA */}
          <div className="manifesto-cta">
            <div className="cta-left">
              <span className="mono upper cta-label">Stay Tuned — Private Build</span>
              <p className="cta-desc">Be among the first to claim your VYB username when invitations open.</p>
            </div>
            <div className="cta-right">
              <Link href="/#waitlist" className="waitlist-btn">
                <span>Join Waitlist</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer mono upper">
        <div className="footer-left">
          <span>© 2026 VYB</span>
          <span style={{ opacity: 0.4 }}>—</span>
          <span>Made with intention.</span>
        </div>
        <div className="footer-right">
          <Link href="/" className="footer-link">← Announcement</Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <a href="https://getvyb.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-link">Website</a>
          <span style={{ opacity: 0.3 }}>/</span>
          <a href="https://github.com/sagarmurkute" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <span style={{ opacity: 0.3 }}>/</span>
          <a href="https://x.com/SagarMurku54849" target="_blank" rel="noopener noreferrer" className="footer-link">X</a>
        </div>
      </footer>
    </div>
  );
}
