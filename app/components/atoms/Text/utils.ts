import { Typography, Colors, Weight } from "./types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";

export const changeTypographyToClassName = (type?: ObjectValues<typeof Typography>) => {
  switch (type) {
    case Typography.HEAD_1:
      return "text-9xl leading-normal";
    case Typography.HEAD_2:
      return "text-8xl leading-normal";
    case Typography.HEAD_3:
      return "text-7xl leading-normal";
    case Typography.TITLE_1:
      return "text-6xl leading-normal";
    case Typography.TITLE_2:
      return "text-5xl leading-normal";
    case Typography.TITLE_3:
      return "text-4xl leading-normal";
    case Typography.SUBTITLE_1:
      return "text-3xl leading-normal";
    case Typography.SUBTITLE_2:
      return "text-2xl leading-normal";
    case Typography.SUBTITLE_3:
      return "text-xl leading-normal";
    case Typography.BODY_1:
      return "text-lg leading-relaxed";
    case Typography.BODY_2:
      return "text-base leading-relaxed";
    case Typography.BODY_3:
      return "text-sm leading-relaxed";
    case Typography.CAPTION_1:
      return "text-xs leading-tight";
    case Typography.CAPTION_2:
      return "text-2xs leading-tight";
    case Typography.BUTTON_1:
      return "text-lg leading-snug";
    case Typography.BUTTON_2:
      return "text-base leading-snug";
    default:
      return "text-base leading-relaxed";
  }
};

export const changeColorToClassName = (color?: ObjectValues<typeof Colors>) => {
  switch (color) {
    case Colors.TEXT_1:
      return "text-1";
    case Colors.TEXT_2:
      return "text-2";
    case Colors.TEXT_3:
      return "text-3";
    case Colors.TEXT_PRIMARY:
      return "text-primary";
    case Colors.TEXT_PRIMARY_DARK:
      return "text-primary-dark";
    case Colors.TEXT_PRIMARY_LIGHT:
      return "text-primary-light";
    case Colors.TEXT_SECONDARY:
      return "text-secondary";
    case Colors.TEXT_SECONDARY_DARK:
      return "text-secondary-dark";
    case Colors.TEXT_SECONDARY_LIGHT:
      return "text-secondary-light";
    case Colors.TEXT_INVERSE_1:
      return "text-inverse-1";
    case Colors.TEXT_INVERSE_2:
      return "text-inverse-2";
    case Colors.TEXT_INVERSE_3:
      return "text-inverse-3";
    case Colors.TEXT_DISABLED:
      return "text-disabled";
    case Colors.LINK_PRIMARY:
      return "link-primary";
    case Colors.LINK_ACTIVE:
      return "link-active";
    case Colors.LINK_DISABLED:
      return "link-disabled";
    default:
      return "text-1";
  }
};

export const changeWeightToClassName = (weight?: ObjectValues<typeof Weight>) => {
  switch (weight) {
    case Weight.LIGHT:
      return "font-light";
    case Weight.MEDIUM:
      return "font-normal";
    case Weight.SEMI_BOLD:
      return "font-semibold";
    default:
      return "font-normal";
  }
};
