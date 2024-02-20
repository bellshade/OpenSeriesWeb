import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // eslint-disable-next-line jsx-a11y/alt-text
        img: (props) => <Image width="1000" height="1000" className="w-full" {...(props as ImageProps)} />,
        ...components
    };
}
