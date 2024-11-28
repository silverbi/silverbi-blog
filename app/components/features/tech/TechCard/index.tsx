import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import { TechPostTypes } from "@/types/features/tech";
import { Skeleton } from "@components/ui/skeleton";
import { Text } from "@components/ui/text";
import Image from "next/image";
import Link from "next/link";

export interface TechCardProps {
  items: TechPostTypes;
}

export function TechCard({ items }: TechCardProps) {
  return (
    <Link href={`/tech/${items?.key}`}>
      <Card className={"group flex w-full gap-8 border-none px-4 py-2 rounded-2xl cursor-pointer shadow-none"}>
        <div className={"flex w-full flex-col"}>
          <div className={"h-stack gap-2 mb-3"}>
            {items.tags.map((tag, index) => (
              <Badge key={index} size={"sm"} variant={"secondary"}>
                {tag}
              </Badge>
            ))}
          </div>

          <Text className={"group-hover:text-highlight mb-3"} variant={"subtitle-1"} bold>
            {items.title}
          </Text>

          <Text>{items.shortDescription}</Text>

          <div className={"flex items-center gap-4 mt-1.5 mb-2"}>
            <div className={"h-stack gap-1"}>
              <Text variant={"caption-1"}>{items.createdAt}</Text>
            </div>
            <div className={"h-stack gap-1"}>
              <Text variant={"caption-1"}>{items.minRead} min read</Text>
            </div>
          </div>
        </div>

        <div className={"h-28 w-48 rounded-xl overflow-hidden"}>
          {items?.thumbnail ? <Image src={items.thumbnail} alt={items.key} /> : <Skeleton className="h-28 w-48" />}
        </div>
      </Card>
    </Link>
  );
}
