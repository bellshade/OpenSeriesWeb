import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

const options = {
    theme: {
        light: "light-plus",
        dark: "dark-plus"
    },
    defaultLang: "plaintext"
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options]]
    }
});

export default withMDX(nextConfig);
