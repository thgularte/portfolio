import "server-only";
import { cache } from "react";
import { GITHUB_USERNAME } from "@/data/contact";
import { githubProjects } from "@/data/projects";
import { loadGithubProjects } from "./github-core";

export const getGithubProjects = cache(() =>
  loadGithubProjects(GITHUB_USERNAME, githubProjects, process.env.GITHUB_TOKEN),
);
