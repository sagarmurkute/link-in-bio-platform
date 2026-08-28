"use client";

import { LinkItem } from "@/types";
import { trackLinkClick } from "@/app/actions/analytics";
import { ExternalLink, Globe } from "lucide-react";

interface ProfileLinksProps {
  links: LinkItem[];
  userId: string;
}

export function ProfileLinks({ links, userId }: ProfileLinksProps) {
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
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const handleLinkClick = (link: LinkItem) => {
    trackLinkClick(link.id, userId);
  };

  if (links.length === 0) {
    return (
      <div className="w-full text-center p-8 rounded-3xl border-2 border-dashed border-[var(--line)] font-bold text-sm text-[var(--muted)]">
        No links added yet.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4 mt-6">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick(link)}
          className="group w-full py-4 px-6 rounded-full bg-[var(--fg)] text-[var(--bg)] font-extrabold text-base hover:scale-[1.03] transition-transform duration-300 flex items-center justify-between shadow-xl"
        >
          <div className="flex items-center gap-3">
            <span>{getIcon(link.icon)}</span>
            <span>{link.title}</span>
          </div>
          <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  );
}
