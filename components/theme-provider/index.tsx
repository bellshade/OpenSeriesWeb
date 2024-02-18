"use client";

import { ThemeProvider as Theme } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
    children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <Theme enableSystem={true} attribute="class">
            {children}
        </Theme>
    );
};

export default ThemeProvider;
