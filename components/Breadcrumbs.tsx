"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    return (
        <ol className="flex items-center gap-2 text-sm font-medium whitespace-nowrap min-w-0 leading-6">
            {pathNames.map((link, index) => {
                if (index === 0) return null;

                const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                const label = link.replace(/-/g, " ");

                return (
                    <React.Fragment key={index}>
                        <li className={`capitalize ${href === paths ? "text-indigo-600 dark:text-indigo-500 truncate" : "text-zinc-500 dark:text-zinc-400"}`}>
                            {label}
                        </li>
                        {pathNames.length !== index + 1 && (
                            <span className="icon-[tabler--chevron-right] text-zinc-500 dark:text-zinc-400 w-4 h-5"></span>
                        )}
                    </React.Fragment>
                );
            })}
        </ol>
    );
};

export default Breadcrumbs;
