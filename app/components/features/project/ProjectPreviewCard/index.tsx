import { Card } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";
import { cn } from "@/lib/shadcn/utils";
import { ProjectTypes } from "@/types/features/project";
import Image from "next/image";
import React from "react";

export interface ProjectPreviewCardProps {
  className?: string;
  items: ProjectTypes;
}

export function ProjectPreviewCard({ className, items }: ProjectPreviewCardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-xl border-none", className)}>
      {items?.image ? <Image src={items.cover} alt={items.title} /> : <Skeleton className={"w-full h-full"} />}
    </Card>
  );
}
