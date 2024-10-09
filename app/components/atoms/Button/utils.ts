import { ButtonSize, type ButtonStyles } from "@components/atoms/Button/index";
import { Colors, Typography } from "@styles/themes/types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";

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
    case "NEGATIVE":
      return "bg-semantic-error";
    case "INFO":
      return "bg-semantic-info";
    default:
      return;
  }
};

export const changeSizeToClassname = (tag: ButtonSize) => {
  switch (tag) {
    case "SM":
      return "rounded-lg px-3 py-1";
    case "MD":
      return "rounded-lg px-4 py-1.5";
    case "LG":
      return "rounded-xl px-5 py-2";
    case "XL":
      return "rounded-xl px-6 py-3";
    default:
      return;
  }
};

export const changeInteractionSizeToClassname = (tag: ButtonSize) => {
  switch (tag) {
    case "SM":
      return "rounded-lg";
    case "MD":
      return "rounded-lg";
    case "LG":
      return "rounded-xl";
    case "XL":
      return "rounded-xl";
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

export const changeTypeToTextSize = (size: ButtonSize) => {
  switch (size) {
    case "SM":
      return Typography.BODY_3;
    case "MD":
      return Typography.BODY_2;
    case "LG":
      return Typography.BODY_1;
    case "XL":
      return Typography.SUBTITLE_1;
    default:
      return Typography.BODY_2;
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
