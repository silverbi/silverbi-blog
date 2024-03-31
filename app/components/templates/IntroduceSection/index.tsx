import React from "react";
import Chip from "@components/atoms/Chip";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import Icon from "@components/atoms/Icon";
import Image from "next/image";
import Tag from "@components/atoms/Tag";
import Link from "next/link";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@common/constants";

export interface IntroduceSection {}

export const IntroduceSection: React.FC<IntroduceSection> = ({}) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Chip icon={IconName.CONCENTRIC_CIRCLES}>Available for work</Chip>

      <Text type={Typography.TITLE_1} bold>
        Welcome to my world ✨
      </Text>

      <div className={"flex flex-row items-center gap-3"}>
        <Icon type={IconName.MAP} size={"MD"} />
        <Text type={Typography.SUBTITLE_1}>South Korea, Seoul</Text>
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-16 py-12">
        <Image
          width={382}
          height={510}
          src={require("@assets/images/profile-avatar.png")}
          alt={"실버비 프로필 이미지"}
        />
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
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Javascript</Tag>
            <Tag>Typescript</Tag>
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
          </div>

          <Text type={Typography.BODY_1}>
            어디에서나 도움을 줄 수 있는 개발자가 되는 것을 목표로 달리고 있습니다. 문제를 찾아서 해결하기 위해
            주도적으로 행동하고, 조직 문화와 프로덕트가 더 나은 방향으로 나아갈 수 있기 위해 적극 노력합니다.
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
