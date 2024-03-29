import React from "react";
import {
  changeColorToClassName,
  changeTypographyToClassName,
  changeWeightToClassName,
} from "@components/atoms/Text/utils";
import { ObjectValues } from "@utils/typeHelpers/objectValues";
import { Colors, Typography } from "@components/atoms/Text/types";

export interface TextProps {
  className?: string | string[];
  children: React.ReactNode;
  type?: ObjectValues<typeof Typography>;
  color?: ObjectValues<typeof Colors>;
  bold?: boolean;
  light?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export const Text: React.FC<TextProps> = ({ className, children, type, color, bold, light, italic, underline }) => {
  const weight = bold ? "SEMI_BOLD" : light ? "LIGHT" : "MEDIUM";

  return (
    <span
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-text",
        "font-pretendard",
        changeTypographyToClassName(type),
        changeColorToClassName(color),
        changeWeightToClassName(weight),
      ].join(" ")}
    >
      {children}
    </span>
  );
};

export default Text;
