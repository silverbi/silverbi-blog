import { Icon } from "@/app/components/ui/icon";
import { Separator } from "@/app/components/ui/separator";
import { TechPostTypes } from "@/types/features/tech";
import { Skeleton } from "@components/ui/skeleton";
import { Text } from "@components/ui/text";
import Image from "next/image";

export interface TechCardProps {
  items: TechPostTypes;
}

export function TechCard({ items }: TechCardProps) {
  return (
    <div className={"flex w-full gap-8"}>
      <div className={"flex w-full flex-col"}>
        <Text variant={"subtitle-1"} bold>
          {items.title}
        </Text>
        <div className={"flex gap-2 items-center mt-2 mb-3"}>
          <Icon icon={"icon-calendar-check"} size={"sm"} />
          <Text variant={"body-3"}>{items.createdAt}</Text>
          <Separator orientation="vertical" className={"mx-2"} />
          <Icon icon={"icon-alarm-clock"} size={"sm"} />
          <Text variant={"body-3"}>{items.minRead} min read</Text>
          <Separator orientation="vertical" className={"mx-2"} />
          <Icon icon={"icon-heart-rounded"} size={"sm"} />
          <Text variant={"body-3"}>{items.likesCount}</Text>
        </div>
        <Text>{items.shortDescription}</Text>
      </div>

      <div className={"mt-4 h-28 w-48 rounded-xl overflow-hidden"}>
        {items?.thumbnail ? <Image src={items.thumbnail} alt={items.key} /> : <Skeleton className="h-28 w-48" />}
      </div>
    </div>
  );
}
