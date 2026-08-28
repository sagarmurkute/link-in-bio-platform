import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="page loaded min-h-screen flex flex-col justify-between">
      {/* Background Atmosphere */}
      <div className="bg-wrap">
        <FluidCanvas />
        <div className="bg-vignette" />
      </div>

      {/* Full Production Navigation Header */}
      <header className="header border-b border-[#D6D6BE]/40 bg-[#FFFFE3]/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="brand-link">
          <div className="brand-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span>VYB</span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#000000]">
          <Link href="/manifesto" className="hover:text-[#FF0000] transition-colors">Manifesto</Link>
          <a href="#features" className="hover:text-[#FF0000] transition-colors">Features</a>
          <a href="#templates" className="hover:text-[#FF0000] transition-colors">Templates</a>
          <Link href="/pricing" className="hover:text-[#FF0000] transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="vyb-btn vyb-btn-secondary text-sm h-11 px-6">
            Log in
          </Link>
          <Link href="/signup" className="vyb-btn text-sm h-11 px-6 hidden sm:inline-flex">
            Sign up free
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Value Pitch & Handle Bar */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF0000]/10 text-[#FF0000] font-extrabold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-ping" />
            <span>VYB 2.0 is Live — One link for everything</span>
          </div>

          <h1 className="headline text-6xl sm:text-7xl lg:text-8xl leading-tight font-black tracking-tight text-[#000000]">
            Everything you are.<br />
            <span className="text-[#FF0000]">In one simple link.</span>
          </h1>

          <p className="sub text-lg sm:text-xl text-[#2A2A2A] font-semibold leading-relaxed max-w-xl">
            Join creators, developers, designers, and professionals using VYB. Connect all your social media, stores, code, and portfolios into one simple URL.
          </p>

          <div className="w-full mt-2">
            <WaitlistForm />
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4 text-xs font-bold text-[#7A7A7A]">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-black border-2 border-[#FFFFE3]">S</div>
              <div className="w-8 h-8 rounded-full bg-[#000000] text-white flex items-center justify-center font-black border-2 border-[#FFFFE3]">A</div>
              <div className="w-8 h-8 rounded-full bg-[#E8E8D2] text-black flex items-center justify-center font-black border-2 border-[#FFFFE3]">M</div>
            </div>
            <span>Claimed by 50,000+ creators worldwide</span>
          </div>
        </div>

        {/* Right Column: Live Interactive Profile Card Stack */}
        <div className="flex justify-center items-center">
          <div className="vyb-card-stack w-full max-w-md">
            {/* Profile Avatar Header */}
            <div className="flex flex-col items-center text-center gap-3 pb-4 border-b border-[#D6D6BE]/60">
              <div className="w-20 h-20 rounded-full p-1 bg-[#FF0000] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-black text-2xl text-[#000000]">@sagar</h3>
                <p className="text-xs font-bold text-[#555555]">Digital Creator & Full-Stack Developer ⚡️</p>
              </div>
            </div>

            {/* Stacked Link Pills */}
            <div className="flex flex-col gap-3 pt-2">
              <a href="#" className="card-pill">
                <span>🔥 Latest YouTube Video & Course</span>
                <span>↗</span>
              </a>
              <a href="#" className="card-pill card-pill-red">
                <span>💻 GitHub Repositories & Starred</span>
                <span>↗</span>
              </a>
              <a href="#" className="card-pill">
                <span>📸 Instagram Shots & Portfolio</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-[#D6D6BE]/40">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#FFFFE3] font-extrabold text-xs tracking-wider uppercase">
            WHY VYB
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#000000]">Built for modern creators</h2>
          <p className="text-base text-[#555555] font-semibold max-w-lg">Everything you need to share, grow, and manage your online presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="p-8 rounded-[32px] bg-[#FFFFFF] shadow-sm border border-[#D6D6BE]/50 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center text-2xl font-black">
              ⚡️
            </div>
            <h3 className="text-xl font-black text-[#000000]">Instant Handle Reservation</h3>
            <p className="text-sm text-[#555555] font-semibold leading-relaxed">
              Claim your clean, short handle (`getvyb.vercel.app/you`) in less than 30 seconds.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-8 rounded-[32px] bg-[#FFFFFF] shadow-sm border border-[#D6D6BE]/50 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center text-2xl font-black">
              🎨
            </div>
            <h3 className="text-xl font-black text-[#000000]">Total Customization</h3>
            <p className="text-sm text-[#555555] font-semibold leading-relaxed">
              Personalize background colors, typography, pill styles, and brand themes easily.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-8 rounded-[32px] bg-[#FFFFFF] shadow-sm border border-[#D6D6BE]/50 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center text-2xl font-black">
              📊
            </div>
            <h3 className="text-xl font-black text-[#000000]">Real-time Analytics</h3>
            <p className="text-sm text-[#555555] font-semibold leading-relaxed">
              Track link clicks, click-through rates, and traffic sources right from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Template Showcase Section */}
      <section id="templates" className="w-full bg-[#FFFFFF] py-20 border-y border-[#D6D6BE]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-[#FF0000] text-[#FFFFFF] font-extrabold text-xs tracking-wider uppercase">
              TEMPLATES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#000000]">Crafted for every style</h2>
            <p className="text-base text-[#555555] font-semibold max-w-lg">Switch themes instantly with one click.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="p-6 rounded-3xl bg-[#FFFFE3] border border-[#D6D6BE] flex flex-col items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FF0000]" />
              <span className="font-extrabold text-sm text-[#000000]">Signature Ivory</span>
            </div>
            <div className="p-6 rounded-3xl bg-[#000000] text-white border border-gray-800 flex flex-col items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FFFFE3]" />
              <span className="font-extrabold text-sm text-[#FFFFE3]">Midnight Obsidian</span>
            </div>
            <div className="p-6 rounded-3xl bg-[#FF0000] text-white flex flex-col items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FFFFFF]" />
              <span className="font-extrabold text-sm text-[#FFFFFF]">Electric Red</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full max-w-5xl mx-auto my-20 px-6">
        <div className="p-12 rounded-[40px] bg-[#FF0000] text-[#FFFFFF] text-center flex flex-col items-center gap-6 shadow-xl">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight">Ready to claim your VYB?</h2>
          <p className="text-lg font-semibold max-w-xl text-[#FFFFE3]">
            Create your account today and connect your entire online presence in seconds.
          </p>
          <Link href="/signup" className="vyb-btn vyb-btn-secondary text-lg h-14 px-10 mt-2">
            Get started for free ↗
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-[#FFFFE3] border-t border-[#D6D6BE]/40">
        <div>
          <span>© 2026 VYB Platform. Full Production SaaS Website.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/manifesto" className="footer-link">Manifesto</Link>
          <Link href="/login" className="footer-link">Log in</Link>
          <Link href="/signup" className="footer-link">Sign up</Link>
          <a href="https://github.com/sagarmurkute" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
