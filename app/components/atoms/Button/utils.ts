import { type ButtonStyles } from "@components/atoms/Button/index";
import { Colors } from "@styles/themes/types";

export const changeTypeToClassname = (tag: ButtonStyles) => {
  switch (tag) {
    case "PRIMARY":
      return "bg-content-1";
    case "SECONDARY":
      return "";
    case "GHOST":
      return "";
    case "DISABLED":
      return "";
    default:
      return;
  }
};

export const changeTypeToTextColors = (tag: ButtonStyles) => {
  switch (tag) {
    case "PRIMARY":
      return Colors.CONTENT_INVERSE_1;
    case "SECONDARY":
      return Colors.CONTENT_1;
    case "GHOST":
      return Colors.CONTENT_1;
    case "DISABLED":
      return Colors.CONTENT_DISABLED;
    default:
      return Colors.CONTENT_INVERSE_1;
  }
};

export const changeTypeToInteraction = (tag: ButtonStyles) => {
  switch (tag) {
    case "PRIMARY":
      return "hover:bg-hover-inverse";
    case "SECONDARY":
      return "hover:bg-hover-light";
    case "GHOST":
      return "hover:bg-hover-light";
    case "DISABLED":
      return "hover:bg-hover-light";
    default:
      return "hover:bg-hover-inverse";
  }
};
