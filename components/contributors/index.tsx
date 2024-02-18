import Link from "next/link";

import { coreTeam } from "@/constants/core-team";

import Contributor from "./contributor";

type Props = {};

const Contributors = async (props: Props) => {
    return (
        <>
            <h3>OpenSeries Team</h3>
            <div className="not-prose grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                {coreTeam.map((team) => (
                    <Contributor username={team} key={team} />
                ))}
            </div>
            <h3>Semua Kontributor</h3>
            <p>
                Untuk kontributor di luar tim kami, Anda dapat melihat daftar lengkapnya di halaman kontributor kami.
                Untuk kontributor pada library, silakan kunjungi{" "}
                <Link href="https://github.com/bellshade/OpenSeries/graphs/contributors" target="_blank">
                    halaman ini
                </Link>
                . Sementara itu, untuk kontributor pada pengembangan situs web, daftar kontributor dapat ditemukan di{" "}
                <Link href="https://github.com/bellshade/OpenSeriesWeb/graphs/contributors" target="_blank">
                    halaman ini
                </Link>
                . Terima kasih kepada semua kontributor yang telah berpartisipasi dalam mengembangkan OpenSeries!
            </p>
        </>
    );
};

export default Contributors;
