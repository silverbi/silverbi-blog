import { IconTypes, IconName } from "@components/atoms/Icon/types";

import SilverbiSymbolIcon from "@assets/silverbi-symbol.svg";
import MenuBarIcon from "@assets/menu-bar.svg";
import { Sizes } from "@components/atoms/IconButton/types";

export const changeTypeToIconComponent = (type: IconTypes) => {
  switch (type) {
    case IconName.SILVERBI_SYMBOL:
      return SilverbiSymbolIcon;
    case IconName.MENU_BAR:
      return MenuBarIcon;
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
