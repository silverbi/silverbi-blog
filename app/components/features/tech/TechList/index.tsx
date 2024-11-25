import { TechCard } from "../TechCard";
import { TechPostTypes } from "@/types/features/tech";

export interface TechListProps {
  list: TechPostTypes[];
}

export function TechList({ list }: TechListProps) {
  return (
    <div className={"flex w-full flex-col gap-6"}>
      {list.map((items, index) => (
        <TechCard key={index} items={items} />
      ))}
    </div>
  );
}
