import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { FluidCanvas } from "@/components/FluidCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="page loaded">
      <CustomCursor />
      
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
          <div className="header-meta mono upper">
            <span>2026</span>
            <span>/</span>
            <span>PRIVATE BUILD</span>
          </div>

          <div className="status mono upper">
            <span className="status-dot" />
            <span>Coming Soon...</span>
          </div>

          <ThemeToggle />

          <Link
            href="/login"
            className="mono upper"
            style={{
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid var(--line-2)",
              background: "rgba(245, 242, 237, 0.04)",
              color: "var(--fg)",
              textDecoration: "none"
            }}
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Content (Two-Column Layout) */}
      <main className="main">
        {/* Content Column (Left) */}
        <div className="content">
          <div className="kicker">
            <div className="kicker-line" />
            <div className="kicker-text mono upper">Announcement 001 / 2026 — Account-based Link System</div>
          </div>

          <h1 className="headline serif">
            <span className="l"><span>Something</span></span>
            <span className="l"><span className="thin">new is</span></span>
            <span className="l"><span><i>coming.</i></span></span>
          </h1>

          <p className="sub">
            A quiet place for everything you are online. Not another profile. <strong>Your profile.</strong> One link that feels like you.
          </p>

          <div className="divider" />

          <div className="manifesto">
            <div className="manifesto-index mono upper">01</div>
            <div className="manifesto-content-wrap">
              <div className="manifesto-text">One link.<br /><span>Everything you.</span></div>
              <Link href="/manifesto" className="manifesto-link mono upper">Read the manifesto →</Link>
            </div>
          </div>

          <div className="stay">
            <div className="stay-top">
              <div className="stay-dot" />
              <div className="stay-label mono upper">Stay Tuned — Invitation Only</div>
            </div>
            <div className="stay-desc mono">We’re opening slowly. Leave your address if you want to be early. No spam. No pitch.</div>
            <WaitlistForm />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="vline" />

        {/* Information Panel (Right Rail) */}
        <div className="rail">
          <div className="info-panel">
            {/* About VYB Section */}
            <div className="panel-section">
              <div className="panel-tag mono upper">About VYB</div>
              <h2 className="panel-heading serif">VYB is a new way to bring your online presence together.</h2>
              <p className="panel-quote mono">“Create one personal space for the things you want people to find, follow, and remember.”</p>
            </div>

            <div className="panel-divider" />

            {/* How It Works Section */}
            <div className="panel-section">
              <div className="panel-tag mono upper">How It Works</div>
              <div className="steps-list">
                <div className="step-item">
                  <div className="step-header mono upper">01 — Create</div>
                  <p className="step-text">Create your VYB account and claim your username.</p>
                </div>
                <div className="step-item">
                  <div className="step-header mono upper">02 — Build</div>
                  <p className="step-text">Bring your links, profiles, work, and important destinations together.</p>
                </div>
                <div className="step-item">
                  <div className="step-header mono upper">03 — Share</div>
                  <p className="step-text">Give people one simple VYB link to find you.</p>
                </div>
              </div>
            </div>

            <div className="panel-divider" />

            {/* Built For Section */}
            <div className="panel-section">
              <div className="panel-tag mono upper">Built For</div>
              <div className="audience-tags mono">
                <span className="audience-tag">Creators</span>
                <span className="tag-sep">·</span>
                <span className="audience-tag">Designers</span>
                <span className="tag-sep">·</span>
                <span className="audience-tag">Developers</span>
                <span className="tag-sep">·</span>
                <span className="audience-tag">Freelancers</span>
                <span className="tag-sep">·</span>
                <span className="audience-tag">Musicians</span>
                <span className="tag-sep">·</span>
                <span className="audience-tag">Businesses</span>
                <span className="tag-sep">·</span>
                <span className="audience-tag">Students</span>
              </div>
            </div>

            <div className="panel-divider" />

            {/* Product Philosophy */}
            <div className="panel-philosophy">
              <span className="philosophy-text serif">One identity. One place. One link.</span>
            </div>

            {/* Status Footer */}
            <div className="panel-footer mono upper">
              <div className="panel-status-left">
                <span className="status-dot-pulse" />
                <span className="status-label">VYB / 001</span>
              </div>
              <span className="status-coming">COMING SOON</span>
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
