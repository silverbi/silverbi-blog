import React from "react";
import {
  changeColorToClassName,
  changeTypographyToClassName,
  changeWeightToClassName,
} from "@components/atoms/Text/utils";
import { ObjectValues } from "@utils/typeHelpers/objectValues";
import { Colors, Typography } from "@styles/themes/types";

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
    <p
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-text",
        "m-0 break-all align-middle font-pretendard",
        changeTypographyToClassName(type),
        changeColorToClassName(color),
        changeWeightToClassName(weight),
      ].join(" ")}
    >
      {children}
    </p>
  );
};

export default Text;
