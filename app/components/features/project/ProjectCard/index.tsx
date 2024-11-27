import { Card } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";
import { ProjectTypes } from "@/types/features/project";

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
