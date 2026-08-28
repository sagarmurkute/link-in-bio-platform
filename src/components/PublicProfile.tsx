"use client";

import { Profile, LinkItem } from "@/types";
import { ProfileHeader } from "./profile/ProfileHeader";
import { ProfileLinks } from "./profile/ProfileLinks";
import { ProfileFooter } from "./profile/ProfileFooter";

interface PublicProfileProps {
  profile: Profile;
  links: LinkItem[];
}

export function PublicProfile({ profile, links }: PublicProfileProps) {
  return (
    <div
      data-theme={profile.theme || "ivory"}
      className="min-h-screen flex flex-col justify-between items-center p-6 md:p-12 max-w-xl mx-auto bg-[#FFFFE3]"
    >
      <div className="w-full flex flex-col items-center gap-6 py-6">
        <ProfileHeader profile={profile} />
        <ProfileLinks links={links} userId={profile.id} />
      </div>

      <ProfileFooter />
    </div>
  );
}
