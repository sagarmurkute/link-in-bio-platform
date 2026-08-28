import { createClient } from "@/lib/supabase/server";
import { PublicProfile } from "@/components/PublicProfile";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} — VYB`,
    description: `Check out ${username}'s links and digital space on VYB.`,
  };
}

export default async function UserProfilePage({ params }: PageProps) {
  const { username } = await params;
  const supabase = await createClient();

  // Fetch user profile from Supabase
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username.toLowerCase())
    .single();

  // Handle case where profile does not exist in Supabase
  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--fg)] selection:text-[var(--bg)]">
        <div className="flex flex-col items-center gap-6 max-w-md">
          <div className="w-16 h-16 rounded-full border border-[var(--line-2)] flex items-center justify-center font-mono text-xl text-[var(--muted)]">
            @
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight">
              Handle Available
            </h1>
            <p className="text-sm font-mono text-[var(--muted)]">
              The username <span className="text-[var(--fg)] font-semibold">@{username}</span> has not been claimed yet.
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 px-6 py-3 rounded-full bg-[var(--fg)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
          >
            Claim @{username} on VYB
          </Link>
        </div>
      </div>
    );
  }

  // Fetch active links for profile
  const { data: links } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", profile.id)
    .eq("is_active", true)
    .order("position", { ascending: true });

  return <PublicProfile profile={profile} links={links || []} />;
}
