"use client";

import React from "react";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import Link from "next/link";
import { HEADER_MENU } from "@common/constants";
import IconButton from "@components/atoms/IconButton";

export const Header: React.FC = () => {
  return (
    <div className="sticky flex h-20 w-full items-center justify-center bg-background-1">
      <div className="flex h-full w-full max-w-[1280px] flex-row items-center justify-between">
        {/** 블로그 로고 */}
        <Link href={"/"}>
          <span className={"flex flex-row items-center gap-2"}>
            <Icon type={IconName.SILVERBI_SYMBOL} size={IconSizes.SM} />
            <Text>SILVERBI</Text>
          </span>
        </Link>

        {/** 메뉴 */}
        <span className={"flex flex-row items-center gap-6"}>
          {HEADER_MENU.map((label, index) => (
            <Link key={index} href={`/${label === "home" ? "" : label}`}>
              <Text className={"capitalize"}>{label}</Text>
            </Link>
          ))}
        </span>

        <IconButton>
          <Icon type={IconName.MENU_BAR} size={IconSizes.LG} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
