"use server";

import { createClient } from "@/lib/supabase/server";

export async function trackLinkClick(linkId: string, userId: string) {
  const supabase = await createClient();

  // Increment link click count
  const { data: link } = await supabase
    .from("links")
    .select("click_count")
    .eq("id", linkId)
    .single();

  if (link) {
    await supabase
      .from("links")
      .update({ click_count: (link.click_count || 0) + 1 })
      .eq("id", linkId);
  }

  // Insert analytics event
  await supabase.from("analytics_events").insert({
    user_id: userId,
    link_id: linkId,
    event_type: "link_click",
  });
}
