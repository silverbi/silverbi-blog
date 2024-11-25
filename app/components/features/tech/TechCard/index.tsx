import { TechPostTypes } from "@/types/features/tech";
import { Skeleton } from "@components/ui/skeleton";
import { Text } from "@components/ui/text";

export interface TechCardProps {
  items: TechPostTypes;
}

export function TechCard({ items }: TechCardProps) {
  return (
    <div className={"flex w-full gap-6"}>
      <div className={"flex w-full flex-col gap-2"}>
        <Text variant={"body-2"}>{items.title}</Text>
        <Text variant={"body-2"}>{items.shortDescription}</Text>
        <Text variant={"body-2"}>{items.createdAt}</Text>
      </div>

      <Skeleton className="h-36 w-48 rounded-xl" />
    </div>
  );
}
