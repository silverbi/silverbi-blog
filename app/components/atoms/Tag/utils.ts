import { Typography } from "@components/atoms/Text/types";

export const changeTypeToClassName = (type: "PRIMARY" | "SECONDARY" | "HIGHLIGHT") => {
  switch (type) {
    case "PRIMARY":
      return "border border-content-1 bg-layer-1";
    case "SECONDARY":
      return "border border-content-1 bg-layer-1";
    case "HIGHLIGHT":
      return "border border-primary-1 bg-primary-1";
    default:
      return "border border-content-1 bg-layer-1";
  }
};

export const changeSizeToClassName = (size: "XL" | "LG" | "MD" | "SM" | "XS") => {
  switch (size) {
    case "XL":
      return "px-4.5 py-1.5";
    case "LG":
      return "px-4 py-1.5";
    case "MD":
      return "px-3.5 py-1.5";
    case "SM":
      return "px-2.5 py-1";
    case "XS":
      return "px-2 py-1";
    default:
      return "px-3.5 py-1.5";
  }
};

export const changeSizeToTypography = (size: "XL" | "LG" | "MD" | "SM" | "XS") => {
  switch (size) {
    case "XL":
      return Typography.SUBTITLE_3;
    case "LG":
      return Typography.BODY_1;
    case "MD":
      return Typography.BODY_2;
    case "SM":
      return Typography.BODY_3;
    case "XS":
      return Typography.CAPTION_1;
    default:
      return Typography.BODY_2;
  }
};
