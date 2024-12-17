import { Skeleton } from "@/app/components/ui";
import { ProjectTypes } from "@/types/feature/project";
import { cn } from "@lib/shadcn/utils";
import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewCardProps {
  className?: string;
  items: ProjectTypes;
}

export function ProjectPreviewCard({ className, items }: ProjectPreviewCardProps) {
  return (
    <Link
      className={cn("overflow-hidden rounded-xl border-none h-full w-full", className)}
      href={`/project/${items?.key}`}
    >
      {items?.cover ? <Image src={items.cover} alt={items.title} /> : <Skeleton className={"w-full h-full"} />}
    </Link>
  );
}
