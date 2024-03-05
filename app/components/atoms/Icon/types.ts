export const IconName = {
  SILVERBI_SYMBOL: "SILVERBI_SYMBOL",
} as const;
export type IconTypes = (typeof IconName)[keyof typeof IconName];
