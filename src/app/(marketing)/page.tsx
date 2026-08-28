import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFFFE3] text-[#111111]">

      {/* ── Sticky Navigation ─────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(200,200,180,0.4)] bg-[#FFFFE3]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between gap-8">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,0,0,0.22)] flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-[#111111]">VYB</span>
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/manifesto" className="nav-link">Manifesto</Link>
            <a href="#features" className="nav-link">Features</a>
            <a href="#showcase" className="nav-link">Showcase</a>
            <Link href="/pricing" className="nav-link">Pricing</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link href="/login" className="btn btn-ghost btn-sm hidden sm:inline-flex">Log in</Link>
            <Link href="/signup" className="btn btn-primary btn-sm">
              Get started
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 17 10-10M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero Section ──────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col gap-7 items-start">
            {/* Badge */}
            <div className="badge badge-red">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
              VYB 2.0 is live — One link for everything
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(44px,7vw,88px)] font-black leading-[0.97] tracking-[-0.04em] text-[#111111]">
              Every&shy;thing you are.{" "}
              <span className="font-serif italic text-[#FF0000]">One simple link.</span>
            </h1>

            {/* Sub */}
            <p className="text-[18px] sm:text-[20px] text-[#444444] font-medium leading-[1.65] max-w-[520px]">
              The most elegant link-in-bio platform for creators, builders, and professionals.
              Share everything you make — in one beautifully crafted page.
            </p>

            {/* Claim Bar */}
            <div className="w-full max-w-[540px]">
              <WaitlistForm />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                <div className="avatar bg-[#FF0000] text-white">S</div>
                <div className="avatar bg-[#111111] text-white">A</div>
                <div className="avatar bg-[#E8E8D2] text-[#111111]">M</div>
                <div className="avatar bg-[#FF0000] text-white">K</div>
              </div>
              <p className="text-[13px] font-semibold text-[#666666]">
                <span className="text-[#111111] font-extrabold">50,000+</span> creators already on VYB
              </p>
            </div>
          </div>

          {/* Right: Live Profile Card */}
          <div className="flex justify-center items-center">
            <div className="profile-card w-full">
              {/* Avatar & Name */}
              <div className="flex flex-col items-center text-center gap-3 pb-5 border-b border-[rgba(200,200,180,0.4)]">
                <div className="relative">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#FF0000] p-[3px] shadow-[0_6px_20px_rgba(255,0,0,0.22)]">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                      alt="Creator"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22c55e] border-2 border-[#FFFFFF]" />
                </div>
                <div>
                  <p className="font-black text-[20px] text-[#111111] tracking-tight">@sagar</p>
                  <p className="text-[12px] font-semibold text-[#888888] mt-0.5">Digital Creator & Full-Stack Dev ⚡️</p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 pt-5">
                <a href="#" className="link-pill link-pill-ivory">
                  <div className="flex items-center gap-2.5">
                    <span>🔥</span>
                    <span>Latest YouTube Video & Course</span>
                  </div>
                  <span className="text-[#999999] text-sm">↗</span>
                </a>
                <a href="#" className="link-pill link-pill-red">
                  <div className="flex items-center gap-2.5">
                    <span>💻</span>
                    <span>GitHub Repos & Open Source</span>
                  </div>
                  <span className="text-[rgba(255,255,255,0.7)] text-sm">↗</span>
                </a>
                <a href="#" className="link-pill link-pill-ivory">
                  <div className="flex items-center gap-2.5">
                    <span>📸</span>
                    <span>Instagram Portfolio & Reels</span>
                  </div>
                  <span className="text-[#999999] text-sm">↗</span>
                </a>
              </div>

              {/* Footer Tag */}
              <div className="mt-5 pt-4 border-t border-[rgba(200,200,180,0.4)] text-center">
                <span className="text-[11px] font-bold text-[#AAAAAA] tracking-widest uppercase">Built on VYB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────── */}
      <section className="w-full border-y border-[rgba(200,200,180,0.4)] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "50K+", label: "Active Creators" },
            { n: "2M+", label: "Link Clicks/Month" },
            { n: "99.9%", label: "Uptime SLA" },
            { n: "<30s", label: "Setup Time" },
          ].map(({ n, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-1.5">
              <span className="stat-number">{n}</span>
              <span className="text-[13px] font-semibold text-[#888888]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Section ──────────────────────────────── */}
      <section id="features" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="badge badge-dark">Why VYB</span>
          <h2 className="text-[clamp(32px,5vw,56px)] font-black tracking-tight text-[#111111] leading-[1.05]">
            Built for modern creators
          </h2>
          <p className="text-[17px] text-[#666666] font-medium max-w-[520px] leading-relaxed">
            A thoughtfully designed platform with every detail carefully crafted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡️",
              title: "Instant Handle Reservation",
              body: "Claim your clean, permanent handle in under 30 seconds. No friction, no waitlist — just your name, live.",
            },
            {
              icon: "🎨",
              title: "Seamless Customization",
              body: "Choose from curated themes, tweak every detail, and build a page that is distinctly, unmistakably you.",
            },
            {
              icon: "📊",
              title: "Real-time Analytics",
              body: "Know exactly what resonates. Track link clicks, traffic sources, and audience behavior from your dashboard.",
            },
            {
              icon: "🔒",
              title: "Enterprise-grade Security",
              body: "Row-level security, reserved handle protection, and Supabase Auth — your data is always yours alone.",
            },
            {
              icon: "🌐",
              title: "Universal Sharing",
              body: "One URL works everywhere. Instagram bios, Twitter profiles, email signatures, business cards — everywhere.",
            },
            {
              icon: "🚀",
              title: "Blazing Fast Profiles",
              body: "Static pre-rendered pages served from Vercel Edge Network. Sub-100ms load times, globally.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon">{icon}</div>
              <h3 className="text-[18px] font-black text-[#111111] mb-2 tracking-tight">{title}</h3>
              <p className="text-[14px] text-[#666666] font-medium leading-[1.7]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Theme Showcase ────────────────────────────────── */}
      <section id="showcase" className="w-full bg-[#FFFFFF] border-y border-[rgba(200,200,180,0.4)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col items-center gap-14">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="badge" style={{ background: "rgba(255,0,0,0.08)", color: "#FF0000" }}>Themes</span>
            <h2 className="text-[clamp(32px,5vw,52px)] font-black tracking-tight text-[#111111] leading-[1.05]">
              Crafted for every aesthetic
            </h2>
            <p className="text-[16px] text-[#666666] font-medium max-w-[460px]">
              Switch between beautiful curated themes with a single click.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
            <div className="theme-card bg-[#FFFFE3] border border-[rgba(200,200,180,0.5)]">
              <div className="w-10 h-10 rounded-full bg-[#FF0000] shadow-[0_4px_14px_rgba(255,0,0,0.22)]" />
              <div className="text-center">
                <p className="font-extrabold text-[14px] text-[#111111]">Signature Ivory</p>
                <p className="text-[12px] text-[#888888] mt-0.5">Warm & elegant</p>
              </div>
            </div>
            <div className="theme-card bg-[#111111] border border-[rgba(255,255,255,0.06)]">
              <div className="w-10 h-10 rounded-full bg-[#FFFFE3]" />
              <div className="text-center">
                <p className="font-extrabold text-[14px] text-[#FFFFE3]">Midnight Obsidian</p>
                <p className="text-[12px] text-[rgba(255,255,255,0.4)] mt-0.5">Bold & dark</p>
              </div>
            </div>
            <div className="theme-card bg-[#FF0000]">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] shadow-md" />
              <div className="text-center">
                <p className="font-extrabold text-[14px] text-[#FFFFFF]">Electric Red</p>
                <p className="text-[12px] text-[rgba(255,255,255,0.65)] mt-0.5">Loud & vivid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="cta-banner">
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-[clamp(36px,6vw,68px)] font-black text-[#FFFFFF] leading-[1] tracking-tight">
              Your VYB is waiting.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.75)] font-medium leading-relaxed text-center">
              Claim your handle today and connect your entire world into one link.
              Free to start — always.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <Link href="/signup" className="btn btn-white">
                Get started for free
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m7 17 10-10M7 7h10v10" />
                </svg>
              </Link>
              <Link href="/manifesto" className="btn" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", backdropFilter: "blur(8px)" }}>
                Read the manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="w-full border-t border-[rgba(200,200,180,0.4)] bg-[#FFFFE3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#FF0000] flex items-center justify-center shadow-[0_2px_8px_rgba(255,0,0,0.2)]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#888888]">© 2026 VYB Platform, Inc.</span>
          </div>
          <nav className="flex items-center gap-6">
            {[
              { label: "Manifesto", href: "/manifesto" },
              { label: "Log in", href: "/login" },
              { label: "Sign up", href: "/signup" },
              { label: "GitHub", href: "https://github.com/sagarmurkute" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="text-[13px] font-semibold text-[#888888] hover:text-[#FF0000] transition-colors no-underline">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
