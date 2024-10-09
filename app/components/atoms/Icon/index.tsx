import React from "react";
import {
  changeColorToClassName,
  changeFillToClassName,
  changeTypeToIconComponent,
  changeTypeToSizeComponent,
} from "@components/atoms/Icon/utils";
import { IconName, IconSizes, SizesTypes } from "@components/atoms/Icon/types";
import { Colors } from "@styles/themes/types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";

export interface IconProps {
  type: IconName;
  color?: ObjectValues<typeof Colors>;
  width?: number;
  height?: number;
  fill?: ObjectValues<typeof Colors>;
  size?: SizesTypes;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  type,
  color = Colors.CONTENT_1,
  width = 20,
  height = 20,
  size = IconSizes.MD,
  className,
  fill,
}) => {
  const SVGIcon = changeTypeToIconComponent(type);

  return (
    <SVGIcon
      className={[
        ...(Array.isArray(className) ? className : [className]),
        changeColorToClassName(color),
        changeFillToClassName(fill),
        changeTypeToSizeComponent(size),
        "silverbi-svg-icon",
      ].join(" ")}
      width={width}
      height={height}
    />
  );
};

export default Icon;
