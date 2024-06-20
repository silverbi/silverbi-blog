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
  priority?: boolean;
  sizes?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  tag,
  className,
  alt = "silverbi-blog-image",
  width,
  height,
  priority = false,
}) => {
  return (
    <div className={"relative"}>
      <Image
        className={[
          "silverbi-image",
          "relative cursor-default object-contain",
          ...(Array.isArray(className) ? className : [className]),
        ].join(" ")}
        src={changeImageTagToPath(tag)}
        alt={alt}
        loading="lazy"
        quality={100}
        fill={!(width || height)}
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
