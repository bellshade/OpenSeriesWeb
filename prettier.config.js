/** @type {import("prettier").Options} */
const config = {
    printWidth: 120,
    trailingComma: "none",
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    importOrderParserPlugins: ["typescript", "jsx", "mdx"],
    importOrder: ["^@/constants/(.*)$", "^@/stores/(.*)$", "^@/utils/(.*)$", "^@/components/(.*)$", "^[./]"],
    plugins: [require.resolve("@trivago/prettier-plugin-sort-imports"), require.resolve("prettier-plugin-tailwindcss")]
};

export default config;
