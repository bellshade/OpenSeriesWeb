"use client";

import { useTheme } from "next-themes";
import React from "react";

type Props = {};

const Community = (props: Props) => {
    const { theme } = useTheme();

    return (
        <div className="grid gap-x-10 md:grid-cols-2">
            <div>
                <h2>WPU</h2>
                <iframe
                    src={`https://discord.com/widget?id=722002048643497994&theme=${theme}`}
                    className="aspect-square w-full overflow-hidden rounded-lg border dark:border-zinc-700"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    title="Join discord WPU"
                ></iframe>
            </div>
            <div>
                <h2>Kelas Terbuka</h2>
                <iframe
                    src={`https://discord.com/widget?id=882540885714305064&theme=${theme}`}
                    className="aspect-square w-full overflow-hidden rounded-lg border dark:border-zinc-700"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                ></iframe>
            </div>
        </div>
    );
};

export default Community;
