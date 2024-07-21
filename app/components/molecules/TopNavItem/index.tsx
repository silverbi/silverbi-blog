import React from "react";
import Icon from "@components/atoms/Icon";
import { Colors } from "@styles/themes/types";
import { IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { usePathname } from "next/navigation";
import { OptionsTypes } from "@components/organisms/TopNav";
import { logout } from "@utils/auth";
import { useUser } from "@/store/user";

interface TopNavItemProps {
  item: OptionsTypes;
  onClose: () => void;
}

export const TopNavItem: React.FC<TopNavItemProps> = ({ item, onClose }) => {
  const pathname = usePathname();
  const isSelectedItem = pathname === `/${item.value}`;
  const user = useUser(state => state.user);

  const interactions = {
    active: "duration-300 bg-transparent transition ease-in-out",
    inactive: "duration-300 bg-transparent transition ease-in-out hover:bg-hover-light",
  };

  const colors = {
    active: "duration-300 bg-content-1 transition ease-in-out active:scale-90",
    inactive: "duration-300 bg-transparent transition ease-in-out active:scale-90",
  };

  let colorClasses = colors[isSelectedItem ? "active" : "inactive"];
  let interactionClasses = interactions[isSelectedItem ? "active" : "inactive"];

  if (item.label === "Login") {
    if (!user?.id) {
      return (
        <div className={`overflow-hidden rounded-lg ${interactionClasses}`}>
          <a
            href={`/${item.value}`}
            onClick={onClose}
            className={`flex w-full cursor-pointer items-center justify-start gap-2 px-2 py-2 ${colorClasses}`}
          >
            <Icon
              type={item.icon}
              color={isSelectedItem ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}
              size={IconSizes.SM}
            />
            <Text color={isSelectedItem ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}>Login</Text>
          </a>
        </div>
      );
    } else {
      const handleLogout = async () => {
        await logout();
        onClose();
      };

      return (
        <div className={`overflow-hidden rounded-lg ${interactions["inactive"]}`}>
          <button
            onClick={handleLogout}
            className={`flex w-full cursor-pointer items-center justify-start gap-2 px-2 py-2 ${colors["inactive"]}`}
          >
            <Icon type={item.icon} color={Colors.CONTENT_1} size={IconSizes.SM} />
            <Text color={Colors.CONTENT_1}>Logout</Text>
          </button>
        </div>
      );
    }
  }

  return (
    <div className={`overflow-hidden rounded-lg ${interactionClasses}`}>
      <a
        href={`/${item.value}`}
        onClick={onClose}
        className={`flex w-full cursor-pointer items-center justify-start gap-2 px-2 py-2 ${colorClasses}`}
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
};
