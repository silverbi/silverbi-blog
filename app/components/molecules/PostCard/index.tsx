import React from "react";
import { PostTypes } from "types/postTypes";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import Skeleton from "react-loading-skeleton";

import Tag from "@components/atoms/Tag";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import { useRouter } from "next/navigation";

export interface PostCardProps {
  post: PostTypes;
  className?: string | Array<string>;
}

export const EmptyPostCard = () => {
  return (
    <div
      className={
        "flex h-[240px] w-full cursor-pointer flex-row items-center gap-8 rounded-lg border border-layer-1 p-4 transition duration-300 ease-in-out hover:border hover:border-border-3"
      }
    >
      <div className={"m-0 h-full w-1/3 p-0 leading-none"}>
        <Skeleton count={1} height={"100%"} />
      </div>
      <div className={"flex h-full w-2/3 flex-col gap-3"}>
        <Skeleton count={1} height={28} width={"40%"} />
        <Skeleton count={1} height={36} />
        <Skeleton count={1} height={28} width={"60%"} />
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export const PostCard = ({ post, className }: PostCardProps) => {
  const router = useRouter();
  const { id, title, tags, short_description, date, thumbnail, like, minRead } = post;
  let empty = true;

  const handleClickPostCard = () => {
    router.push(`/tech/${id}`);
  };

  if (empty) {
    return <EmptyPostCard />;
  }

  return (
    <div
      onClick={handleClickPostCard}
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-post-card",
        "flex h-full max-h-[240px] w-full cursor-pointer flex-row items-center gap-8 rounded-lg border border-layer-1 p-4 transition duration-300 ease-in-out hover:border hover:border-border-3",
      ].join(" ")}
    >
      {/** 스켈레톤 loader */}
      <div className={"m-0 h-full w-1/3 p-0 leading-none"}>
        <Skeleton count={1} height={"100%"} />
      </div>
      <div className={"flex h-full w-2/3 flex-col gap-3"}>
        <div className={"flex flex-row gap-2"}>
          {tags.map((tag, index) => (
            <Tag size={"SM"} key={index} type={"SECONDARY"}>
              {tag}
            </Tag>
          ))}
        </div>
        <Text type={Typography.SUBTITLE_1} bold>
          {title}
        </Text>
        <div className={"flex items-center gap-4"}>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.CALENDAR_CHECK} size={IconSizes.XS} />
            <Text type={Typography.BODY_3}>{date}</Text>
          </div>
          <Text type={Typography.BODY_3}>|</Text>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.ALARM_CLOCK} size={IconSizes.XS} />
            <Text type={Typography.BODY_3}>{minRead} min read</Text>
          </div>
          <Text type={Typography.BODY_3}>|</Text>
          <div className={"flex items-center gap-1"}>
            <Icon type={IconName.HEART_ROUNDED} size={IconSizes.XS} />
            <Text type={Typography.BODY_3}>{like}</Text>
          </div>
        </div>

        <Text className={"line-clamp-3"} type={Typography.BODY_2}>
          {short_description}
        </Text>
      </div>
    </div>
  );
};

export default PostCard;
