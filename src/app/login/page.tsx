"use client";

import { useState } from "react";
import Link from "next/link";
import { loginAction, signupAction } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const res = mode === "login" ? await loginAction(formData) : await signupAction(formData);

    if (res?.error) {
      setErrorMsg(res.error);
      setLoading(false);
    }
  };

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
          <ThemeToggle />
        </div>
      </header>

      {/* Auth Main Card */}
      <main className="manifesto-main flex items-center justify-center py-12">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl border border-[var(--line-2)] bg-[var(--card-bg)] backdrop-blur-xl shadow-2xl flex flex-col gap-8">
          {/* Header Switcher */}
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-6">
            <div className="flex items-center gap-6 font-mono text-xs tracking-wider">
              <button
                type="button"
                onClick={() => { setMode("login"); setErrorMsg(null); }}
                className={`pb-1 transition-all cursor-pointer ${
                  mode === "login"
                    ? "text-[var(--fg)] border-b-2 border-[var(--fg)] font-semibold"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setMode("signup"); setErrorMsg(null); }}
                className={`pb-1 transition-all cursor-pointer ${
                  mode === "signup"
                    ? "text-[var(--fg)] border-b-2 border-[var(--fg)] font-semibold"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                Create Space
              </button>
            </div>

            <span className="font-mono text-[10px] text-[var(--muted-2)] uppercase tracking-widest">
              VYB AUTH
            </span>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 font-mono text-xs leading-relaxed">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {mode === "signup" && (
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-[var(--muted-2)] uppercase tracking-wider">
                  Reserve Username
                </label>
                <div className="flex items-center rounded-xl border border-[var(--line-2)] bg-[var(--bg)] px-3.5 py-2.5 focus-within:border-[var(--fg)] transition-colors">
                  <span className="font-mono text-xs text-[var(--muted)] select-none mr-1.5">@</span>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="yourusername"
                    className="flex-1 bg-transparent font-mono text-xs text-[var(--fg)] placeholder-[var(--muted-2)] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-[var(--muted-2)] uppercase tracking-wider">
                Email Address
              </label>
              <div className="flex items-center rounded-xl border border-[var(--line-2)] bg-[var(--bg)] px-3.5 py-2.5 focus-within:border-[var(--fg)] transition-colors">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent font-mono text-xs text-[var(--fg)] placeholder-[var(--muted-2)] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-[var(--muted-2)] uppercase tracking-wider">
                Password
              </label>
              <div className="flex items-center rounded-xl border border-[var(--line-2)] bg-[var(--bg)] px-3.5 py-2.5 focus-within:border-[var(--fg)] transition-colors">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••••••"
                  className="flex-1 bg-transparent font-mono text-xs text-[var(--fg)] placeholder-[var(--muted-2)] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="waitlist-btn w-full mt-2 justify-center py-3 text-center cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? "Processing..." : mode === "login" ? "Sign In to Dashboard" : "Create My Account"}</span>
              <span>↗</span>
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer mono upper">
        <div className="footer-left">
          <span>© 2026 VYB. Secure Authentication.</span>
        </div>
      </footer>
    </div>
  );
}
