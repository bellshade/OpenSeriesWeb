"use client";

import { documentations } from "@/constants/documentations";
import { featuredLinks } from "@/constants/featuredLinks";
import { useSidebarStore } from "@/hooks/useSidebarStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function Sidebar({}: Props) {
    const pathname = usePathname();
    const { isSidebarOpen, toggleSidebar } = useSidebarStore();

    return (
        <>
            <aside
                className={`fixed inset-y-0 z-50 flex min-w-[300px] max-w-[300px] flex-col gap-8 overflow-y-auto border-r bg-inherit p-8 dark:border-r-zinc-700 lg:z-30 lg:mt-16 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    onClick={() => toggleSidebar(false)}
                    className="absolute right-5 top-10 block text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300 lg:hidden"
                >
                    <span className="icon-[tabler--x] size-6"></span>
                </button>
                <div className="grid gap-2">
                    {featuredLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            target={link.target}
                            onClick={() => toggleSidebar(false)}
                            className="group flex items-center gap-2 font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                        >
                            <div
                                className={`grid h-10 w-10 place-items-center rounded-lg ${link.href === pathname ? "bg-indigo-600 text-white" : "bg-indigo-600/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white dark:text-indigo-500"}`}
                            >
                                <span className={`${link.icon} text-xl`}></span>
                            </div>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="space-y-4">
                    {documentations.map((documentation) => (
                        <div key={documentation.parent} className="space-y-4">
                            <span className="text-xs font-bold uppercase text-zinc-800 dark:text-zinc-200">
                                {documentation.parent}
                            </span>
                            <div className="flex flex-col">
                                {documentation.childs.map((link) => (
                                    <Link
                                        key={link.href}
                                        className={`border-l-2 py-2 pl-6 text-sm font-medium hover:border-l-indigo-600 hover:text-indigo-600 dark:hover:border-l-indigo-500 dark:hover:text-indigo-500 ${link.href === pathname ? "border-l-indigo-600 text-indigo-600 dark:border-l-indigo-500 dark:text-indigo-500" : "text-zinc-400 dark:border-l-zinc-700"}`}
                                        href={link.href}
                                        onClick={() => toggleSidebar(false)}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
            <div
                className={`pointer-events-none fixed inset-0 z-40 bg-white/50 backdrop-blur dark:bg-zinc-900/50 lg:opacity-0 ${isSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => toggleSidebar(false)}
            ></div>
        </>
    );
}
