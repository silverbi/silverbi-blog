import { Sizes } from "./types";

export const changeTypeToSizeComponent = (type: keyof typeof Sizes) => {
  switch (type) {
    case Sizes.XS:
      return "w-4 h-4";
    case Sizes.SM:
      return "w-6 h-6";
    case Sizes.MD:
      return "w-8 h-8";
    case Sizes.LG:
      return "w-10 h-10";
    case Sizes.XL:
      return "w-12 h-12";
    default:
      return "w-8 h-8";
  }
};
