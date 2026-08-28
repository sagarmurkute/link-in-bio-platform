"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("vyb-theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("vyb-theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line-2)] bg-[var(--card-bg)] text-xs font-mono tracking-wider text-[var(--fg)] hover:border-[var(--fg)] transition-all cursor-pointer"
      title="Toggle Light/Dark Theme"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-300" />
          <span>Ivory</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
