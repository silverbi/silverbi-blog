export const IconName = {
  SILVERBI_SYMBOL: "SILVERBI_SYMBOL",
  MENU_BAR: "MENU_BAR",
} as const;
export type IconTypes = (typeof IconName)[keyof typeof IconName];

export const IconSizes = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
  XL: "XL",
} as const;
export type SizesTypes = (typeof IconSizes)[keyof typeof IconSizes];
