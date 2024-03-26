import { IconTypes, IconName } from "@components/atoms/Icon/types";
import { Sizes } from "@components/atoms/IconButton/types";

import SilverbiSymbolIcon from "@assets/icons/silverbi-symbol.svg";
import MenuBarIcon from "@assets/icons/menu-bar.svg";
import InstagramLogoIcon from "@assets/icons/instagram-logo.svg";
import LinkedinLogoIcon from "@assets/icons/linkedin-logo.svg";
import GithubLogoIcon from "@assets/icons/github-logo.svg";
import ConcentricCircles from "@assets/icons/concentric-circles.svg";
import { ObjectValues } from "@utils/typeHelpers/objectValues";
import { Colors } from "@components/atoms/Text/types";

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
    case IconName.CONCENTRIC_CIRCLES:
      return ConcentricCircles;
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

export const changeColorToClassName = (color?: ObjectValues<typeof Colors>) => {
  switch (color) {
    case Colors.CONTENT_1:
      return "text-content-1";
    case Colors.CONTENT_2:
      return "text-content-2";
    case Colors.CONTENT_3:
      return "text-content-3";
    case Colors.CONTENT_PRIMARY:
      return "text-content-primary";
    case Colors.CONTENT_PRIMARY_DARK:
      return "text-content-primary-dark";
    case Colors.CONTENT_PRIMARY_LIGHT:
      return "text-content-primary-light";
    case Colors.CONTENT_SECONDARY:
      return "text-content-secondary";
    case Colors.CONTENT_SECONDARY_DARK:
      return "text-content-secondary-dark";
    case Colors.CONTENT_SECONDARY_LIGHT:
      return "text-content-secondary-light";
    case Colors.CONTENT_INVERSE_1:
      return "text-content-inverse-1";
    case Colors.CONTENT_INVERSE_2:
      return "text-content-inverse-2";
    case Colors.CONTENT_INVERSE_3:
      return "text-content-inverse-3";
    case Colors.CONTENT_DISABLED:
      return "text-content-disabled";
    case Colors.LINK_PRIMARY:
      return "link-content-primary";
    case Colors.LINK_ACTIVE:
      return "link-content-active";
    case Colors.LINK_DISABLED:
      return "link-content-disabled";
    default:
      return "text-content-1";
  }
};
