import { ProjectPreviewCard } from "../ProjectPreviewCard";
import { ProjectTypes } from "@/types/feature/project";

export interface ProjectListProps {
  list: ProjectTypes[];
}

export const ProjectList = ({ list }: ProjectListProps) => {
  return (
    <div className={"grid grid-cols-4 grid-rows-3 gap-4 w-full h-[60vw] max-h-[690px]"}>
      <ProjectPreviewCard className={"col-span-1 row-span-1"} items={list[0]} />
      <ProjectPreviewCard className="col-span-3 row-span-1" items={list[1]} />

      <ProjectPreviewCard className="col-span-2 row-span-2" items={list[2]} />

      <ProjectPreviewCard className="col-span-1 row-span-1" items={list[3]} />
      <ProjectPreviewCard className="col-span-1 row-span-2" items={list[4]} />
      <ProjectPreviewCard className="col-span-1 row-span-1" items={list[6]} />
    </div>
  );
};

export default ProjectList;
