import { cn } from "@/lib/shadcn/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// SVG 아이콘을 동적으로 가져오기 위한 함수
const importIcon = async (iconName: string) => {
  try {
    const IconComponent = (await import(`/public/assets/icons/${iconName}.svg`)).default;
    return IconComponent;
  } catch (error) {
    console.error(`Failed to load icon: ${iconName}`);
    return null;
  }
};

const iconVariants = cva("inline-block", {
  variants: {
    fill: {
      primary: "fill-primary",
      secondary: "fill-secondary",
      accent: "fill-accent",
      destructive: "fill-destructive",
      info: "fill-info",
      warning: "fill-warning",
      success: "fill-success",
      muted: "fill-muted",
    },
    colors: {
      primary: "color-primary",
      secondary: "color-secondary",
      accent: "color-accent",
      destructive: "color-destructive",
      info: "color-info",
      warning: "color-warning",
      success: "color-success",
      muted: "color-muted",
    },
    stroke: {
      primary: "stroke-primary",
      secondary: "stroke-secondary",
      accent: "stroke-accent",
      destructive: "stroke-destructive",
      info: "stroke-info",
      warning: "stroke-warning",
      success: "stroke-success",
      muted: "stroke-muted",
    },
    size: {
      "2xs": "w-2 h-2",
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      default: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
      "2xl": "w-12 h-12",
    },
  },
  defaultVariants: {
    fill: "primary",
    size: "default",
  },
});

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof iconVariants> {
  icon: string;
}

function Icon({ icon, className, fill, colors, stroke, size, ...props }: IconProps) {
  const [IconComponent, setIconComponent] = React.useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);

  React.useEffect(() => {
    async function loadIcon() {
      const ImportedIcon = await importIcon(icon);
      if (ImportedIcon) setIconComponent(() => ImportedIcon);
    }
    loadIcon();
  }, [icon]);

  if (!IconComponent) {
    return <span className={cn(className)} {...props} />;
  }

  return (
    <span className={cn(className)} {...props}>
      <IconComponent className={cn(iconVariants({ fill, colors, stroke, size }), className)} />
    </span>
  );
}

export { Icon, iconVariants };
