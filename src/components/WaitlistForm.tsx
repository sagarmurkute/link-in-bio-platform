"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={`waitlist ${submitted ? "is-success" : ""}`} id="waitlist">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        autoComplete="email"
        spellCheck="false"
      />
      <button type="button" onClick={handleSubmit} className="waitlist-btn" id="waitlistBtn">
        <span>Join waitlist</span>
        <span>↗</span>
      </button>
      <div className="waitlist-success mono upper">
        You’re on the list — we’ll reach out quietly.
      </div>
    </div>
  );
}
