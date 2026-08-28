import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFFE3] text-[#111111] px-6 lg:px-12">
      {/* Top Navigation */}
      <header className="w-full max-w-7xl mx-auto h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span className="font-black text-2xl tracking-tight text-[#111111]">VYB</span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="btn btn-ghost btn-sm font-bold">
            Log in
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm">
            Sign up free
          </Link>
        </div>
      </header>

      {/* Ultra Clean Hero Core */}
      <main className="w-full max-w-7xl mx-auto my-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[0.98] font-black tracking-tight text-[#111111]">
            Everything you are.<br />
            <span className="text-[#FF0000]">In one link.</span>
          </h1>

          <p className="text-xl text-[#444444] font-medium leading-relaxed max-w-lg">
            One link to help you share everything you create, curate, and sell across all your platforms.
          </p>

          <div className="w-full max-w-[540px] pt-2">
            <WaitlistForm />
          </div>
        </div>

        {/* Right Column: Clean Card Preview */}
        <div className="flex justify-center items-center">
          <div className="profile-card w-full max-w-[400px]">
            <div className="flex flex-col items-center text-center gap-3 pb-5 border-b border-[rgba(200,200,180,0.4)]">
              <div className="w-20 h-20 rounded-full p-[3px] bg-[#FF0000] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                  alt="Creator"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-black text-2xl text-[#111111]">@sagar</p>
                <p className="text-xs font-semibold text-[#888888] mt-0.5">Digital Creator & Full-Stack Dev ⚡️</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-5">
              <a href="#" className="link-pill link-pill-ivory">
                <span>🔥 Latest YouTube Video</span>
                <span>↗</span>
              </a>
              <a href="#" className="link-pill link-pill-red">
                <span>💻 GitHub Open Source</span>
                <span>↗</span>
              </a>
              <a href="#" className="link-pill link-pill-ivory">
                <span>📸 Instagram Portfolio</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Clean Footer */}
      <footer className="w-full max-w-7xl mx-auto h-20 flex items-center justify-between border-t border-[rgba(200,200,180,0.4)] text-xs font-bold text-[#888888]">
        <div>© 2026 VYB</div>
        <div className="flex items-center gap-6">
          <Link href="/manifesto" className="hover:text-[#FF0000] transition-colors no-underline">Manifesto</Link>
          <Link href="/login" className="hover:text-[#FF0000] transition-colors no-underline">Log in</Link>
          <Link href="/signup" className="hover:text-[#FF0000] transition-colors no-underline">Sign up</Link>
        </div>
      </footer>
    </div>
  );
}
