"use client";

import { Profile, LinkItem } from "@/types/database";
import { trackLinkClick } from "@/app/actions/analytics";
import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";

interface PublicProfileProps {
  profile: Profile;
  links: LinkItem[];
}

export function PublicProfile({ profile, links }: PublicProfileProps) {
  const getIcon = (iconName: string | null) => {
    switch (iconName?.toLowerCase()) {
      case "github":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5 text-[#E4405F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case "twitter":
      case "x":
        return (
          <svg className="w-5 h-5 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return <Globe className="w-5 h-5 text-[#06B6D4]" />;
    }
  };

  const handleLinkClick = (link: LinkItem) => {
    trackLinkClick(link.id, profile.id);
  };

  return (
    <div
      data-theme={profile.theme || "dark"}
      className="min-h-screen flex flex-col justify-between items-center p-6 md:p-12 max-w-xl mx-auto selection:bg-[var(--fg)] selection:text-[var(--bg)]"
    >
      <div className="w-full flex flex-col items-center gap-8 py-8">
        {/* Social Story Avatar Ring */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#8B5CF6] opacity-90 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#EC4899] via-[#8B5CF6] to-[#06B6D4] shadow-2xl overflow-hidden flex items-center justify-center">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.display_name || profile.username}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-[#0A0814] flex items-center justify-center">
                <span className="font-bold text-4xl gradient-text uppercase">
                  {(profile.display_name || profile.username)[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text">
            {profile.display_name || `@${profile.username}`}
          </h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--line-2)] border border-purple-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-purple-300 font-semibold tracking-wider">
              @{profile.username}
            </span>
          </div>

          {profile.bio && (
            <p className="text-sm sm:text-base text-[var(--fg-2)] max-w-md mt-2 leading-relaxed font-medium">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-4 mt-6">
          {links.length === 0 ? (
            <div className="text-center p-8 rounded-2xl border border-dashed border-[var(--line-2)] font-mono text-xs text-[var(--muted)]">
              No links added yet.
            </div>
          ) : (
            links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(link)}
                className="group w-full p-4 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] backdrop-blur-xl hover:border-[#EC4899] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 flex items-center justify-between hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(link.icon)}
                  </div>
                  <span className="font-bold text-base tracking-wide group-hover:text-[#EC4899] transition-colors">
                    {link.title}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-purple-400 group-hover:text-[#EC4899] group-hover:translate-x-1 transition-all" />
              </a>
            ))
          )}
        </div>
      </div>

      {/* VYB Branding Footer */}
      <footer className="pt-8 font-mono text-xs text-[var(--muted)] flex items-center gap-2">
        <span>Powered by</span>
        <Link href="/" className="font-extrabold gradient-text hover:underline inline-flex items-center gap-1">
          <span>VYB</span>
          <span className="text-xs">↗</span>
        </Link>
      </footer>
    </div>
  );
}
