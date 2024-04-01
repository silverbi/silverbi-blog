import React from "react";
import { PostDetailTypes } from "types/postTypes";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import Tag from "@components/atoms/Tag";
import Icon from "@components/atoms/Icon";
import Markdown from "@components/atoms/Markdown";
import { IconName, IconSizes } from "@components/atoms/Icon/types";

export interface PostDetailSectionProps {
  post: PostDetailTypes;
}

const PostDetailSection: React.FC<PostDetailSectionProps> = ({ post }) => {
  const { title, subtitle, short_description, body, tags, date, minRead, like, comments, series, linked_posts } = post;

  return (
    <div className={"flex w-full flex-col items-start justify-start gap-28"}>
      <div className={"flex w-full flex-col gap-6"}>
        <div className={"flex items-center gap-4"}>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.CALENDAR} size={IconSizes.SM} />
            <Text type={Typography.BODY_2}>{date}</Text>
          </div>
          <Text type={Typography.BODY_2}>|</Text>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.CLOCK} size={IconSizes.SM} />
            <Text type={Typography.BODY_2}>{minRead} min read</Text>
          </div>
          <Text type={Typography.BODY_2}>|</Text>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.HEART} size={IconSizes.SM} />
            <Text type={Typography.BODY_2}>{like}</Text>
          </div>
        </div>

        <div className={"flex flex-col"}>
          <Text type={Typography.TITLE_1} bold>
            {title}
          </Text>
          <Text type={Typography.TITLE_3} bold>
            {subtitle}
          </Text>
        </div>
        <div className={"flex gap-4"}>
          {tags.map((tag, index) => (
            <Tag type={"SECONDARY"} size={"MD"} key={index}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <div className={"h-[520px] w-full rounded-[24px] bg-content-disabled"} />

      <Markdown>{body}</Markdown>
    </div>
  );
};

export default PostDetailSection;
