import { ReactNode } from "react";

import { sidebarLinks } from "@/constants/sidebar-links";

import DocsWrapper from "@/components/docs-wrapper";
import Sidebar from "@/components/sidebar";

export default async function MdxLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Sidebar sidebarLinks={sidebarLinks} />
            <DocsWrapper>{children}</DocsWrapper>
        </>
    );
}
