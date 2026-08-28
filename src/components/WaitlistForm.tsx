"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      setTimeout(() => setError(false), 600);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-mono text-sm">
        <Check className="w-4 h-4 text-emerald-400" />
        <span>You’re on the private access list. We will reach out soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <div
        className={`flex items-center rounded-xl border bg-[var(--card-bg)] p-1.5 transition-all ${
          error ? "border-red-500/80 animate-bounce" : "border-[var(--line-2)] hover:border-[var(--fg)]"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          className="flex-1 bg-transparent px-4 py-2.5 text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--fg)] text-[var(--bg)] font-mono text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
        >
          <span>Join</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-xs text-[var(--muted)] font-mono tracking-wide px-1">
        Private build opening slowly. Claim your custom username early.
      </p>
    </form>
  );
}
