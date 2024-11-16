import React from "react";
import Link from "next/link";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { Colors, Typography } from "@styles/themes/types";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@common/constants";

export const Footer = () => {
  return (
    <div className="relative flex w-full items-center justify-center border-t border-t-border-1 bg-background-1 px-12">
      <div className="flex h-full w-full max-w-[1280px] flex-col items-center justify-between gap-8 py-10">
        <div className="flex w-full items-center justify-between">
          {/** 블로그 로고 */}
          <Link href={"/"}>
            <span className={"flex flex-row items-center gap-2"}>
              <Icon type={IconName.SILVERBI_SYMBOL} color={Colors.CONTENT_1} size={IconSizes.SM} />
              <Text>SILVERBI</Text>
            </span>
          </Link>

          <div className="flex flex-col items-end justify-center">
            <Text bold>Silverbi Blog</Text>
            <Text type={Typography.BODY_2} light>
              {`어제보다 한 걸음 더 나아가기`}
            </Text>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <Text type={Typography.BODY_2} light>
            Made by silverbi · ©2024 silverbi
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

export default Footer;
