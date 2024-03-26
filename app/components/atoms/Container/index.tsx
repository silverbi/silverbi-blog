import React from "react";
import { changeTypeToSizeComponent } from "@components/atoms/Icon/utils";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string | string[];
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="align-center flex w-full justify-center">
      <div
        className={[
          ...(Array.isArray(className) ? className : [className]),
          "flex w-full max-w-[980px] flex-col items-center justify-center",
          "silverbi-container",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
