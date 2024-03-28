import React from "react";
import Title from "@components/atoms/Title";
import Chip from "@components/atoms/Chip";
import ProjectList from "app/components/organisms/ProjectList";

const tempProjectsItem = [
  {
    title: "Design is the Mix of emotions",
    start_date: "2024.02.01",
    end_date: "present",
    label: "Side Project",
    summary:
      "Did you come here for something in particular or just general g in particular or just general Riker-bashing? And blowing into Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
    role: "Frontend Engineer",
  },
  {
    title: "Design is the Mix of emotions",
    start_date: "2024.02.01",
    end_date: "2024.04.24",
    label: "Side Project",
    summary:
      "Did you come here for something in particular or just general g in particular or just general Riker-bashing? And blowing into Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
    role: "Frontend Engineer",
  },
  {
    title: "Design is the Mix of emotions",
    start_date: "2024.02.01",
    end_date: "present",
    label: "Side Project",
    summary:
      "Did you come here for something in particular or just general g in particular or just general Riker-bashing? And blowing into Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
    role: "Frontend Engineer",
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

      <ProjectList products={tempProjectsItem} />
    </div>
  );
};

export default ProjectListPreviewSection;
