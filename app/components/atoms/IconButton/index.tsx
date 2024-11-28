"use client";

import React, { FocusEvent, MouseEvent, useState } from "react";
import Interaction from "@/components/atoms/Interaction";

export interface IconButtonProps {
  className?: string | Array<string>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  interactionClasses?: string | Array<string>;
}

export const IconButton = ({
  className = "",
  interactionClasses = "",
  children,
  disabled = false,
  type = "button",
  onBlur,
  onClick,
}: IconButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Interaction className={interactionClasses}>
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
    </Interaction>
  );
};

export default IconButton;
