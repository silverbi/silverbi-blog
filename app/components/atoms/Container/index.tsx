import React from "react";
import { changeTypeToSizeComponent } from "@components/atoms/Icon/utils";
import { MAX_CONTENT_WIDTH } from "@common/constants";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string | string[];
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="align-center flex w-full justify-center px-12">
      <div
        className={[
          ...(Array.isArray(className) ? className : [className]),
          `relative flex w-full max-w-[860px] flex-col items-center justify-center`,
          "silverbi-container",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
