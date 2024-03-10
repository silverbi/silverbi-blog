import React from "react";
import { changeTypeToIconComponent, changeTypeToSizeComponent } from "@components/atoms/Icon/utils";
import { IconTypes, IconSizes, SizesTypes } from "@components/atoms/Icon/types";

export interface IconProps {
  type: IconTypes;
  color?: string;
  width?: number;
  height?: number;
  size?: SizesTypes;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  type,
  color = "content-inverse-1",
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
        `text-${color}`,
        changeTypeToSizeComponent(size),
        "silverbi-svg-icon",
      ].join(" ")}
      width={width}
      height={height}
    />
  );
};

export default Icon;
