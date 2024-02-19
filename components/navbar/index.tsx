import { octokit } from "@/constants/octokit";

import NavbarContent from "./navbar-content";

const Navbar = async () => {
    const { data } = await octokit.request("GET /repos/{owner}/{repo}/releases/latest", {
        owner: "bellshade",
        repo: "OpenSeries",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    return <NavbarContent version={data.tag_name} />;
};

export default Navbar;
