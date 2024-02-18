"use client";

import { useNavStyleStore } from "@/stores/use-nav-style-store";
import { ReactNode, useEffect } from "react";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const { setLandingStyles } = useNavStyleStore();

    useEffect(() => {
        setLandingStyles();
    }, [setLandingStyles]);

    return <>{children}</>;
};

export default Layout;
