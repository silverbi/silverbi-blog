import React from "react";
import { ProjectTypes } from "types/projectTypes";
import ProjectCard from "@components/molecules/ProjectCard";

export interface ProjectListProps {
  projects: ProjectTypes[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  console.log(projects);
  return (
    <div className={"grid aspect-square w-full grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4"}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
