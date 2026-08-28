import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardClient } from "@/components/DashboardClient";

export const metadata = {
  title: "Dashboard — VYB",
  description: "Manage your links, profile settings, and digital presence on VYB.",
};

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch or create user profile in Supabase
  let { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) {
    const defaultUsername = user.email?.split("@")[0].toLowerCase() || `user_${Date.now()}`;
    const { data: createdProfile } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        username: defaultUsername,
        display_name: defaultUsername,
      })
      .select("*")
      .single();

    profile = createdProfile || {
      id: user.id,
      username: defaultUsername,
      display_name: defaultUsername,
      bio: null,
      avatar_url: null,
      theme: "dark",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }

  // Fetch user links
  const { data: links } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", user.id)
    .order("position", { ascending: true });

  return <DashboardClient profile={profile!} links={links || []} />;
}
