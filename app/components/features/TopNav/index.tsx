import { routeData } from "@/app/components/features/TopNav/routeDataSet";
import { useState } from "react";

export type OptionsTypes = {
  label: string;
  value: string | number;
  icon: any;
};

export const TopNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const wrappers = {
    active: "overflow-hidden max-h-[500px] visible opacity-100 transition-all ease-in-out duration-200",
    inactive: "max-h-0 invisible opacity-0 transition-all ease-in-out duration-200",
  };
  const wrapperClasses = wrappers[isOpenMenu ? "active" : "inactive"];

  return (
    <div>
      {isOpenMenu && (
        <div
          onClick={handleClickMenu}
          className={"z-90 absolute bottom-0 left-0 right-0 top-0 h-screen w-screen cursor-default"}
        />
      )}

      <div className={"relative"}>
        {/* <IconButton onClick={handleClickMenu} interactionClasses={isOpenMenu ? "bg-hover-light" : ""}>
          <Icon type={IconName.MENU} size={IconSizes.MD} />
        </IconButton> */}

        {/** menu section */}
        <div
          className={`z-100 origin-top-down absolute right-0 top-12 mt-1 flex w-auto min-w-44 flex-col gap-6 rounded-lg border border-content-1 bg-content-inverse-1 px-3 py-4 drop-shadow-lg ${wrapperClasses}`}
        >
          {routeData.map((items, index) => (
            <div key={index} className={"flex w-full cursor-default flex-col"}>
              {/* <Text type={Typography.BODY_3} color={Colors.CONTENT_3}>
                {items.category}
              </Text> */}
              {/* {items.data.map((item: OptionsTypes, index: number) => {
                return <TopNavItem key={index} item={item} onClose={handleClickMenu} />;
              })} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
