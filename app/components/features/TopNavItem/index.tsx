import "./styles.css";
import { OptionsTypes } from "@/components/feature/TopNav";
import { useUser } from "@/store/user";
import { logout } from "@/utils/auth";
import { usePathname } from "next/navigation";

interface TopNavItemProps {
  item: OptionsTypes;
  onClose: () => void;
}

export const TopNavItem = ({ item, onClose }: TopNavItemProps) => {
  const pathname = usePathname();
  const isSelectedItem = pathname === `/${item.value}`;
  const user = useUser(state => state.user);
  const isAdmin = user?.user_metadata?.role === "admin";

  let colorClasses = isSelectedItem ? "colors-active" : "colors-inactive";
  let interactionClasses = isSelectedItem ? "interactions-active" : "interactions-inactive";

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  if (user?.id) {
    if (item.label === "Login") {
      return;
    }

    if (item.label === "Logout") {
      return (
        <div className={`nav-item-wrapper interactions-inactive`}>
          <button onClick={handleLogout} className={`nav-item-link colors-inactive`}>
            {/* <Icon type={item.icon} color={Colors.CONTENT_1} size={IconSizes.SM} />
            <Text color={Colors.CONTENT_1}>Logout</Text> */}
          </button>
        </div>
      );
    }
  }

  if (!isAdmin && ["Dashboard", "My"].includes(item.label)) {
    return;
  }

  if (!user?.id) {
    if (item.label === "Logout") {
      return;
    }
  }

  return (
    <div className={`nav-item-wrapper ${interactionClasses}`}>
      <a href={`/${item.value}`} onClick={onClose} className={`nav-item-link ${colorClasses}`}>
        {/* <Icon
          type={item.icon}
          color={isSelectedItem ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}
          size={IconSizes.SM}
        />
        <Text color={isSelectedItem ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}>{item.label}</Text> */}
      </a>
    </div>
  );
};
