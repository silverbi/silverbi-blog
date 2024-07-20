import { IconName } from "@components/atoms/Icon/types";

export const routeData = [
  {
    category: "MENU",
    data: [
      { label: "Home", value: "home", icon: IconName.HOME },
      { label: "Tech", value: "tech", icon: IconName.PEN },
      { label: "Projects", value: "projects", icon: IconName.PIN },
      { label: "Retrospects", value: "retrospects", icon: IconName.FOLDER },
      { label: "About", value: "about", icon: IconName.PROFILE_CIRCLE },
    ],
  },
  {
    category: "SETTING",
    data: [
      { label: "My", value: "my", icon: IconName.LOCK },
      { label: "Login", value: "auth/login", icon: IconName.PROFILE_ACCEPTED },
    ],
  },
];
