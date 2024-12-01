/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  arrowParens: "avoid",
  endOfLine: "lf",
  plugins: [require.resolve("prettier-plugin-tailwindcss"), require.resolve("@trivago/prettier-plugin-sort-imports")]
}