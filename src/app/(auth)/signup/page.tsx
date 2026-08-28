"use client";

import { useState } from "react";
import Link from "next/link";
import { signupAction } from "@/app/actions/auth";

export default function SignupPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await signupAction(formData);
    if (res?.error) { setErrorMsg(res.error); setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-[#FFFFE3] flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-[rgba(200,200,180,0.4)] h-[68px] flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,0,0,0.22)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-[#111111]">VYB</span>
          </Link>
          <Link href="/login" className="btn btn-ghost btn-sm">Log in</Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[440px] flex flex-col gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <div className="badge badge-red w-fit mb-1">Free to start</div>
            <h1 className="text-[36px] font-black tracking-tight text-[#111111] leading-none">Claim your VYB</h1>
            <p className="text-[15px] text-[#888888] font-medium">Your handle. Your link. Your identity.</p>
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="px-5 py-3.5 rounded-2xl bg-[#FFF1F1] border border-[#FFD6D6] text-[#CC0000] text-[13px] font-semibold">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Handle */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-extrabold text-[#333333] uppercase tracking-[0.08em]">
                Your Handle
              </label>
              <div className="flex items-center h-[52px] rounded-[16px] border border-[rgba(200,200,180,0.6)] bg-[#FFFFFF] px-5 gap-1 focus-within:border-[#FF0000] focus-within:ring-2 focus-within:ring-[rgba(255,0,0,0.08)] transition-all">
                <span className="text-[15px] font-bold text-[#AAAAAA] flex-shrink-0">@</span>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="yourname"
                  className="flex-1 h-full bg-transparent border-none outline-none text-[#111111] font-extrabold text-[15px]"
                />
              </div>
              <p className="text-[12px] text-[#AAAAAA] font-medium px-1">
                getvyb.vercel.app/<span className="text-[#111111] font-bold">yourname</span>
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-extrabold text-[#333333] uppercase tracking-[0.08em]">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full h-[52px] px-5 rounded-[16px] border border-[rgba(200,200,180,0.6)] bg-[#FFFFFF] text-[#111111] font-semibold text-[15px] outline-none transition-all focus:border-[#FF0000] focus:ring-2 focus:ring-[rgba(255,0,0,0.08)]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-extrabold text-[#333333] uppercase tracking-[0.08em]">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="At least 8 characters"
                className="w-full h-[52px] px-5 rounded-[16px] border border-[rgba(200,200,180,0.6)] bg-[#FFFFFF] text-[#111111] font-semibold text-[15px] outline-none transition-all focus:border-[#FF0000] focus:ring-2 focus:ring-[rgba(255,0,0,0.08)]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary mt-2 w-full h-[52px] text-[15px] disabled:opacity-50"
            >
              {loading ? "Creating your VYB…" : "Claim my handle →"}
            </button>

            <p className="text-center text-[12px] text-[#AAAAAA] font-medium">
              By signing up you agree to our{" "}
              <Link href="/terms" className="text-[#666666] hover:text-[#FF0000] transition-colors no-underline font-semibold">Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-[#666666] hover:text-[#FF0000] transition-colors no-underline font-semibold">Privacy Policy</Link>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[rgba(200,200,180,0.5)]" />
            <span className="text-[12px] font-semibold text-[#AAAAAA]">Already on VYB?</span>
            <div className="flex-1 h-px bg-[rgba(200,200,180,0.5)]" />
          </div>

          <Link href="/login" className="btn btn-outline w-full h-[52px] text-[15px]">
            Log in to your account
          </Link>
        </div>
      </main>
    </div>
  );
}
