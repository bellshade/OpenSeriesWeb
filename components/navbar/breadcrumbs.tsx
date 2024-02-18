"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

const Breadcrumbs = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    return (
        <ol className="flex min-w-0 items-center gap-2 whitespace-nowrap text-sm font-medium leading-6">
            {pathNames.map((link, index) => {
                if (index === 0) return null;

                const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                const label = link.replace(/-/g, " ");

                return (
                    <Fragment key={index}>
                        <li
                            className={`capitalize ${href === paths ? "truncate text-indigo-600 dark:text-indigo-500" : "text-zinc-500 dark:text-zinc-400"}`}
                        >
                            {label}
                        </li>
                        {pathNames.length !== index + 1 && (
                            <span className="icon-[tabler--chevron-right] h-5 w-4 text-zinc-500 dark:text-zinc-400"></span>
                        )}
                    </Fragment>
                );
            })}
        </ol>
    );
};

export default Breadcrumbs;
