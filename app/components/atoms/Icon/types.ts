export const IconName = {
  SILVERBI_SYMBOL: "SILVERBI_SYMBOL",
  MENU: "MENU",
  INSTAGRAM_LOGO: "INSTAGRAM_LOGO",
  GITHUB_LOGO: "GITHUB_LOGO",
  LINKEDIN_LOGO: "LINKEDIN_LOGO",
  STICKER_CIRCLE: "STICKER_CIRCLE",
  MARKER_PIN: "MARKER_PIN",
  CALENDAR_CHECK: "CALENDAR_CHECK",
  ALARM_CLOCK: "ALARM_CLOCK",
  HEART_ROUNDED: "HEART_ROUNDED",
  HEART_ROUNDED_FILL: "HEART_ROUNDED_FILL",
  CHECK_CIRCLE: "CHECK_CIRCLE",
  SHARE: "SHARE",
  USER: "USER",
  FOLDER: "FOLDER",
  HOME: "HOME",
  LOCK: "LOCK",
  X_CLOSE: "X_CLOSE",
  BUILDING: "BUILDING",
  TEXT_BOLD: "TEXT_BOLD",
  TEXT_ITALIC: "TEXT_ITALIC",
  TEXT_UNDERLINE: "TEXT_UNDERLINE",
  TEXT_STRIKE: "TEXT_STRIKE",
  TEXT_ALIGN_CENTER: "TEXT_ALIGN_CENTER",
  TEXT_ALIGN_JUSTIFY: "TEXT_ALIGN_JUSTIFY",
  TEXT_ALIGN_LEFT: "TEXT_ALIGN_LEFT",
  TEXT_ALIGN_RIGHT: "TEXT_ALIGN_RIGHT",
  ARROW_DOWN: "ARROW_DOWN",
  ARROW_LEFT: "ARROW_LEFT",
  ARROW_RIGHT: "ARROW_RIGHT",
  ARROW_UP: "ARROW_UP",
  CHEVRON_DOWN: "CHEVRON_DOWN",
  CHEVRON_UP: "CHEVRON_UP",
  CHEVRON_LEFT: "CHEVRON_LEFT",
  CHEVRON_RIGHT: "CHEVRON_RIGHT",
  ROCKET: "ROCKER",
  IMAGE: "IMAGE",
  LINK: "LINK",
  SETTING: "SETTING",
  TEXT_REVERSE_RIGHT: "TEXT_REVERSE_RIGHT",
  TEXT_REVERSE_LEFT: "TEXT_REVERSE_LEFT",
  CODE_BROWSER: "CODE_BROWSER",
  LAYOUT_ALT: "LAYOUT_ALT",
  HORIZONTAL_BAR_CHART: "HORIZONTAL_BAR_CHART",
  LEFT_INDENT: "LEFT_INDENT",
  RIGHT_INDENT: "RIGHT_INDENT",
  TEXT_LETTER_SPACING: "TEXT_LETTER_SPACING",
  BAR_CHART: "BAR_CHART",
  TEXT_HEADING: "TEXT_HEADING",
  USER_CIRCLE: "USER_CIRCLE",
  TEXT_LINE_HEIGHT: "TEXT_LINE_HEIGHT",
  LOGOUT: "LOGOUT",
  DOTPOINTS: "DOTPOINTS",
  TOOL: "TOOL",
  BOX: "BOX",
  LOGIN: "LOGIN",
  FOLDER_CODE: "FOLDER_CODE",
  SEARCH: "SEARCH",
  TRASH: "TRASH",
  COPY: "COPY",
  CHECK_CIRCLE_BROKEN: "CHECK_CIRCLE_BROKEN",
  EDIT: "EDIT",
  LOCK_UNLOCKED: "LOCK_UNLOCKED",
  INVERTED_TRIANGLE: "INVERTED_TRIANGLE",
  TEXT_TYPE: "TEXT_TYPE",
  CODE_SNIPPET: "CODE_SNIPPET",
  SAVE: "SAVE",
  QUOTE: "QUOTE",
  VIDEO: "VIDEO",
  EMAIL: "EMAIL",
  DOTTED_LINE: "DOTTED_LINE",
  FOOTNOTE: "FOOTNOTE",
  NUMBERED_LIST: "NUMBERED_LIST",
} as const;
export type IconName = (typeof IconName)[keyof typeof IconName];

export const IconSizes = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
  XL: "XL",
} as const;
export type SizesTypes = (typeof IconSizes)[keyof typeof IconSizes];
