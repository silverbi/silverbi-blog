import { ProjectCard } from "../ProjectCard";
import { ProjectTypes } from "@/types/features/project";

export interface ProjectListProps {
  list: ProjectTypes[];
  count?: number;
}

export const ProjectList = ({ list, count }: ProjectListProps) => {
  const customList = count ? list.slice(0, count) : list;

  return (
    <div className={"grid aspect-square w-full grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4"}>
      {customList.map((items, index) => (
        <ProjectCard key={index} items={items} />
      ))}
    </div>
  );
};

export default ProjectList;
