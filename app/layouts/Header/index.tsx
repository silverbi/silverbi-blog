"use client";

import React from "react";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import Link from "next/link";
import { HEADER_MENU } from "@common/constants";
import { usePathname } from "next/navigation";
import Interaction from "@components/atoms/Interaction";
import TopNav from "app/components/organisms/TopNav";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-50 flex h-16 w-full items-center justify-center border-b bg-background-1">
      <div className="flex h-fit w-full max-w-xl flex-row items-center justify-between bg-background-1 px-12">
        {/** 블로그 로고 */}
        <Link scroll={false} href={"/"}>
          <span className={"flex flex-row items-center gap-2"}>
            <Icon type={IconName.SILVERBI_SYMBOL} size={IconSizes.SM} />
            <Text>SILVERBI</Text>
          </span>
        </Link>

        {/** 메뉴 */}
        <span className={"flex flex-row items-center gap-6"}>
          {HEADER_MENU.map((label, index) => (
            <Interaction key={index}>
              <Link scroll={false} href={`/${label === "home" ? "" : label}`}>
                <Text bold={pathname === "/" ? label === "home" : pathname.includes(label)} className={"capitalize"}>
                  {label}
                </Text>
                {(pathname === "/" ? label === "home" : pathname.includes(label)) && (
                  <div className={"h-0.5 w-full bg-content-1"} />
                )}
              </Link>
            </Interaction>
          ))}
        </span>

        <TopNav />
      </div>
    </div>
  );
};

export default Header;
