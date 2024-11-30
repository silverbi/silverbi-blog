import { cn } from "@/lib/shadcn/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex w-fit items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        primary: "border-primary bg-primary text-primary-foreground",
        secondary: "border-tertiary bg-tertiary text-primary",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-primary",
      },
      size: {
        sm: "body-3 rounded-md px-2 py-0.25",
        default: "body-2 px-4 py-0.5 rounded-lg",
        lg: "body-1 px-5 py-2 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  hover?: boolean;
}

function Badge({ className, variant, size, hover = true, ...props }: BadgeProps) {
  const hoverStyles = React.useMemo(() => {
    console.log("hover", hover);
    if (!hover) return "";

    switch (variant) {
      case "primary":
        return "hover:border-tertiary-foreground hover:bg-tertiary-foreground hover:text-secondary";
      case "secondary":
        return "hover:bg-secondary";
      case "destructive":
        return "hover:bg-destructive";
      case "outline":
        return "hover:border-primary hover:text-primary hover:bg-secondary";
      default:
        return "";
    }
  }, [hover, variant]);

  return <div className={cn(badgeVariants({ variant, size }), hoverStyles, className)} {...props} />;
}

export { Badge, badgeVariants };
