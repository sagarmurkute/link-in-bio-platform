"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function addLinkAction(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized" };

  const title = formData.get("title") as string;
  const url = formData.get("url") as string;
  const icon = (formData.get("icon") as string) || "globe";

  if (!title || !url) return { error: "Title and URL are required." };

  const { data: existingLinks } = await supabase
    .from("links")
    .select("position")
    .eq("user_id", user.id)
    .order("position", { ascending: false })
    .limit(1);

  const nextPos = existingLinks && existingLinks.length > 0 ? existingLinks[0].position + 1 : 0;

  await supabase.from("links").insert({
    user_id: user.id,
    title,
    url,
    icon,
    position: nextPos,
    is_active: true,
  });

  revalidatePath("/dashboard");
  return { success: true };
}

export async function toggleLinkActiveAction(linkId: string, isActive: boolean) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized" };

  await supabase
    .from("links")
    .update({ is_active: !isActive })
    .eq("id", linkId)
    .eq("user_id", user.id);

  revalidatePath("/dashboard");
}

export async function deleteLinkAction(linkId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized" };

  await supabase
    .from("links")
    .delete()
    .eq("id", linkId)
    .eq("user_id", user.id);

  revalidatePath("/dashboard");
}

export async function updateProfileBioAction(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized" };

  const displayName = formData.get("display_name") as string;
  const bio = formData.get("bio") as string;
  const theme = (formData.get("theme") as string) || "dark";

  await supabase
    .from("profiles")
    .update({
      display_name: displayName,
      bio,
      theme,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id);

  revalidatePath("/dashboard");
  return { success: true };
}
