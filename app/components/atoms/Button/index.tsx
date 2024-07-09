import React from "react";
import Text from "@components/atoms/Text";
import { changeTypeToClassname, changeTypeToInteraction, changeTypeToTextColors } from "@components/atoms/Button/utils";
import { IconSizes, IconTypes } from "@components/atoms/Icon/types";
import Icon from "@components/atoms/Icon";

export interface ButtonProps {
  className?: string | Array<string>;
  children: React.ReactNode;
  tag?: ButtonStyles;
  onClick: () => void;
  icon?: IconTypes;
}

export type ButtonStyles = "PRIMARY" | "SECONDARY" | "GHOST" | "DISABLED";

const Button: React.FC<ButtonProps> = ({ className, children, tag = "PRIMARY", onClick, icon }) => {
  return (
    <button
      className={
        "relative h-fit w-fit cursor-pointer rounded-xl transition-all duration-300 ease-in-out active:scale-95"
      }
      onClick={onClick}
    >
      <div
        className={[
          ...(Array.isArray(className) ? className : [className]),
          changeTypeToInteraction(tag),
          "absolute z-10 h-full w-full rounded-xl",
        ].join(" ")}
      />
      <div
        className={[
          ...(Array.isArray(className) ? className : [className]),
          changeTypeToClassname(tag),
          "silverbi-button",
          "flex w-fit items-center justify-center gap-2 rounded-xl px-6 py-3",
        ].join(" ")}
      >
        {icon && <Icon type={icon} size={IconSizes.SM} color={changeTypeToTextColors(tag)} />}
        <Text color={changeTypeToTextColors(tag)}>{children}</Text>
      </div>
    </button>
  );
};

export default Button;
