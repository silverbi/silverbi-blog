import React from "react";
import Title from "@components/atoms/Title";
import Chip from "@components/atoms/Chip";
import PostList from "@components/organisms/PostList";

const tempPostItem = [
  {
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    summary:
      "Did you come here for something in particular or just general g in particular or just general Riker-bashing? And blowing into Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
  {
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    summary:
      "Did you come here for something in particular or just general Riker-bashing? g in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
  {
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    summary:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
];

export interface PostListSectionProps {
  title: string;
  handleClickMore: () => void;
}

export const PostListSection: React.FC<PostListSectionProps> = ({ title, handleClickMore }) => {
  return (
    <div className={"flex w-full flex-col gap-24 py-20"}>
      <div className={"flex flex-row items-center justify-between"}>
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

export default PostListSection;
