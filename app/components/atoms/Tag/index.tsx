import React from "react";
import { changeSizeToClassName, changeSizeToTypography, changeTypeToClassName } from "./utils";
import Text from "@/components/atoms/Text";
import { Colors } from "@styles/themes/types";

export interface TagProps {
  type?: "PRIMARY" | "SECONDARY" | "HIGHLIGHT";
  size?: "XL" | "LG" | "MD" | "SM" | "XS";
  children?: string;
  className?: string | Array<string>;
}

export const Tag = ({ className, type = "PRIMARY", size = "MD", children = "label" }: TagProps) => {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-tag",
        "flex h-fit w-fit cursor-default items-center justify-center",
        changeTypeToClassName(type),
        changeSizeToClassName(size),
      ].join(" ")}
    >
      <Text
        type={changeSizeToTypography(size)}
        color={type === "PRIMARY" ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}
        className={"leading-none"}
      >
        {children}
      </Text>
    </div>
  );
};

export default Tag;
