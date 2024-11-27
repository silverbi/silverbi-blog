import { Text } from "@components/ui/text";

export interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <div className={"flex gap-4"}>
      <div className={"w-1.5 h-9 rounded-[2px] bg-primary"} />
      <Text variant={"title-3"} asChild>
        <h2>{children}</h2>
      </Text>
    </div>
  );
}
