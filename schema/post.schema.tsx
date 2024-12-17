import * as z from "zod";

export const PostFormSchema = z
  .object({
    title: z
      .string()
      .min(2, {
        message: "제목은 최소 2 글자 이상이어야 합니다.",
      })
      .default("제목"),
    subtitle: z
      .string({
        message: "소제목은 최소 2 글자 이상이어야 합니다.",
      })
      .default("소제목"),
    thumbnail: z.string().url({ message: "잘못된 주소입니다." }).default(""),
    content: z
      .string()
      .min(2, {
        message: "내용은 최소 2 글자 이상이어야 합니다.",
      })
      .default("내용"),
    is_published: z.boolean().default(false),
    comments_count: z.number().default(0),
    min_read: z.number().default(0),
    key: z.string().array().default([]),
    likes_count: z.number().default(0),
    short_description: z.string().default(""),
    updated_at: z.string().date().optional(),
    created_at: z.string().date().optional(),
  })
  .refine(
    data => {
      const thumbnail = data.thumbnail;
      try {
        const url = new URL(thumbnail);

        return url.hostname === "images.unsplash.com";
      } catch {
        return false;
      }
    },
    {
      message: "Currently we are support only the image from unsplash",
      path: ["thumbnail"],
    },
  );

export type PostFormSchemaTypes = z.infer<typeof PostFormSchema>;
