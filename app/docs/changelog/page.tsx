import { MDXRemote } from "next-mdx-remote/rsc";

import { octokit } from "@/constants/octokit";

const Page = async () => {
    const { data } = await octokit.request("GET /repos/{owner}/{repo}/releases/latest", {
        owner: "bellshade",
        repo: "OpenSeries",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    return <MDXRemote source={data.body!} />;
};

export default Page;
