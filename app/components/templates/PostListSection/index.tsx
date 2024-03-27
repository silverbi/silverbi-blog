import React from "react";
import Title from "@components/atoms/Title";
import Chip from "@components/atoms/Chip";
import { useRouter } from "next/router";

export interface PostListSectionProps {
  title: string;
  handleClickMore: () => void;
}

export const PostListSection: React.FC<PostListSectionProps> = ({ title, handleClickMore }) => {
  return (
    <div className={"flex w-full flex-col py-20"}>
      <div className={"flex flex-row items-center justify-between"}>
        <Title>{title}</Title>

        <button className={"cursor-pointer"} onClick={handleClickMore}>
          <Chip type={"SECONDARY"} size={"SM"} className={"cursor-pointer"}>
            더 보기
          </Chip>
        </button>
      </div>
    </div>
  );
};

export default PostListSection;
