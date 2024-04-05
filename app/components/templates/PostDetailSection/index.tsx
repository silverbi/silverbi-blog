"use client";

import React, { useState } from "react";
import { PostDetailTypes } from "types/postTypes";
import Text from "@components/atoms/Text";
import { Colors, Typography } from "@styles/themes/types";
import Tag from "@components/atoms/Tag";
import Icon from "@components/atoms/Icon";
import Markdown from "@components/atoms/Markdown";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import IconButton from "@components/atoms/IconButton";

export interface PostDetailSectionProps {
  post: PostDetailTypes;
}

const PostDetailSection: React.FC<PostDetailSectionProps> = ({ post }) => {
  const { title, subtitle, short_description, body, tags, date, minRead, like, comments, series, linked_posts } = post;
  const [selectedShareButton, setSelectedShareButton] = useState(false);
  const [selectedLikeButton, setSelectedLikeButton] = useState(false);

  const handleClickShareButton = () => {
    setSelectedShareButton(!selectedShareButton);
  };
  const handleClickLikeButton = () => {
    setSelectedLikeButton(!selectedLikeButton);
  };

  return (
    <div className={"relative flex w-full flex-col items-start justify-start gap-28"}>
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
            <Icon type={IconName.HEART_OUTLINE} size={IconSizes.SM} />
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
        <div className={"flex gap-3"}>
          {tags.map((tag, index) => (
            <Tag type={"SECONDARY"} size={"MD"} key={index}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <div className={"h-[520px] w-full rounded-[24px] bg-content-disabled"} />

      <Markdown>{body}</Markdown>

      <div className={`relative z-20 h-fit w-full`}>
        <div className={"absolute -right-40 h-fit w-[120px]"}>
          <div className={`fixed bottom-12 flex h-fit w-fit flex-col gap-3`}>
            <IconButton className={"rounded-full border bg-background-1 p-3"} onClick={handleClickShareButton}>
              <Icon type={IconName.SHARE} size={"MD"} className={"hover:opacity-60"} />
            </IconButton>
            <IconButton className={"rounded-full border bg-background-1 p-3"} onClick={handleClickLikeButton}>
              {selectedLikeButton ? (
                <Icon
                  type={IconName.HEART_FILL}
                  size={"MD"}
                  color={Colors.CONTENT_PRIMARY}
                  className={"hover:opacity-60"}
                />
              ) : (
                <Icon type={IconName.HEART_OUTLINE} size={"MD"} className={"hover:opacity-60"} />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailSection;
