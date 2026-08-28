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
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case "twitter":
      case "x":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return <Globe className="w-5 h-5" />;
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
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full border-2 border-[var(--line-2)] p-1 bg-[var(--card-bg)] shadow-xl overflow-hidden flex items-center justify-center">
          {profile.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt={profile.display_name || profile.username}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="font-serif text-3xl text-[var(--fg)] uppercase">
              {(profile.display_name || profile.username)[0]}
            </span>
          )}
        </div>

        {/* User Info */}
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--fg)]">
            {profile.display_name || `@${profile.username}`}
          </h1>
          <p className="font-mono text-xs text-[var(--muted)] tracking-wider">
            @{profile.username}
          </p>
          {profile.bio && (
            <p className="text-sm text-[var(--muted)] max-w-md mt-1 leading-relaxed">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-3 mt-4">
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
                className="group w-full p-4 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors">
                    {getIcon(link.icon)}
                  </span>
                  <span className="font-medium text-sm sm:text-base tracking-wide">
                    {link.title}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            ))
          )}
        </div>
      </div>

      {/* VYB Branding Footer */}
      <footer className="pt-8 font-mono text-xs text-[var(--muted)] flex items-center gap-2">
        <span>Powered by</span>
        <Link href="/" className="font-semibold text-[var(--fg)] hover:underline inline-flex items-center gap-1">
          <span>VYB</span>
          <span className="text-[10px]">↗</span>
        </Link>
      </footer>
    </div>
  );
}
