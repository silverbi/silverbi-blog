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

  console.log("data ,", data);

  if (data.url) {
    redirect(data.url);
  }
};
