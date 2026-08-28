import Link from "next/link";

export function ProfileFooter() {
  return (
    <footer className="pt-8 font-extrabold text-sm text-[var(--fg)] flex items-center gap-2">
      <span>Powered by</span>
      <Link href="/" className="underline hover:opacity-80">
        VYB ↗
      </Link>
    </footer>
  );
}
