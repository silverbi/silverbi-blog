import React from "react";
import { ProductTypes } from "types/productTypes";
import ProjectCard from "app/components/molecules/ProjectCard";

export interface ProjectListProps {
  projects: ProductTypes[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={"flex w-full flex-row gap-6"}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
