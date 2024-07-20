"use server";

import { createClient } from "@lib/supabase/server";
import { redirect } from "next/navigation";

export const login = async (provider: "github" | "google", nextUrl: string) => {
  const supabase = createClient();

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: process.env.NEXT_PUBLIC_BASE_URL + `/auth/callback?next=${nextUrl}`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url);
  }
};

export const logout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  redirect("/");
};

export const getUser = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return data.user;
};
