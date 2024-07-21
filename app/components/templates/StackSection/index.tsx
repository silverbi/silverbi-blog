import React from "react";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import Icon from "@components/atoms/Icon";
import { IconName } from "@components/atoms/Icon/types";

const StackSection: React.FC = () => {
  const temp = ["HTML", "CSS", "Javascript", "Typescript", "React", "React Native", "Next.js"];

  return (
    <div className={"flex w-full flex-col gap-36"}>
      <div className={"flex w-full flex-col gap-16"}>
        <Title>Tech Stack</Title>
        <div className={"flex flex-wrap gap-6"}>
          {temp.map((label, index) => (
            <div
              className={
                "flex h-36 w-full max-w-36 cursor-default flex-col items-center justify-center gap-6 rounded-[16px] border border-border-1 p-4"
              }
              key={index}
            >
              <Icon type={IconName.LIKE_FILL} size={"LG"} />
              <Text>{label}</Text>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex w-full flex-col gap-16"}>
        <Title>Tools</Title>
        <div className={"flex flex-wrap gap-6"}>
          {temp.map((label, index) => (
            <div
              className={
                "flex h-36 w-full max-w-36 cursor-default flex-col items-center justify-center gap-6 rounded-[16px] border border-border-1 p-4"
              }
              key={index}
            >
              <Icon type={IconName.LIKE_FILL} size={"LG"} />
              <Text>{label}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackSection;
