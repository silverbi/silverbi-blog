"use server";

import { PostFormSchemaTypes } from "@/schema/post.schema";
import { Database } from "@lib/types/database.types";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

interface CookiesToSetTypes {
  name: string;
  value: string;
  options: CookieOptions;
}

const cookieStore = cookies();

const supabase = createServerClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: CookiesToSetTypes[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }: CookiesToSetTypes) => cookieStore.set(name, value, options));
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  },
);

export async function createPost(data: PostFormSchemaTypes) {
  const { ["content"]: excludedKey, ...post } = data;

  const resultPost = await supabase.from("post").insert(data).select("id").single();

  if (resultPost.error) {
    return JSON.stringify(resultPost);
  } else {
    const result = await supabase
      .from("post_content")
      .insert({ post_id: resultPost.data.id!, content: data.content })
      .select("id")
      .single();

    return JSON.stringify(result);
  }
}
