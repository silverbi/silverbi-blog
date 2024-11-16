"use client";

import React from "react";
import Image from "next/image";
import { changeImageTagToPath } from "@components/atoms/CustomImage/utils";

interface CustomImageProps {
  tag: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}

const CustomImage = ({
  tag,
  className,
  alt = "silverbi-blog-image",
  width,
  height,
  fill = false,
  priority = false,
}: CustomImageProps) => {
  return (
    <Image
      className={[
        "silverbi-image",
        "relative cursor-default object-contain",
        ...(Array.isArray(className) ? className : [className]),
      ].join(" ")}
      src={changeImageTagToPath(tag)}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      quality={100}
      fill={fill}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
