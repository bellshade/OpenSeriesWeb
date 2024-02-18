"use client";

import { navLinks } from "@/constants/navLinks";
import { socialLinks } from "@/constants/socialLinks";
import { useNavStyle } from "@/hooks/useNavStyle";
import { useSidebarStore } from "@/hooks/useSidebarStore";
import Link from "next/link";
import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const Navbar = (props: Props) => {
    const { isLanding } = useNavStyle();
    const [isOpen, setIsOpen] = useState(false);

    const { isSidebarOpen, toggleSidebar } = useSidebarStore();

    const landingStyle = "fixed";
    const docsStyle = "sticky px-8";

    return (
        <nav
            className={`${isLanding ? landingStyle : docsStyle} inset-x-0 top-0 z-40 border-b bg-white/30 backdrop-blur-lg dark:border-zinc-700 dark:bg-zinc-800/30`}
        >
            <div className={`relative flex items-center justify-between py-4 ${isLanding && "container"}`}>
                <Link
                    className="bg-gradient-to-br from-indigo-600 to-rose-400 bg-clip-text font-bold text-transparent"
                    href="/"
                >
                    OpenSeries
                </Link>
                <div className="flex items-center gap-8">
                    <div
                        className={`absolute inset-x-0 top-full z-50 mt-3 flex origin-top flex-col gap-x-8 gap-y-6 rounded-lg border bg-white p-12 shadow-2xl dark:border-zinc-700 dark:bg-zinc-800 lg:static lg:m-0 lg:flex-row lg:border-none lg:bg-inherit lg:p-0 lg:shadow-none lg:dark:bg-transparent ${isOpen ? "scale-y-100" : "scale-y-0 lg:scale-y-100"}`}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                className="text-lg text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-500 lg:text-sm"
                                href={link.href}
                                target={link.target}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                className={`grid h-10 w-10  place-items-center rounded-lg text-xl text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700`}
                            >
                                <span className={link.icon}></span>
                            </Link>
                        ))}
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`grid h-10 w-10 place-items-center  rounded-lg text-xl text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 lg:hidden`}
                        >
                            <span className="icon-[tabler--dots-vertical]"></span>
                        </button>
                    </div>
                </div>
            </div>
            {!isLanding && (
                <div className="flex items-center gap-3 overflow-y-hidden border-t py-1 dark:border-zinc-700 lg:hidden">
                    <button
                        onClick={() => toggleSidebar()}
                        className="grid h-10 w-10 place-items-center rounded-lg text-xl text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 lg:hidden"
                    >
                        <span className="icon-[tabler--menu-2]"></span>
                    </button>

                    <Breadcrumbs />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
