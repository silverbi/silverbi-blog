import React, { useState } from "react";
import { ProductTypes } from "types/productTypes";
import ReactCardFlip from "react-card-flip";
import Text from "@components/atoms/Text";
import { Colors, Typography } from "@components/atoms/Text/types";
import Tag from "@components/atoms/Tag";

export interface ProjectCardProps {
  product: ProductTypes;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ product }) => {
  const { role, label, tags, title, start_date, end_date, summary, thumbnail } = product;
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={"h-96 w-1/3 cursor-pointer"}>
      <ReactCardFlip isFlipped={isFlipped}>
        <button
          onClick={handleClickCard}
          className={"h-96 w-full rounded-[24px] border border-border-1 bg-background-inverse-1 p-8"}
        >
          <Text color={Colors.CONTENT_INVERSE_1}>{title}</Text>
        </button>

        <button
          onClick={handleClickCard}
          className={"flex h-96 w-full flex-col rounded-[24px] border border-border-1 bg-background-1"}
        >
          <div className={"flex w-full items-center gap-3 px-4 py-3"}>
            <div className={" h-8 w-8 rounded-full bg-content-disabled"} />
            <Text bold type={Typography.BODY_2}>
              {label}
            </Text>
          </div>
          <div className={"h-40 w-full bg-content-disabled"} />
          <div className={"flex flex-col items-start gap-2 px-4 py-6"}>
            <div className={"flex gap-1"}>
              {tags.map((tag, index) => (
                <Tag size={"XS"} key={index}>
                  {tag}
                </Tag>
              ))}
            </div>
            <Text bold>{title}</Text>
            <div className={"flex gap-2"}>
              <Text type={Typography.CAPTION_1}>
                {start_date} - {end_date}
              </Text>
              <Text type={Typography.CAPTION_1}>|</Text>
              <Text type={Typography.CAPTION_1}>{role}</Text>
            </div>
          </div>
        </button>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
