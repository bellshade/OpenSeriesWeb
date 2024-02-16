"use client";

import { navLinks } from "@/constants/navLinks";
import { socialLinks } from "@/constants/socialLinks";
import { useNavStyle } from "@/hooks/useNavStyle";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const Navbar = (props: Props) => {
    const { isLanding } = useNavStyle();
    const [isOpen, setIsOpen] = useState(false);

    const landingStyle = "fixed";
    const docsStyle = "sticky px-8";

    return (
        <nav
            className={`${isLanding ? landingStyle : docsStyle} inset-x-0 top-0 z-40 border-b bg-white/30 backdrop-blur-lg dark:border-zinc-700 dark:bg-zinc-800/30`}
        >
            <div className={`relative flex items-center py-4 justify-between ${isLanding && "container"}`}>
                <Link
                    className="bg-gradient-to-br from-indigo-600 to-rose-400 bg-clip-text font-bold text-transparent"
                    href="/"
                >
                    OpenSeries
                </Link>
                <div className="flex items-center gap-8">
                    <div
                        className={`absolute z-50 inset-x-0 top-full mt-3 flex origin-top flex-col gap-x-8 gap-y-6 rounded-lg border bg-white p-12 shadow-2xl dark:border-zinc-700 lg:dark:bg-transparent dark:bg-zinc-800 lg:static lg:m-0 lg:flex-row lg:border-none lg:bg-inherit lg:p-0 lg:shadow-none ${isOpen ? "scale-y-100" : "scale-y-0 lg:scale-y-100"}`}
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
            { !isLanding && (
                <div className="flex lg:hidden border-t py-4 items-center gap-2 dark:border-zinc-700 overflow-y-hidden">
                    <button
                        className="grid h-10 w-10 place-items-center rounded-lg text-xl text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 lg:hidden"
                    >
                        <span className="icon-[tabler--menu-2]"></span>
                    </button>

                    <div className="flex items-center gap-2 text-sm">
                        <p>Matematika</p>
                        <span className="icon-[tabler--chevron-right] text-zinc-500 dark:text-zinc-400"></span>
                        <p className="font-semibold text-indigo-600 dark:text-indigo-500">Luas Lingkaran</p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
