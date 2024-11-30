"use client";

import {
  Button,
  Icon,
  ModeToggle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Text,
} from "@components/ui";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-center border-b px-12 bg-background">
      <Link scroll={false} href={"/"} className={"flex flex-row items-center gap-2 h-full"}>
        <Icon icon={"icon-silverbi-symbol"} size={"sm"} />
        <Text bold variant={"body-1"}>
          SILVERBI
        </Text>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/tech" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>개발</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/project" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>프로젝트</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/retrospect" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>회고</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className={"flex gap-2 items-center"}>
        <Button asChild size={"sm"}>
          <Link href="/login">로그인</Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
