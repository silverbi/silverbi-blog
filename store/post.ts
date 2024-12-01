import { PostFormSchemaTypes } from "schema/post.schema";
import { create } from "zustand";

interface PostState {
  post: PostFormSchemaTypes;
  setPost: (post: PostFormSchemaTypes) => void;
}

export const usePostState = create<PostState>()(set => ({
  post: {
    title: "",
    subtitle: "",
    thumbnail: "",
    content: "",
    is_published: true,
    comments_count: 0,
    min_read: 0,
    key: [""],
    likes_count: 0,
    short_description: "",
    updated_at: "",
    created_at: "",
  },
  setPost: (post: PostFormSchemaTypes) => set(() => ({ post })),
}));
