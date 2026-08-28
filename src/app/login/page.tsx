"use client";

import { useState } from "react";
import Link from "next/link";
import { loginAction, signupAction } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { FluidCanvas } from "@/components/FluidCanvas";
import { ArrowLeft, ArrowRight, Lock, Mail, User } from "lucide-react";

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
    <div className="relative min-h-screen flex flex-col justify-between p-8 md:p-16 max-w-xl mx-auto z-10 selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      <CustomCursor />
      <FluidCanvas />
      <div className="bg-vignette" />
      <div className="noise-layer" />

      {/* Header Navigation */}
      <header className="relative z-20 flex justify-between items-center w-full mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>

        <ThemeToggle />
      </header>

      {/* Auth Card Container */}
      <main className="relative z-20 my-auto w-full">
        <div className="p-8 sm:p-10 rounded-3xl border border-[var(--line-2)] bg-[var(--card-bg)] backdrop-blur-xl shadow-2xl flex flex-col gap-8">
          {/* Top Switcher Tabs */}
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-6">
            <div className="flex items-center gap-6 font-mono text-sm tracking-wider">
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

            <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest">
              VYB AUTH
            </span>
          </div>

          {/* Error Feedback */}
          {errorMsg && (
            <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 font-mono text-xs leading-relaxed">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {mode === "signup" && (
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                  Choose Username
                </label>
                <div className="flex items-center rounded-xl border border-[var(--line-2)] bg-[var(--bg)] px-3.5 py-2.5 focus-within:border-[var(--fg)] transition-colors">
                  <User className="w-4 h-4 text-[var(--muted)] mr-2.5" />
                  <span className="font-mono text-xs text-[var(--muted)] select-none">@</span>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="yourusername"
                    className="flex-1 bg-transparent px-1 font-mono text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                Email Address
              </label>
              <div className="flex items-center rounded-xl border border-[var(--line-2)] bg-[var(--bg)] px-3.5 py-2.5 focus-within:border-[var(--fg)] transition-colors">
                <Mail className="w-4 h-4 text-[var(--muted)] mr-2.5" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@domain.com"
                  className="flex-1 bg-transparent font-mono text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                Password
              </label>
              <div className="flex items-center rounded-xl border border-[var(--line-2)] bg-[var(--bg)] px-3.5 py-2.5 focus-within:border-[var(--fg)] transition-colors">
                <Lock className="w-4 h-4 text-[var(--muted)] mr-2.5" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••••••"
                  className="flex-1 bg-transparent font-mono text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3.5 px-6 rounded-xl bg-[var(--fg)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? "Processing..." : mode === "login" ? "Sign In to Dashboard" : "Create My Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 pt-8 font-mono text-xs text-[var(--muted)] text-center">
        <span>© 2026 VYB. Secure Authentication.</span>
      </footer>
    </div>
  );
}
