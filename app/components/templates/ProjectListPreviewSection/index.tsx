import React from "react";
import Title from "@components/atoms/Title";
import Chip from "@components/atoms/Chip";
import ProjectList from "app/components/organisms/ProjectList";
import { ImageTypes } from "@components/atoms/CustomImage/types";

const tempProjectsItem = [
  {
    id: 0,
    title: "밋펫",
    start_date: "2023.01",
    end_date: "2023.08",
    status: "present",
    role: "Frontend Developer",
    subtitle: "반려동물 안심 입양 플랫폼",
    tags: ["WEB", "Next.js"],
    thumbnail: ImageTypes.PROJECT_MEETPET,
  },
  {
    id: 1,
    title: "새폴더",
    start_date: "2023.09",
    end_date: "",
    status: "inProgress",
    role: "Frontend Developer",
    subtitle: "함께하는 탐조 생활",
    tags: ["APP", "React Native"],
    thumbnail: ImageTypes.PROJECT_SAEFOLDER,
  },
  {
    id: 2,
    title: "SILVERBI 블로그",
    status: "present",
    start_date: "2024.03",
    end_date: "",
    role: "Frontend Developer",
    subtitle: "",
    tags: ["WEB", "Next.js", "NestJS"],
    thumbnail: ImageTypes.PROJECT_SILVERBI_BLOG,
  },
  {
    id: 3,
    title: "미슐랭면",
    status: "backlog",
    start_date: "",
    end_date: "",
    role: "Frontend Developer",
    subtitle: "나만의 맛있는 평양냉면 찾기",
    tags: ["WEB", "React"],
    thumbnail: ImageTypes.PROJECT_MICHELINMYEON,
  },
  {
    id: 4,
    title: "아이디코",
    status: "present",
    start_date: "2023.05",
    end_date: "",
    role: "Frontend Developer",
    subtitle: "세상에 하나 뿐인 코로 만든 강아지 ID",
    tags: ["APP", "React Native"],
    thumbnail: ImageTypes.PROJECT_IDCO,
  },
  {
    id: 5,
    title: "마이드림",
    status: "backlog",
    start_date: "",
    end_date: "",
    role: "Frontend Developer",
    subtitle: "",
    tags: ["WEB", "Next.js"],
    thumbnail: ImageTypes.PROJECT_DEEPFALL,
  },
];

export interface ProjectListPreviewSectionProps {
  title: string;
  handleClickMore: () => void;
}

export const ProjectListPreviewSection: React.FC<ProjectListPreviewSectionProps> = ({ title, handleClickMore }) => {
  return (
    <div className={"flex w-full flex-col gap-24 py-20"}>
      <div className={"flex flex-row items-center justify-between"}>
        <Title>{title}</Title>

        <button className={"cursor-pointer"} onClick={handleClickMore}>
          <Chip type={"SECONDARY"} size={"SM"} className={"cursor-pointer"}>
            더 보기
          </Chip>
        </button>
      </div>

      <ProjectList projects={tempProjectsItem} />
    </div>
  );
};

export default ProjectListPreviewSection;
