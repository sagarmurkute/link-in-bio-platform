"use client";

import { useState } from "react";
import Link from "next/link";
import { loginAction } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const res = await loginAction(formData);

    if (res?.error) {
      setErrorMsg(res.error);
      setLoading(false);
    }
  };

  return (
    <div className="page loaded">
      {/* Background Atmosphere */}
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
          <Link href="/signup" className="vyb-btn vyb-btn-secondary">
            Sign up free
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Auth Subtle Card */}
      <main className="main py-12 flex items-center justify-center">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-[36px] bg-[#FFFFFF] text-[#1E2330] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#D6D6BE]/50 flex flex-col gap-6">
          <div className="text-center flex flex-col gap-2">
            <span className="px-4 py-1.5 rounded-full bg-[#FF0000]/10 text-[#FF0000] font-extrabold text-xs tracking-wider uppercase mx-auto">
              VYB AUTH
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#000000]">Welcome back</h1>
            <p className="text-sm font-semibold text-gray-500">Log in to manage your link in bio</p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-full bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-[#000000] uppercase tracking-wider px-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-full border border-gray-200 font-bold text-base focus:border-[#FF0000] focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-[#000000] uppercase tracking-wider px-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••••••"
                className="w-full px-6 py-4 rounded-full border border-gray-200 font-bold text-base focus:border-[#FF0000] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="vyb-btn w-full py-4 mt-2 justify-center text-center cursor-pointer disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Log In to Dashboard ↗"}
            </button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div>© 2026 VYB. Secure Sign In.</div>
      </footer>
    </div>
  );
}
