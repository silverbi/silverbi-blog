"use client";

import { Container } from "@components/atoms/Container";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import React from "react";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import ProjectList from "@components/organisms/ProjectList";

const tempProjectsItem = [
  {
    id: 1,
    title: "Design is the Mix of emotions",
    start_date: "2024.02.01",
    end_date: "present",
    label: "Side Project",
    subtitle: "서브 타이틀 입니다.",
    thumbnail: "",
    role: "Frontend Engineer",
    tags: ["react", "css"],
  },
  {
    id: 2,
    title: "Design is the Mix of emotions",
    start_date: "2024.02.01",
    end_date: "2024.04.24",
    label: "Side Project",
    subtitle: "서브 타이틀 입니다.",
    thumbnail: "",
    role: "Frontend Engineer",
    tags: ["react", "css"],
  },
  {
    id: 3,
    title: "Design is the Mix of emotions",
    start_date: "2024.02.01",
    end_date: "present",
    label: "Side Project",
    subtitle: "서브 타이틀 입니다.",
    thumbnail: "",
    role: "Frontend Engineer",
    tags: ["CSS", "React", "CRA", "tailwind"],
  },
];

const Projects = () => {
  return (
    <RootLayout>
      <Container className="gap-30 my-32">
        <Image priority src={require("@assets/images/projects-thumbnail.png")} alt={"Projects thumbnail"} />

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
