import React from "react";
import { RetrospectTypes } from "types/postTypes";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import Skeleton from "react-loading-skeleton";

import Tag from "@components/atoms/Tag";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import { useRouter } from "next/navigation";
import Chip from "@components/atoms/Chip";

export interface RetrospectCardProps {
  retrospect: RetrospectTypes;
}

export const RetrospectCard: React.FC<RetrospectCardProps> = ({ retrospect }) => {
  const router = useRouter();
  const { id, title, short_description, date, thumbnail } = retrospect;

  const handleClickRetrospectCard = () => {
    router.push(`/retrospects/${id}`);
  };

  return (
    <div
      onClick={handleClickRetrospectCard}
      className={
        "flex h-[520px] w-full cursor-pointer flex-col items-end gap-6 rounded-lg border border-layer-1 p-4 transition duration-300 ease-in-out hover:border hover:border-border-3"
      }
    >
      <div className={"justify-items flex h-full w-full flex-col items-center gap-4"}>
        {/** 스켈레톤 loader */}
        <div className={"h-48 w-full leading-none"}>
          <Skeleton count={1} height={"100%"} />
        </div>
        <div className={"flex h-fit w-full flex-col gap-3"}>
          <div className={"flex flex-col gap-1"}>
            <Text type={Typography.BODY_3}>{date}</Text>
            <Text type={Typography.SUBTITLE_1} bold>
              {title}
            </Text>
          </div>

          <Text className={"line-clamp-3"} type={Typography.BODY_2}>
            {short_description}
          </Text>
        </div>
      </div>

      <Chip className={"cursor-pointer"} size={"SM"}>
        더보기
      </Chip>
    </div>
  );
};

export default RetrospectCard;
