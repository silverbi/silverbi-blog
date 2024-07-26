import Text from "@components/atoms/Text";
import React from "react";
import { Typography } from "@styles/themes/types";

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={`border-l-[6px] border-l-border-1 px-3 ${className}`}>
      <Text bold type={Typography.TITLE_3} className={"leading-none"}>
        {children}
      </Text>
    </div>
  );
};

export default Title;
