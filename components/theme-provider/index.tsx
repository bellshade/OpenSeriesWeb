"use client";

import { ThemeProvider as Theme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
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
