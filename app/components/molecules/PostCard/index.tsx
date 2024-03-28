import React from "react";
import { PostTypes } from "types/postTypes";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import Tag from "@components/atoms/Tag";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes } from "@components/atoms/Icon/types";

export interface PostCardProps {
  post: PostTypes;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, tags, summary, date, thumbnail, like, minRead } = post;
  return (
    <div
      className={
        "flex h-full max-h-[240px] w-full cursor-pointer flex-row items-center gap-8 rounded-lg border border-layer-1 p-4 hover:border hover:border-border-3"
      }
    >
      <div className={"h-full w-1/3 rounded-lg bg-link-disabled"} />

      <div className={"flex h-full w-2/3 flex-col gap-3"}>
        <div className={"flex flex-row gap-2"}>
          {tags.map((tag, index) => (
            <Tag size={"XS"} key={index} type={"SECONDARY"}>
              {tag}
            </Tag>
          ))}
        </div>
        <Text type={Typography.SUBTITLE_2} bold>
          {title}
        </Text>
        <div className={"flex items-center gap-4"}>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.CALENDAR} size={IconSizes.XS} />
            <Text type={Typography.CAPTION_1}>{date}</Text>
          </div>
          <Text type={Typography.CAPTION_1}>|</Text>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.CLOCK} size={IconSizes.XS} />
            <Text type={Typography.CAPTION_1}>{minRead} min read</Text>
          </div>
          <Text type={Typography.CAPTION_1}>|</Text>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.HEART} size={IconSizes.XS} />
            <Text type={Typography.CAPTION_1}>{like}</Text>
          </div>
        </div>

        <Text className={"line-clamp-3"} type={Typography.BODY_3}>
          {summary}
        </Text>
      </div>
    </div>
  );
};

export default PostCard;
