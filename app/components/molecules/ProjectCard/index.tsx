import React from "react";
import { ProductTypes } from "types/productTypes";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import Tag from "@components/atoms/Tag";
import { useRouter } from "next/navigation";

export interface ProjectCardProps {
  project: ProductTypes;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, role, label, tags, title, start_date, end_date, subtitle, thumbnail } = project;
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <button
      onClick={handleClickCard}
      className={" flex h-96 w-1/3 cursor-pointer flex-col rounded-[24px] border border-border-1 bg-background-1"}
    >
      <div className={"flex w-full items-center gap-3 px-4 py-3"}>
        <div className={" h-8 w-8 rounded-full bg-content-disabled"} />
        <Text bold type={Typography.BODY_1}>
          {label}
        </Text>
      </div>
      <div className={"h-40 w-full bg-content-disabled"} />
      <div className={"flex flex-col items-start gap-2 px-4 py-6"}>
        <div className={"flex gap-1"}>
          {tags.map((tag, index) => (
            <Tag size={"SM"} type={"SECONDARY"} key={index}>
              {tag}
            </Tag>
          ))}
        </div>
        <div className={"flex flex-col items-start justify-start"}>
          <Text type={Typography.SUBTITLE_2} bold>
            {title}
          </Text>
          <Text type={Typography.BODY_2}>{subtitle}</Text>
        </div>
        <div className={"flex gap-2"}>
          <Text type={Typography.BODY_3}>
            {start_date} - {end_date}
          </Text>
          <Text type={Typography.BODY_3}>|</Text>
          <Text type={Typography.BODY_3}>{role}</Text>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
