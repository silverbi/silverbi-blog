import { cn } from "@lib/shadcn/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const pageContainerVariants = cva("flex flex-col items-center justify-center w-full h-full px-8 py-20", {
  variants: {
    variant: {
      default: "bg-transparent",
      primary: "bg-primary",
      secondary: "bg-secondary",
      ghost: "bg-transparent",
      foreground: "bg-foreground",
    },
    size: {
      default: "w-full max-w-lg",
      small: "w-full max-w-xs",
      mobile: "w-full max-w-sm",
      tablet: "w-full max-w-md",
      desktop: "w-full max-w-lg",
      large: "w-full max-w-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageContainerVariants> {
  children: React.ReactNode;
}

const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div className={cn(pageContainerVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
PageContainer.displayName = "PageContainer";

export { PageContainer, pageContainerVariants };
