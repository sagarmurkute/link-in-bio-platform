"use client";

import { Profile, LinkItem } from "@/types/database";
import { trackLinkClick } from "@/app/actions/analytics";
import { ExternalLink, Globe, Github, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

interface PublicProfileProps {
  profile: Profile;
  links: LinkItem[];
}

export function PublicProfile({ profile, links }: PublicProfileProps) {
  const getIcon = (iconName: string | null) => {
    switch (iconName?.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "twitter":
      case "x":
        return <Twitter className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "youtube":
        return <Youtube className="w-5 h-5" />;
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
