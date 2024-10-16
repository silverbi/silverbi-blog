import React from "react";
import Chip from "@components/atoms/Chip";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import Icon from "@components/atoms/Icon";
import Image from "next/image";
import Tag from "@components/atoms/Tag";
import Link from "next/link";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@common/constants";
import CustomImage from "app/components/atoms/CustomImage";
import { ImageTypes } from "@components/atoms/CustomImage/types";

export interface IntroduceSection {}

export const IntroduceSection: React.FC<IntroduceSection> = ({}) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Chip icon={IconName.STICKER_CIRCLE}>Available for work</Chip>

      <Text type={Typography.TITLE_1} bold>
        Welcome to my world ✨
      </Text>

      <div className={"flex flex-row items-center gap-3"}>
        <Icon type={IconName.MARKER_PIN} size={"MD"} />
        <Text type={Typography.SUBTITLE_1}>South Korea, Seoul</Text>
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-12 py-12">
        <CustomImage width={300} height={510} tag={ImageTypes.PROFILE_CHARACTER} alt={"실버비 프로필 이미지"} />
        <div className={"flex w-full flex-col gap-7"}>
          <div className={"flex flex-col"}>
            <Text type={Typography.TITLE_3} bold>
              현은비 Hyun Eunbi
            </Text>
            <Text type={Typography.HEAD_3} bold>
              Software Engineer
            </Text>
          </div>

          <div className={"flex flex-row gap-1.5"}>
            {["HTML", "CSS", "Javascript", "Typescript", "React", "Next.js"].map((label, index) => (
              <Tag type={"SECONDARY"} key={index}>
                {label}
              </Tag>
            ))}
          </div>

          <Text type={Typography.BODY_1}>
            견고하고 유연한 코드를 지향합니다. 이것저것 만드는 것을 좋아합니다. 문제를 찾아서 해결하기 위해 주도적으로
            행동하고, 조직 문화와 프로덕트가 더 나은 방향으로 나아갈 수 있기 위해 적극 노력합니다.
          </Text>

          <div className="flex items-center gap-4">
            <Link href={LINKEDIN_URL} target="_blank">
              <Icon type={IconName.LINKEDIN_LOGO} size={IconSizes.SM} />
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank">
              <Icon type={IconName.INSTAGRAM_LOGO} size={IconSizes.SM} />
            </Link>
            <Link href={GITHUB_URL} target="_blank">
              <Icon type={IconName.GITHUB_LOGO} size={IconSizes.SM} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
