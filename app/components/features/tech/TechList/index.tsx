import { TechCard } from "../TechCard";
import { TechPostTypes } from "@/types/feature/tech";

export interface TechListProps {
  list: TechPostTypes[];
  count?: number;
}

export function TechList({ list, count }: TechListProps) {
  return (
    <div className={"flex w-full flex-col gap-12"}>
      {list.map((items, index) => (
        <TechCard key={index} items={items} />
      ))}
    </div>
  );
}
