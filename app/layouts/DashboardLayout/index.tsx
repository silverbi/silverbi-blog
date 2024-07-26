"use client";

import Link from "next/link";
import { cn } from "@utils/styles";
import Icon from "@components/atoms/Icon";
import { Colors } from "@styles/themes/types";
import Text from "@components/atoms/Text";
import React from "react";
import { usePathname } from "next/navigation";
import { IconName } from "@components/atoms/Icon/types";

export const DashboardLayout = () => {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard",
      text: "dashboard",
      icon: IconName.GRAPH,
    },
    {
      href: "/dashboard/user",
      text: "user",
      icon: IconName.PROFILE_CIRCLE,
    },
  ];

  return (
    <div className={"flex w-full gap-6"}>
      {links.map(({ href, text, icon }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={cn("flex items-center gap-0.5 underline-offset-4 transition-all hover:underline", {
              "text-content-primary underline": pathname === href,
            })}
          >
            <Icon color={pathname === href ? Colors.CONTENT_PRIMARY : Colors.CONTENT_1} type={icon} size={"XS"} />
            <Text color={pathname === href ? Colors.CONTENT_PRIMARY : Colors.CONTENT_1}>/{text}</Text>
          </Link>
        );
      })}
    </div>
  );
};
