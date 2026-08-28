"use client";

import { Profile } from "@/types";

interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4 text-center">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full p-1 bg-white shadow-2xl flex items-center justify-center">
        {profile.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt={profile.display_name || profile.username}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[var(--fg)] text-[var(--bg)] flex items-center justify-center">
            <span className="font-extrabold text-3xl uppercase">
              {(profile.display_name || profile.username)[0]}
            </span>
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--fg)]">
          {profile.display_name || `@${profile.username}`}
        </h1>
        <p className="font-mono text-sm font-bold text-[var(--muted)]">
          @{profile.username}
        </p>

        {profile.bio && (
          <p className="text-base text-[var(--fg-2)] max-w-md mt-1 leading-relaxed font-semibold">
            {profile.bio}
          </p>
        )}
      </div>
    </div>
  );
}
