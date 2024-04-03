export const IconName = {
  SILVERBI_SYMBOL: "SILVERBI_SYMBOL",
  MENU_BAR: "MENU_BAR",
  INSTAGRAM_LOGO: "INSTAGRAM_LOGO",
  GITHUB_LOGO: "GITHUB_LOGO",
  LINKEDIN_LOGO: "LINKEDIN_LOGO",
  CONCENTRIC_CIRCLES: "CONCENTRIC_CIRCLES",
  MAP: "MAP",
  CALENDAR: "CALENDAR",
  CLOCK: "CLOCK",
  HEART: "HEART",
  COPY_CLIPBOARD: "COPY_CLIPBOARD",
  CHECK_CIRCLE: "CHECK_CIRCLE",
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
