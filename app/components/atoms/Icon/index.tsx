import React from "react";
import { changeTypeToIconComponent } from "@components/atoms/Icon/utils";
import { IconTypes } from "@components/atoms/Icon/types";
import {
  changeColorToClassName,
  changeTypographyToClassName,
  changeWeightToClassName,
} from "@components/atoms/Text/utils";

export interface IconProps {
  type: IconTypes;
  color?: string;
  width?: number;
  height?: number;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  type,
  color = "content-inverse-1",
  width = 20,
  height = 20,
  size,
  className,
}) => {
  const SVGIcon = changeTypeToIconComponent(type);

  return (
    <SVGIcon
      className={[...(Array.isArray(className) ? className : [className]), `text-${color}`, "silverbi-svg-icon"].join(
        " ",
      )}
      width={size ? size : width}
      height={size ? size : height}
    />
  );
};

export default Icon;
