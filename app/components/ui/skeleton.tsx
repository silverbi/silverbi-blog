import { cn } from "@/lib/shadcn/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-xl bg-tertiary overflow-hidden", className)} {...props} />;
}

export { Skeleton };
