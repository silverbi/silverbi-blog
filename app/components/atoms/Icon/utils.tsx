import { IconTypes, IconName } from "@components/atoms/Icon/types";

import SilverbiSymbolIcon from "@assets/silverbi-symbol.svg";

export const changeTypeToIconComponent = (type: IconTypes) => {
  switch (type) {
    case IconName.SILVERBI_SYMBOL:
      return SilverbiSymbolIcon;
    default:
      return "icon";
  }
};
