"use client";

import { usePathname } from "next/navigation";

export const DashboardLayout = () => {
  const pathname = usePathname();

  // const links = [
  //   {
  //     href: "/dashboard",
  //     text: "dashboard",
  //     icon: IconName.FOLDER,
  //   },
  //   {
  //     href: "/dashboard/user",
  //     text: "user",
  //     icon: IconName.SEARCH,
  //   },
  // ];

  return (
    <div className={"flex w-full gap-6"}>
      {/* {links.map(({ href, text, icon }, index) => {
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
      })} */}
    </div>
  );
};
