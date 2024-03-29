import React from "react";
import { changeSizeToClassName, changeSizeToTypography, changeTypeToClassName } from "./utils";
import Text from "@components/atoms/Text";

export interface TagProps {
  type?: "PRIMARY" | "SECONDARY" | "HIGHLIGHT";
  size?: "XL" | "LG" | "MD" | "SM" | "XS";
  children?: string;
  className?: string | Array<string>;
}

export const Tag: React.FC<TagProps> = ({ className, type = "PRIMARY", size = "MD", children = "label" }) => {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-tag",
        "flex h-fit cursor-default items-center justify-center",
        changeTypeToClassName(type),
        changeSizeToClassName(size),
      ].join(" ")}
    >
      <Text type={changeSizeToTypography(size)} className={"leading-none"}>
        {children}
      </Text>
    </div>
  );
};

export default Tag;
