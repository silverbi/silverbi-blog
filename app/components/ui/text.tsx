import { cn } from "@/lib/shadcn/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const textVariants = cva("break-all", {
  variants: {
    variant: {
      "head-1": "head-1",
      "head-2": "head-2",
      "head-3": "head-3",
      "title-1": "title-1",
      "title-2": "title-2",
      "title-3": "title-3",
      "subtitle-1": "subtitle-1",
      "subtitle-2": "subtitle-2",
      "body-1": "body-1",
      "body-2": "body-2",
      "body-3": "body-3",
      "caption-1": "caption-1",
      "caption-2": "caption-2",
    },
    bold: {
      true: "font-semibold",
    },
    light: {
      true: "font-light",
    },
  },
  defaultVariants: {
    variant: "body-2",
  },
});

export interface TextProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

function Text({ className, asChild, variant, bold, light, ...props }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return <Comp className={cn(textVariants({ variant, bold, light }), className)} {...props} />;
}

export { Text, textVariants };