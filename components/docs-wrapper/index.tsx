"use client";

import { ReactNode, useEffect } from "react";
import { PythonProvider } from "react-py";

import { useNavStyleStore } from "@/stores/use-nav-style-store";

export default function DocsWrapper({ children }: { children: ReactNode }) {
    const { setDocsStyle } = useNavStyleStore();
    const packages = {
        micropip: ["OpenSeriesBellshade"]
    };

    useEffect(() => {
        setDocsStyle();
    }, [setDocsStyle]);

    return (
        <PythonProvider packages={packages}>
            <main className="prose prose-indigo max-w-none overflow-y-auto rounded-xl p-8 dark:prose-invert prose-pre:border prose-img:w-full prose-img:rounded-xl dark:prose-h1:bg-clip-text dark:prose-h1:font-bold dark:prose-pre:border-zinc-700 lg:pl-[21rem]">
                {children}
            </main>
        </PythonProvider>
    );
}
