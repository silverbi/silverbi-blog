import React from "react";
import { ProjectTypes } from "types/projectTypes";
import Image from "next/image";
import {
  PROJECT_IDCO,
  PROJECT_MEETPET,
  PROJECT_MICHELIN_MYEON,
  PROJECT_MYDREAM,
  PROJECT_SAEFOLDER,
  PROJECT_SILVERBI_BLOG,
} from "@common/images";

export interface ProjectListProps {
  projects: ProjectTypes[];
}

const temp = [
  {
    id: 0,
    title: "밋펫",
    start_date: "",
    end_date: "",
    role: "",
    subtitle: "",
    tags: [""],
    thumbnail: "",
  },
  {
    id: 1,
    title: "새폴더",
    start_date: "",
    end_date: "",
    role: "",
    subtitle: "",
    tags: [""],
    thumbnail: "",
  },
  {
    id: 2,
    title: "SILVERBI 블로그",
    start_date: "",
    end_date: "",
    role: "",
    subtitle: "",
    tags: [""],
    thumbnail: "",
  },
  {
    id: 3,
    title: "미슐랭면",
    start_date: "",
    end_date: "",
    role: "",
    subtitle: "",
    tags: [""],
    thumbnail: "",
  },
  {
    id: 4,
    title: "아이디코",
    start_date: "",
    end_date: "",
    role: "",
    subtitle: "",
    tags: [""],
    thumbnail: "",
  },
  {
    id: 5,
    title: "마이드림",
    start_date: "",
    end_date: "",
    role: "",
    subtitle: "",
    tags: [""],
    thumbnail: "",
  },
];

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={"grid aspect-square w-full grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4"}>
      <div className="project-card col-span-1 row-span-1">
        <Image src={PROJECT_MEETPET} alt={"프로젝트 밋펫"} fill className={"project-img"} />
      </div>
      <div className="project-card col-span-3 row-span-1">
        <Image src={PROJECT_SAEFOLDER} alt={"프로젝트 새폴더"} fill className={"project-img"} />
      </div>
      <div className={"project-card col-span-2 row-span-2"}>
        <Image src={PROJECT_SILVERBI_BLOG} alt={"프로젝트 SILVERBI 블로그"} fill className={"project-img"} />
      </div>
      <div className={"project-card col-span-1 row-span-1 border-border-1"}>
        <Image src={PROJECT_MICHELIN_MYEON} alt={"프로젝트 미슐랭면"} fill className={"project-img"} />
      </div>
      <div className={"project-card col-span-1 row-span-2"}>
        <Image src={PROJECT_IDCO} alt={"프로젝트 아이디코"} fill className={"project-img"} />
      </div>
      <div className={"project-card col-span-1 row-span-1"}>
        <Image src={PROJECT_MYDREAM} alt={"프로젝트 마이드림"} fill className={"project-img"} />
      </div>
    </div>
  );
};

export default ProjectList;
