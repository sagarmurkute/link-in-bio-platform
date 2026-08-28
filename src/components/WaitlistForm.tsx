"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [handle, setHandle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handle.trim()) return;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      {submitted ? (
        <div className="flex items-center gap-3 px-6 py-4 rounded-[999px] bg-[#FFFFE3] border border-[rgba(200,200,180,0.45)] text-[#111111] font-bold text-sm shadow-sm">
          <span className="text-xl">🎉</span>
          <span>
            <span className="text-[#FF0000] font-extrabold">@{handle}</span> is reserved! We&apos;ll notify you at launch.
          </span>
        </div>
      ) : (
        <div className="claim-bar">
          <span className="claim-prefix">getvyb.vercel.app/</span>
          <input
            type="text"
            value={handle}
            onChange={(e) =>
              setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))
            }
            placeholder="yourname"
            spellCheck="false"
            autoComplete="off"
          />
          <button type="submit" className="claim-btn">
            <span>Claim your VYB</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m7 17 10-10M7 7h10v10" />
            </svg>
          </button>
        </div>
      )}
    </form>
  );
}
