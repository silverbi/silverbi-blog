import React from "react";
import { ProjectTypes } from "types/projectTypes";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { changeProjectToStyles } from "@/components/molecules/ProjectCard/utils";
import Text from "@/components/atoms/Text";

export interface ProjectCardProps {
  project: ProjectTypes;
  className?: string | Array<string>;
}

export const EmptyProjectCard = ({ title }: { title: string }) => {
  return (
    <div className={["silverbi-project-card", changeProjectToStyles(title), "border-0 leading-none"].join(" ")}>
      <Skeleton count={1} height={"100%"} className={"absolute h-full w-full"} />
    </div>
  );
};

export const ProjectCard = ({ className, project }: ProjectCardProps) => {
  const router = useRouter();
  const { id, title, tags, start_date, end_date, thumbnail, role } = project;
  let empty = true;

  const handleClickProjectCard = () => {
    router.push(`/project/${id}`);
  };

  if (empty) {
    return <EmptyProjectCard title={title} />;
  }

  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        "silverbi-project-card",
        changeProjectToStyles(title),
      ].join(" ")}
      onClick={handleClickProjectCard}
    >
      <Image src={thumbnail} alt={`프로젝트 ${title}`} fill className={"silverbi-project-img"} />
      <div>
        <Text>{title}</Text>
      </div>
    </div>
  );
};

export default ProjectCard;
