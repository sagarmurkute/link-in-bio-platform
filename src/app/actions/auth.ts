"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please provide both email and password." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/dashboard");
}

export async function signupAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = (formData.get("username") as string)?.toLowerCase().trim();

  if (!email || !password || !username) {
    return { error: "Please fill in all fields (username, email, and password)." };
  }

  const supabase = await createClient();

  // Check if username is already taken
  const { data: existing } = await supabase
    .from("profiles")
    .select("username")
    .eq("username", username)
    .single();

  if (existing) {
    return { error: `The username @${username} is already taken. Please choose another.` };
  }

  // Register user in Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return { error: authError.message };
  }

  if (authData.user) {
    // Create profile record in public.profiles table
    await supabase.from("profiles").insert({
      id: authData.user.id,
      username: username,
      display_name: username,
    });
  }

  redirect("/dashboard");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
