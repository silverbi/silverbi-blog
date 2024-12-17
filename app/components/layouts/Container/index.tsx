"use client";

import { cn } from "@lib/shadcn/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const containerVariants = cva("overflow-y-auto flex flex-col items-center justify-center box-border", {
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
      mobile: "w-full max-w-xs",
      tablet: "w-full max-w-md",
      desktop: "w-full max-w-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const [height, setHeight] = React.useState<string>("100vh");

    React.useEffect(() => {
      const updateHeight = () => {
        if (typeof window !== "undefined") {
          setHeight(`${window.innerHeight}px`);
        }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight); // 리사이즈 이벤트 핸들러 등록
      return () => window.removeEventListener("resize", updateHeight); // 클린업
    }, []);

    return (
      <div className={cn(containerVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
Container.displayName = "Container";

export { Container, containerVariants };
