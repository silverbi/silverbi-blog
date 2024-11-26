import { ProjectTypes } from "@/types/features/project";

export interface ProjectCardProps {
  items: ProjectTypes;
}

export function ProjectCard({ items }: ProjectCardProps) {
  return (
    <div className={"flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-lg"}>
      <div className={"w-full h-48 bg-gray-300 rounded-t-lg"} />
      <div className={"flex flex-col items-center justify-center w-full h-40 p-4"}>
        <h3 className={"text-lg font-bold"}>{items.title}</h3>
        <p className={"text-sm text-gray-500"}>{items.subtitle}</p>
      </div>
      <div className={"flex flex-col items-center justify-center w-full h-16 bg-gray-100 rounded-b-lg"}>
        <p className={"text-sm text-gray-500"}>{items.role}</p>
        <p className={"text-sm text-gray-500"}>
          {items.startDate} ~ {items.endDate}
        </p>
      </div>
    </div>
  );
}
