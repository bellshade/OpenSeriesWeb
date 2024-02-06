import Link from "next/link";
import React from "react";

type Props = {};

const Contribute = (props: Props) => {
    return (
        <div className="not-prose grid gap-4 md:grid-cols-2">
            <Link
                href="https://github.com/bellshade/OpenSeries/blob/main/CONTRIBUTING.md"
                target="_blank"
                className="group relative flex items-center gap-6 rounded-xl border p-8 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
                <span className="icon-[akar-icons--python-fill] h-14 w-14"></span>
                <div className="space-y-1">
                    <h2 className="m-0 text-2xl font-bold">Library</h2>
                    <p className="m-0">Baca CONTRIBUTING.MD klik disini!</p>
                </div>
                <span className="tranzinc-x-10 group-hover:tranzinc-x-0 icon-[solar--map-arrow-right-bold-duotone] absolute right-10 h-14 w-14 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
                href="https://github.com/bellshade/OpenSeriesWeb/blob/main/CONTRIBUTING.md"
                target="_blank"
                className="group relative flex items-center gap-6 rounded-xl border p-8 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
                <span className="icon-[teenyicons--nextjs-solid] h-14 w-14"></span>
                <div className="space-y-1">
                    <h2 className="m-0 text-2xl font-bold">Website</h2>
                    <p className="m-0">Baca CONTRIBUTING.MD klik disini!</p>
                </div>
                <span className="tranzinc-x-10 group-hover:tranzinc-x-0 icon-[solar--map-arrow-right-bold-duotone] absolute right-10 h-14 w-14 opacity-0 group-hover:opacity-100"></span>
            </Link>
        </div>
    );
};

export default Contribute;
