import React from "react";
import { changeSizeToClassName, changeTypeToStyles } from "@components/atoms/Chip/utils";
import Text from "@components/atoms/Text";
import { Colors, Typography } from "@components/atoms/Text/types";
import { IconName, IconTypes } from "@components/atoms/Icon/types";
import Icon from "@components/atoms/Icon";

export interface ChipProps {
  className?: string | Array<string>;
  children?: string;
  size?: "SM" | "MD" | "LG";
  type?: "PRIMARY" | "SECONDARY" | "DISABLED";
  position?: "TEXT" | "TEXT_ICON" | "ICON_TEXT";
  icon?: IconTypes;
}

export const Chip: React.FC<ChipProps> = ({
  className,
  children = "label",
  position = "ICON_TEXT",
  icon,
  size = "MD",
  type = "PRIMARY",
}) => {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-chip",
        "flex h-fit w-fit cursor-default flex-row items-center justify-center gap-1 rounded-full",
        changeTypeToStyles(type),
        changeSizeToClassName(size),
      ].join(" ")}
    >
      {position === "ICON_TEXT" && icon && (
        <Icon type={icon} size={size === "LG" ? "SM" : "XS"} color={Colors.CONTENT_INVERSE_1} />
      )}
      <Text
        type={size === "LG" ? Typography.SUBTITLE_2 : size === "MD" ? Typography.BODY_2 : Typography.CAPTION_1}
        color={type === "PRIMARY" ? Colors.CONTENT_INVERSE_1 : Colors.CONTENT_1}
      >
        {children}
      </Text>
      {position === "TEXT_ICON" && icon && (
        <Icon type={icon} size={size === "LG" ? "SM" : "XS"} color={Colors.CONTENT_INVERSE_1} />
      )}
    </div>
  );
};

export default Chip;
