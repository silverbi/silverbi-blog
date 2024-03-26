import React from "react";
import {
  changeColorToClassName,
  changeTypeToIconComponent,
  changeTypeToSizeComponent,
} from "@components/atoms/Icon/utils";
import { IconTypes, IconSizes, SizesTypes } from "@components/atoms/Icon/types";
import { Colors } from "@components/atoms/Text/types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";

export interface IconProps {
  type: IconTypes;
  color?: ObjectValues<typeof Colors>;
  width?: number;
  height?: number;
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
}) => {
  const SVGIcon = changeTypeToIconComponent(type);

  return (
    <SVGIcon
      className={[
        ...(Array.isArray(className) ? className : [className]),
        changeColorToClassName(color),
        changeTypeToSizeComponent(size),
        "silverbi-svg-icon",
      ].join(" ")}
      width={width}
      height={height}
    />
  );
};

export default Icon;
