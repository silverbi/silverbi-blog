import { ProjectCard } from "../ProjectCard";
import { ProjectTypes } from "@/types/features/project";

export interface ProjectListProps {
  list: ProjectTypes[];
}

export const ProjectList = ({ list }: ProjectListProps) => {
  return (
    <div className={"flex flex-wrap gap-6"}>
      {list.map((items, index) => (
        <ProjectCard key={index} items={items} />
      ))}
    </div>
  );
};

export default ProjectList;
