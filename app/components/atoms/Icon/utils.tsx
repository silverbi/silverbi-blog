import { IconTypes, IconName } from "@components/atoms/Icon/types";
import { Sizes } from "@components/atoms/IconButton/types";

import SilverbiSymbolIcon from "@assets/silverbi-symbol.svg";
import MenuBarIcon from "@assets/menu-bar.svg";
import InstagramLogoIcon from "@assets/instagram-logo.svg";
import LinkedinLogoIcon from "@assets/linkedin-logo.svg";
import GithubLogoIcon from "@assets/github-logo.svg";

export const changeTypeToIconComponent = (type: IconTypes) => {
  switch (type) {
    case IconName.SILVERBI_SYMBOL:
      return SilverbiSymbolIcon;
    case IconName.MENU_BAR:
      return MenuBarIcon;
    case IconName.INSTAGRAM_LOGO:
      return InstagramLogoIcon;
    case IconName.LINKEDIN_LOGO:
      return LinkedinLogoIcon;
    case IconName.GITHUB_LOGO:
      return GithubLogoIcon;
    default:
      return "icon";
  }
};

export const changeTypeToSizeComponent = (type: keyof typeof Sizes) => {
  switch (type) {
    case Sizes.XS:
      return "w-4 h-4";
    case Sizes.SM:
      return "w-6 h-6";
    case Sizes.MD:
      return "w-8 h-8";
    case Sizes.LG:
      return "w-10 h-10";
    case Sizes.XL:
      return "w-12 h-12";
    default:
      return "w-8 h-8";
  }
};
