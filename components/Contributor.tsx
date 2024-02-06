import Image from "next/image";
import Link from "next/link";
import { Octokit } from "octokit";

type Props = {
    username: string;
};

const Contributor = async ({ username }: Props) => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    const { data } = await octokit.request("GET /users/{username}", {
        username,
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    return (
        <Link href={data.html_url} className="overflow-hidden rounded-lg border dark:border-slate-700" target="_blank">
            <Image className="w-full" width={100} height={100} src={data.avatar_url} alt={String(data.name)} />
            <div className="space-y-2 p-3">
                <p className="text-center text-sm">@{data.login}</p>
                <p className="text-center font-semibold">{data.name}</p>
            </div>
        </Link>
    );
};

export default Contributor;
