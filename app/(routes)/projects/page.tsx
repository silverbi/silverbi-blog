"use client";

import { Container } from "@components/atoms/Container";
import RootLayout from "@layouts/RootLayout";
import React from "react";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import ProjectList from "@components/organisms/ProjectList";
import CustomImage from "app/components/atoms/CustomImage";
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

const Projects = () => {
  return (
    <RootLayout>
      <Container className="my-32">
        <CustomImage tag={ImageTypes.PROJECTS_THUMBNAIL} alt={"Projects thumbnail"} className={"rounded-[24px]"} />

        <div className="mt-28 flex w-full flex-col gap-12">
          <Title>Projects</Title>
          <Text>경험해왔던 다양한 프로젝트를 소개합니다.</Text>

          <ProjectList projects={tempProjectsItem} />
        </div>
      </Container>
    </RootLayout>
  );
};

export default Projects;
