"use client";

import { useState } from "react";
import Link from "next/link";
import { signupAction } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluidCanvas } from "@/components/FluidCanvas";

export default function SignupPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const res = await signupAction(formData);

    if (res?.error) {
      setErrorMsg(res.error);
      setLoading(false);
    }
  };

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
          <Link href="/login" className="linktree-btn linktree-btn-purple">
            Log in
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Signup Pill Card */}
      <main className="main py-12 flex items-center justify-center">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-[40px] bg-[#FFFFFF] text-[#1E2330] shadow-2xl flex flex-col gap-6 border-4 border-[#D2E823]">
          <div className="text-center flex flex-col gap-2">
            <span className="px-4 py-1.5 rounded-full bg-[#254F1A] text-[#D2E823] font-extrabold text-xs tracking-wider uppercase mx-auto">
              CLAIM HANDLE
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#254F1A]">Create your VYB</h1>
            <p className="text-sm font-bold text-gray-500">Claim your username & build your link stack</p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-full bg-red-100 border border-red-300 text-red-700 font-extrabold text-xs text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-[#254F1A] uppercase tracking-wider px-2">
                Choose Handle
              </label>
              <div className="flex items-center rounded-full border-2 border-gray-200 px-6 py-2 focus-within:border-[#254F1A]">
                <span className="font-extrabold text-base text-gray-400 select-none">@</span>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="yourname"
                  className="w-full px-2 py-2 font-extrabold text-base focus:outline-none text-[#1E2330]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-[#254F1A] uppercase tracking-wider px-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 font-bold text-base focus:border-[#254F1A] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-[#254F1A] uppercase tracking-wider px-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••••••"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 font-bold text-base focus:border-[#254F1A] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#254F1A] text-[#D2E823] font-extrabold text-lg hover:bg-green-900 transition-all cursor-pointer mt-2 disabled:opacity-50 shadow-xl"
            >
              {loading ? "Creating account..." : "Claim My Handle ↗"}
            </button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div>© 2026 VYB Registration.</div>
      </footer>
    </div>
  );
}
