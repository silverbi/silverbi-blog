import React, { useState } from "react";
import IconButton from "@components/atoms/IconButton";
import Icon from "@components/atoms/Icon";
import { IconName, IconSizes, IconTypes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { routeData } from "@components/organisms/TopNav/routeDataSet";
import { usePathname } from "next/navigation";
import { Colors, Typography } from "@styles/themes/types";

export type OptionsTypes = {
  label: string | number;
  value: string | number;
  icon: IconTypes;
};

export const TopNav: React.FC = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const interactions = {
    active: "duration-300 bg-transparent transition ease-in-out",
    inactive: "duration-300 bg-transparent transition ease-in-out hover:bg-hover-light",
  };

  const colors = {
    active: "duration-300 bg-content-1 transition ease-in-out active:scale-90",
    inactive: "duration-300 bg-transparent transition ease-in-out active:scale-90",
  };

  const wrappers = {
    active: "max-h-80 visible opacity-100 transition-all ease-in-out duration-300",
    inactive: "max-h-0 invisible opacity-0 transition-all ease-in-out duration-300",
  };
  const wrapperClasses = wrappers[isOpenMenu ? "active" : "inactive"];

  return (
    <div>
      {isOpenMenu && (
        <div onClick={handleOpenMenu} className={"z-90 absolute bottom-0 left-0 right-0 top-0 h-screen w-screen"} />
      )}

      <div className={"relative"}>
        <IconButton onClick={handleOpenMenu} interactionClasses={isOpenMenu ? "bg-hover-light" : ""}>
          <Icon type={IconName.MENU_BAR} size={IconSizes.LG} />
        </IconButton>

        {/** menu section */}
        <div
          className={`z-100 origin-top-down absolute right-0 top-12 mt-1 flex w-auto min-w-44 cursor-pointer flex-col gap-1 rounded-lg border border-content-1 bg-content-inverse-1 p-2 drop-shadow-lg ${wrapperClasses}`}
        >
          {routeData.map((item: OptionsTypes, index: number) => {
            const isSelectedItem = pathname === `/${item.value}`;
            let colorClasses = colors[isSelectedItem ? "active" : "inactive"];
            let interactionClasses = interactions[isSelectedItem ? "active" : "inactive"];

            return (
              <div key={index} className={`overflow-hidden rounded-lg ${interactionClasses}`}>
                <a
                  href={`/${item.value}`}
                  onClick={handleOpenMenu}
                  className={`flex w-full items-center justify-start gap-2 px-2 py-2 ${colorClasses}`}
                >
                  <Icon
                    type={item.icon}
                    color={isSelectedItem ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}
                    size={IconSizes.SM}
                  />
                  <Text color={isSelectedItem ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}>{item.label}</Text>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
