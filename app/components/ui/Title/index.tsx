import { Text } from "../Text";
import { cn } from "@/lib/shadcn/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const titleVariants = cva("h-stack gap-3", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof titleVariants> {}

function Title({ className, variant, style, children, ...props }: TitleProps) {
  return (
    <div className={cn(titleVariants({ variant }), className)}>
      <div className={"w-1.5 h-9 rounded-[2px] bg-primary"} />
      <Text variant={"title-3"} asChild>
        <h2>{children}</h2>
      </Text>
    </div>
  );
}

export { Title, titleVariants };
