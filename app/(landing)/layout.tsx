"use client";

import { ReactNode, useEffect } from "react";

import { useNavStyleStore } from "@/stores/use-nav-style-store";

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
