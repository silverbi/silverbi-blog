import React from "react";
import { PostTypes } from "types/postTypes";
import PostCard from "@/components/molecules/PostCard";

export interface PostListProps {
  posts: PostTypes[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={"flex w-full flex-col gap-6"}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
