"use client";

import { useState } from "react";
import { Profile, LinkItem } from "@/types/database";
import { addLinkAction, toggleLinkActiveAction, deleteLinkAction, updateProfileBioAction } from "@/app/actions/links";
import { signOutAction } from "@/app/actions/auth";
import Link from "next/link";
import {
  Plus,
  Trash2,
  ExternalLink,
  Eye,
  MousePointerClick,
  LogOut,
  Globe,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Settings,
  Sparkles,
  ToggleLeft,
  ToggleRight
} from "lucide-react";

interface DashboardClientProps {
  profile: Profile;
  links: LinkItem[];
}

export function DashboardClient({ profile, links }: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<"links" | "profile">("links");
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalClicks = links.reduce((acc, curr) => acc + (curr.click_count || 0), 0);

  const handleAddLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await addLinkAction(formData);
    setLoading(false);
    setShowAddModal(false);
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await updateProfileBioAction(formData);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] p-6 md:p-12 max-w-6xl mx-auto flex flex-col gap-10 selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      {/* Top Header Navigation */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--line-2)]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-[var(--line-2)] flex items-center justify-center font-serif text-xl bg-[var(--card-bg)]">
            {(profile.display_name || profile.username)[0].toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              {profile.display_name || profile.username}
            </h1>
            <a
              href={`/${profile.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--muted)] hover:text-[var(--fg)] inline-flex items-center gap-1 transition-colors"
            >
              <span>getvyb.vercel.app/{profile.username}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={`/${profile.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-[var(--line-2)] bg-[var(--card-bg)] font-mono text-xs text-[var(--fg)] hover:border-[var(--fg)] transition-all flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Preview</span>
          </a>
          <form action={signOutAction}>
            <button
              type="submit"
              className="px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 font-mono text-xs text-red-300 hover:bg-red-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </header>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] flex flex-col gap-2">
          <div className="flex items-center justify-between text-[var(--muted)]">
            <span className="font-mono text-xs uppercase tracking-wider">Total Links</span>
            <Globe className="w-4 h-4" />
          </div>
          <span className="font-serif text-4xl">{links.length}</span>
        </div>

        <div className="p-6 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] flex flex-col gap-2">
          <div className="flex items-center justify-between text-[var(--muted)]">
            <span className="font-mono text-xs uppercase tracking-wider">Total Clicks</span>
            <MousePointerClick className="w-4 h-4" />
          </div>
          <span className="font-serif text-4xl">{totalClicks}</span>
        </div>

        <div className="p-6 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] flex flex-col gap-2">
          <div className="flex items-center justify-between text-[var(--muted)]">
            <span className="font-mono text-xs uppercase tracking-wider">Active Status</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="font-mono text-lg text-emerald-400 font-semibold uppercase tracking-wider mt-1">
            Live Platform
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-4 border-b border-[var(--line)] pb-4 font-mono text-sm">
        <button
          onClick={() => setActiveTab("links")}
          className={`pb-2 transition-all cursor-pointer ${
            activeTab === "links"
              ? "text-[var(--fg)] border-b-2 border-[var(--fg)] font-semibold"
              : "text-[var(--muted)] hover:text-[var(--fg)]"
          }`}
        >
          My Links ({links.length})
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-2 transition-all cursor-pointer ${
            activeTab === "profile"
              ? "text-[var(--fg)] border-b-2 border-[var(--fg)] font-semibold"
              : "text-[var(--muted)] hover:text-[var(--fg)]"
          }`}
        >
          Profile Settings
        </button>
      </div>

      {/* Tab 1: Links Management */}
      {activeTab === "links" && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              LINK STACK MANAGEMENT
            </h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 rounded-xl bg-[var(--fg)] text-[var(--bg)] font-mono text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Link</span>
            </button>
          </div>

          {/* Links List */}
          <div className="flex flex-col gap-4">
            {links.length === 0 ? (
              <div className="text-center p-12 rounded-3xl border border-dashed border-[var(--line-2)] flex flex-col items-center gap-4">
                <Globe className="w-8 h-8 text-[var(--muted)]" />
                <p className="font-mono text-sm text-[var(--muted)]">
                  You haven’t added any links yet. Click "Add New Link" above to build your stack.
                </p>
              </div>
            ) : (
              links.map((link) => (
                <div
                  key={link.id}
                  className="p-5 rounded-2xl border border-[var(--line-2)] bg-[var(--card-bg)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-[var(--line-2)] flex items-center justify-center text-[var(--muted)]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{link.title}</h3>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[var(--muted)] hover:underline truncate max-w-xs block"
                      >
                        {link.url}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {link.click_count || 0} clicks
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLinkActiveAction(link.id, link.is_active)}
                        className="p-2 text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
                        title={link.is_active ? "Deactivate Link" : "Activate Link"}
                      >
                        {link.is_active ? (
                          <ToggleRight className="w-6 h-6 text-emerald-400" />
                        ) : (
                          <ToggleLeft className="w-6 h-6" />
                        )}
                      </button>
                      <button
                        onClick={() => deleteLinkAction(link.id)}
                        className="p-2 text-red-400/70 hover:text-red-400 cursor-pointer"
                        title="Delete Link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Profile Settings */}
      {activeTab === "profile" && (
        <form onSubmit={handleUpdateProfile} className="max-w-xl flex flex-col gap-6 p-8 rounded-3xl border border-[var(--line-2)] bg-[var(--card-bg)]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            PUBLIC PROFILE DETAILS
          </h2>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
              Display Name
            </label>
            <input
              type="text"
              name="display_name"
              defaultValue={profile.display_name || ""}
              placeholder="Sagar Murkute"
              className="px-4 py-2.5 rounded-xl border border-[var(--line-2)] bg-[var(--bg)] font-mono text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--fg)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
              Bio / Short Description
            </label>
            <textarea
              name="bio"
              rows={3}
              defaultValue={profile.bio || ""}
              placeholder="Building VYB. Developer & Creator."
              className="px-4 py-2.5 rounded-xl border border-[var(--line-2)] bg-[var(--bg)] font-mono text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--fg)] resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
              Public Theme Mode
            </label>
            <select
              name="theme"
              defaultValue={profile.theme || "dark"}
              className="px-4 py-2.5 rounded-xl border border-[var(--line-2)] bg-[var(--bg)] font-mono text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--fg)] cursor-pointer"
            >
              <option value="dark">Dark Luxury (#08080A)</option>
              <option value="light">Subtle Ivory (#F4F0EB)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-3 px-6 rounded-xl bg-[var(--fg)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Profile Settings"}
          </button>
        </form>
      )}

      {/* Add Link Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <form
            onSubmit={handleAddLink}
            className="w-full max-w-md p-8 rounded-3xl border border-[var(--line-2)] bg-[var(--bg)] flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex justify-between items-center border-b border-[var(--line-2)] pb-4">
              <h3 className="font-mono text-sm uppercase tracking-wider font-semibold">
                Add New Destination
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-[var(--muted)] hover:text-[var(--fg)] font-mono text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="My GitHub Profile"
                className="px-4 py-2.5 rounded-xl border border-[var(--line-2)] bg-[var(--card-bg)] font-mono text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--fg)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                Destination URL
              </label>
              <input
                type="url"
                name="url"
                required
                placeholder="https://github.com/sagarmurkute"
                className="px-4 py-2.5 rounded-xl border border-[var(--line-2)] bg-[var(--card-bg)] font-mono text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--fg)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                Icon Type
              </label>
              <select
                name="icon"
                className="px-4 py-2.5 rounded-xl border border-[var(--line-2)] bg-[var(--card-bg)] font-mono text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--fg)] cursor-pointer"
              >
                <option value="globe">Globe / Website</option>
                <option value="github">GitHub</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">X / Twitter</option>
                <option value="linkedin">LinkedIn</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl font-mono text-xs text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-[var(--fg)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add Link"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
