import { Text } from "@components/ui/text";

export interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <div className={"flex gap-4"}>
      <div className={"w-1.5 h-9 rounded-2xl bg-primary"} />
      <Text variant={"title-3"} asChild color={"accent"}>
        <h2>{children}</h2>
      </Text>
    </div>
  );
}
