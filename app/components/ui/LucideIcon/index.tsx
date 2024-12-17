import { ColorTypes } from "@/types";
import { cn } from "@/utils/styles";
import { icons } from "lucide-react";
import { HTMLAttributes } from "react";

export interface LucideIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons;
  color?: ColorTypes | string;
  size?: number;
}

export const LucideIcon = ({ name, color = "primary", size = 16, ...props }: LucideIconProps) => {
  const SelectLucideIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent ? "cursor-pointer" : "";
  const colorClass = `text-${color}`;

  return <SelectLucideIcon size={size} className={cn(colorClass, pointerStyle, props.className)} {...props} />;
};

export default LucideIcon;
