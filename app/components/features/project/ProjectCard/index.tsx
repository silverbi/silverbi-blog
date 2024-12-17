import { ProjectTypes } from "@/types";
import { Card, Skeleton } from "@components/ui";

interface ProjectCardProps {
  items: ProjectTypes;
}

export const ProjectCard = ({ items }: ProjectCardProps) => {
  if (!items?.cover) {
    return <Skeleton className="h-28 w-48" />;
  }

  return <Card></Card>;
};

export default ProjectCard;
