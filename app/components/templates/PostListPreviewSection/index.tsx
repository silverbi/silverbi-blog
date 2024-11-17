import React from "react";
import Title from "@/components/atoms/Title";
import Chip from "@/components/atoms/Chip";
import PostList from "@/components/organisms/PostList";

const tempPostItem = [
  {
    id: 1,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    short_description:
      "Did you come here for something in particular or just general g in particular or just general Riker-bashing? And blowing into Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
  {
    id: 2,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    short_description:
      "Did you come here for something in particular or just general Riker-bashing? g in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
  {
    id: 3,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    short_description:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
];

export interface PostListPreviewSectionProps {
  title: string;
  handleClickMore: () => void;
}

export const PostListPreviewSection = ({ title, handleClickMore }: PostListPreviewSectionProps) => {
  return (
    <div className={"flex w-full flex-col gap-24 py-20"}>
      <div className={"flex w-full flex-row items-center justify-between"}>
        <Title>{title}</Title>

        <button className={"cursor-pointer"} onClick={handleClickMore}>
          <Chip type={"SECONDARY"} size={"SM"} className={"cursor-pointer"}>
            더 보기
          </Chip>
        </button>
      </div>

      <PostList posts={tempPostItem} />
    </div>
  );
};

export default PostListPreviewSection;
