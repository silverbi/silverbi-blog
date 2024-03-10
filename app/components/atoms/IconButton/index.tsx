import React, { FocusEvent, MouseEvent, useState } from "react";
import { Sizes } from "@components/atoms/IconButton/types";
import { changeTypeToSizeComponent } from "@components/atoms/IconButton/utils";

export interface IconButtonProps {
  className?: string | Array<string>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className = "",
  children,
  disabled = false,
  type = "button",
  onBlur = () => {
    /* noop */
  },
  onClick = () => {
    /* noop */
  },
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={[...(Array.isArray(className) ? className : [className]), "silverbi-icon-button"].join(" ")}
      type={type}
      onClick={e => {
        if (disabled) {
          return;
        }
        setIsPressed(true);
        onClick?.(e);
      }}
      onBlur={e => {
        setIsPressed(false);
        onBlur?.(e);
      }}
    >
      <span className={"silverbi-icon-button-inner"}>{children}</span>
    </button>
  );
};

export default IconButton;
