import React from "react";
import Text from "@components/atoms/Text";
import {
  changeInteractionSizeToClassname,
  changeSizeToClassname,
  changeTypeToClassname,
  changeTypeToInteraction,
  changeTypeToTextColors,
  changeTypeToTextSize,
} from "@components/atoms/Button/utils";
import { IconSizes, IconTypes } from "@components/atoms/Icon/types";
import Icon from "@components/atoms/Icon";

export interface ButtonProps {
  className?: string | Array<string>;
  children: React.ReactNode;
  tag?: ButtonStyles;
  onClick?: () => void;
  formAction?: (formData: FormData) => void;
  icon?: IconTypes;
  size?: ButtonSize;
}

export type ButtonStyles = "PRIMARY" | "SECONDARY" | "GHOST" | "DISABLED" | "NEGATIVE" | "INFO";
export type ButtonSize = "SM" | "MD" | "LG" | "XL";

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  tag = "PRIMARY",
  onClick,
  formAction,
  icon,
  size = "MD",
}) => {
  return (
    <button
      className={[
        changeInteractionSizeToClassname(size),
        "relative h-fit w-fit shrink-0 cursor-pointer transition-all duration-300 ease-in-out active:scale-95",
        ...(Array.isArray(className) ? className : [className]),
      ].join(" ")}
      formAction={formAction}
      onClick={onClick}
    >
      <div
        className={[
          changeTypeToInteraction(tag),
          changeSizeToClassname(size),
          "absolute z-10 h-full w-full cursor-pointer",
          ...(Array.isArray(className) ? className : [className]),
        ].join(" ")}
      />
      <div
        className={[
          ...(Array.isArray(className) ? className : [className]),
          changeTypeToClassname(tag),
          changeSizeToClassname(size),
          "silverbi-button",
          "flex w-fit cursor-pointer items-center justify-center gap-2",
        ].join(" ")}
      >
        {icon && <Icon type={icon} size={IconSizes.SM} color={changeTypeToTextColors(tag)} />}
        <Text color={changeTypeToTextColors(tag)} type={changeTypeToTextSize(size)}>
          {children}
        </Text>
      </div>
    </button>
  );
};

export default Button;
