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
      {/* Background Elements */}
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
          <Link href="/login" className="footer-link font-extrabold text-sm">
            Already have an account? Log in
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Signup Card */}
      <main className="main py-12 flex items-center justify-center">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white text-[#1E2330] shadow-2xl flex flex-col gap-6">
          <div className="text-center flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold tracking-tight">Create your VYB</h1>
            <p className="text-sm font-semibold text-gray-500">Claim your handle & build your page</p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-100 border border-red-200 text-red-700 font-bold text-xs">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-gray-700 uppercase tracking-wider">
                Claim Username
              </label>
              <div className="flex items-center rounded-2xl border-2 border-gray-200 px-3 py-1 focus-within:border-[#7800FF]">
                <span className="font-extrabold text-sm text-gray-400 select-none">@</span>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="yourname"
                  className="w-full px-2 py-2 font-bold text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-gray-700 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 font-bold text-sm focus:border-[#7800FF] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-extrabold text-xs text-gray-700 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 font-bold text-sm focus:border-[#7800FF] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#254F1A] text-[#D2E823] font-extrabold text-base hover:bg-green-900 transition-all cursor-pointer mt-2 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account & Claim Handle"}
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
