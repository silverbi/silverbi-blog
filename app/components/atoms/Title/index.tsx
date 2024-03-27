import Text from "@components/atoms/Text";
import React from "react";
import { Typography } from "@components/atoms/Text/types";

export interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className={"border-l-[6px] border-l-border-1 px-3"}>
      <Text bold type={Typography.SUBTITLE_1} className={"leading-none"}>
        {children}
      </Text>
    </div>
  );
};

export default Title;
