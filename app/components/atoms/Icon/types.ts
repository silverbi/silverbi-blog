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
  HEART_OUTLINE: "HEART_OUTLINE",
  HEART_FILL: "HEART_FILL",
  COPY_CLIPBOARD: "COPY_CLIPBOARD",
  CHECK_CIRCLE: "CHECK_CIRCLE",
  SHARE: "SHARE",
  LIKE_OUTLINE: "LIKE_OUTLINE",
  LIKE_FILL: "LIKE_FILL",
  PROFILE: "PROFILE",
  FOLDER: "FOLDER",
  GIFT: "GIFT",
  HOME: "HOME",
  LOCK: "LOCK",
  PEN: "PEN",
  PIN: "PIN",
  PROFILE_CIRCLE: "PROFILE_CIRCLE",
  STAR: "STAR",
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
