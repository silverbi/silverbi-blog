import { ProjectTypes } from "types/projectTypes";

export interface ProjectListProps {
  projects: ProjectTypes[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className={"grid aspect-square w-full grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4"}>
      {/* {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))} */}
    </div>
  );
};

export default ProjectList;
