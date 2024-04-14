import React from "react";
import { RetrospectTypes } from "types/postTypes";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";
import Chip from "@components/atoms/Chip";

export interface RetrospectCardProps {
  retrospect: RetrospectTypes;
  className?: string | Array<string>;
}

export const EmptyRetrospectCard: React.FC = () => {
  return (
    <div
      className={
        "flex h-[520px] w-full cursor-pointer flex-col items-end gap-6 rounded-lg border border-layer-1 p-4 transition duration-300 ease-in-out hover:border hover:border-border-3"
      }
    >
      <div className={"justify-items flex h-full w-full flex-col items-center gap-4"}>
        <div className={"m-0 h-full w-full p-0 leading-none"}>
          <Skeleton count={1} height={"100%"} />
        </div>
        <div className={"flex h-full w-full flex-col gap-3"}>
          <Skeleton count={1} width={"40%"} />
          <Skeleton count={1} height={28} />
          <Skeleton count={1} height={28} width={"70%"} />
          <Skeleton count={3} />
        </div>
      </div>

      <div className={"h-fit w-[30%]"}>
        <Skeleton count={1} height={36} />
      </div>
    </div>
  );
};

export const RetrospectCard: React.FC<RetrospectCardProps> = ({ retrospect, className }) => {
  const router = useRouter();
  const { id, title, short_description, date, thumbnail } = retrospect;
  let empty = true;

  const handleClickRetrospectCard = () => {
    router.push(`/retrospects/${id}`);
  };

  if (empty) {
    return <EmptyRetrospectCard />;
  }

  return (
    <div
      onClick={handleClickRetrospectCard}
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-retrospect-card",
        "flex h-[520px] w-full cursor-pointer flex-col items-end gap-6 rounded-lg border border-layer-1 p-4 transition duration-300 ease-in-out hover:border hover:border-border-3",
      ].join(" ")}
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
