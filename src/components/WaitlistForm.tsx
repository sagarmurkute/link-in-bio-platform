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
        <div className="p-4 rounded-full bg-[#D2E823] text-[#254F1A] font-extrabold text-center text-sm shadow-xl animate-bounce">
          🎉 Handle Reserved! We will notify you when launch starts.
        </div>
      ) : (
        <div className="claim-bar">
          <span className="claim-prefix">getvyb.vercel.app/</span>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
            placeholder="yourname"
            spellCheck="false"
            autoComplete="off"
          />
          <button type="submit" className="claim-btn">
            <span>Claim your VYB</span>
            <span>↗</span>
          </button>
        </div>
      )}
    </form>
  );
}
