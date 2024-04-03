import { Typography, Colors, Weight } from "@styles/themes/types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";

export const changeTypographyToClassName = (type?: ObjectValues<typeof Typography>) => {
  switch (type) {
    case Typography.HEAD_1:
      return "text-7xl leading-normal";
    case Typography.HEAD_2:
      return "text-6xl leading-normal";
    case Typography.HEAD_3:
      return "text-5xl leading-normal";
    case Typography.TITLE_1:
      return "text-4xl leading-normal";
    case Typography.TITLE_2:
      return "text-3xl leading-normal";
    case Typography.TITLE_3:
      return "text-2xl leading-normal";
    case Typography.SUBTITLE_1:
      return "text-xl leading-normal";
    case Typography.SUBTITLE_2:
      return "text-lg leading-normal";
    case Typography.BODY_1:
      return "text-base leading-relaxed";
    case Typography.BODY_2:
      return "text-sm leading-relaxed";
    case Typography.BODY_3:
      return "text-xs leading-relaxed";
    case Typography.CAPTION_1:
      return "text-[0.65rem] leading-tight";
    case Typography.CAPTION_2:
      return "text-[0.5rem] leading-tight";
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
    case Colors.CONTENT_1:
      return "text-content-1";
    case Colors.CONTENT_2:
      return "text-content-2";
    case Colors.CONTENT_3:
      return "text-content-3";
    case Colors.CONTENT_PRIMARY:
      return "text-content-primary";
    case Colors.CONTENT_PRIMARY_DARK:
      return "text-content-primary-dark";
    case Colors.CONTENT_PRIMARY_LIGHT:
      return "text-content-primary-light";
    case Colors.CONTENT_SECONDARY:
      return "text-content-secondary";
    case Colors.CONTENT_SECONDARY_DARK:
      return "text-content-secondary-dark";
    case Colors.CONTENT_SECONDARY_LIGHT:
      return "text-content-secondary-light";
    case Colors.CONTENT_INVERSE_1:
      return "text-content-inverse-1";
    case Colors.CONTENT_INVERSE_2:
      return "text-content-inverse-2";
    case Colors.CONTENT_INVERSE_3:
      return "text-content-inverse-3";
    case Colors.CONTENT_DISABLED:
      return "text-content-disabled";
    case Colors.LINK_PRIMARY:
      return "link-content-primary";
    case Colors.LINK_ACTIVE:
      return "link-content-active";
    case Colors.LINK_DISABLED:
      return "link-content-disabled";
    default:
      return "text-content-1";
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
