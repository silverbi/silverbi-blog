import { IconName } from "@components/atoms/Icon/types";

export const routeData = [
  {
    category: "MENU",
    data: [
      { label: "Home", value: "home", icon: IconName.HOME },
      { label: "Tech", value: "tech", icon: IconName.FOLDER_CODE },
      { label: "Projects", value: "projects", icon: IconName.ROCKET },
      { label: "Retrospects", value: "retrospects", icon: IconName.BOX },
      { label: "About", value: "about", icon: IconName.USER_CIRCLE },
    ],
  },
  {
    category: "SETTING",
    data: [
      { label: "My", value: "my", icon: IconName.LOCK_UNLOCKED },
      { label: "Dashboard", value: "dashboard", icon: IconName.BAR_CHART },
      { label: "Login", value: "auth/login", icon: IconName.LOGIN },
      { label: "Logout", value: "auth/logout", icon: IconName.LOGOUT },
    ],
  },
];
