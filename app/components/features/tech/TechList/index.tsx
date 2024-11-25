import { TechCard } from "../TechCard";
import { TechPostTypes } from "@/types/features/tech";

export interface TechListProps {
  list: TechPostTypes[];
  count?: number;
}

export function TechList({ list, count }: TechListProps) {
  const customList = count ? list.slice(0, count) : list;

  return (
    <div className={"flex w-full flex-col gap-20"}>
      {customList.map((items, index) => (
        <TechCard key={index} items={items} />
      ))}
    </div>
  );
}
