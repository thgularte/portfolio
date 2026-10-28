import type { GithubProjectConfig, Repository } from "@/types";

export function parseGithubUrl(value: string) {
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.hostname !== "github.com" ||
      url.port ||
      url.username ||
      url.password ||
      url.search ||
      url.hash
    )
      return null;
    const match = url.pathname.match(
      /^\/([a-z\d](?:[a-z\d-]*[a-z\d])?)\/([\w.-]+?)\/?$/i,
    );
    if (!match) return null;
    const repository = match[2].replace(/\.git$/, "");
    if (!repository || repository === "." || repository === "..") return null;
    return { owner: match[1], repository };
  } catch {
    return null;
  }
}

export function safeHomepage(value: unknown): string | null {
  if (typeof value !== "string" || !value) return null;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) &&
      !url.username &&
      !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

function githubRequestOptions(token?: string) {
  return {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "theodor-portfolio",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  };
}

function mapPublicRepository(
  config: GithubProjectConfig,
  value: unknown,
): Repository | null {
  const parsed = parseGithubUrl(config.url);
  if (!parsed || !value || typeof value !== "object") return null;
  const repo = value as Record<string, unknown>;
  if (
    repo.private !== false ||
    (repo.visibility && repo.visibility !== "public") ||
    typeof repo.name !== "string" ||
    typeof repo.updated_at !== "string" ||
    Number.isNaN(Date.parse(repo.updated_at))
  )
    return null;
  if (repo.owner && typeof repo.owner === "object") {
    const owner = repo.owner as Record<string, unknown>;
    if (
      typeof owner.login !== "string" ||
      owner.login.toLowerCase() !== parsed.owner.toLowerCase()
    )
      return null;
  }
  return {
    name: repo.name,
    description: typeof repo.description === "string" ? repo.description : null,
    url: `https://github.com/${parsed.owner}/${parsed.repository}`,
    homepage: safeHomepage(repo.homepage),
    language: typeof repo.language === "string" ? repo.language : null,
    topics: Array.isArray(repo.topics)
      ? repo.topics
          .filter((topic): topic is string => typeof topic === "string")
          .slice(0, 6)
      : [],
    stars:
      typeof repo.stargazers_count === "number" ? repo.stargazers_count : 0,
    forks: typeof repo.forks_count === "number" ? repo.forks_count : 0,
    updatedAt: repo.updated_at,
    featured: Boolean(config.featured),
  };
}

export async function fetchRepository(
  config: GithubProjectConfig,
  token?: string,
  fetcher: typeof fetch = fetch,
): Promise<Repository | null> {
  const parsed = parseGithubUrl(config.url);
  if (!parsed) return null;
  try {
    const response = await fetcher(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repository}`,
      githubRequestOptions(token),
    );
    if (!response.ok) return null;
    const data: unknown = await response.json();
    return mapPublicRepository(config, data);
  } catch {
    return null;
  }
}

export async function fetchPublicRepositories(
  username: string,
  token?: string,
  fetcher: typeof fetch = fetch,
): Promise<Repository[] | null> {
  if (!/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(username)) return null;
  const repositories: Repository[] = [];
  try {
    for (let page = 1; ; page++) {
      const response = await fetcher(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=100&page=${page}`,
        githubRequestOptions(token),
      );
      if (!response.ok) return null;
      const data: unknown = await response.json();
      if (!Array.isArray(data)) return null;
      for (const item of data) {
        if (!item || typeof item !== "object" || !("html_url" in item))
          continue;
        if (typeof item.html_url !== "string") continue;
        const parsed = parseGithubUrl(item.html_url);
        if (!parsed || parsed.owner.toLowerCase() !== username.toLowerCase())
          continue;
        const repository = mapPublicRepository({ url: item.html_url }, item);
        if (repository) repositories.push(repository);
      }
      if (!response.headers.get("link")?.includes('rel="next"')) break;
    }
    return repositories;
  } catch {
    return null;
  }
}

export async function loadGithubProjects(
  username: string,
  selectedProjects: GithubProjectConfig[],
  token?: string,
  fetcher: typeof fetch = fetch,
) {
  const all = await fetchPublicRepositories(username, token, fetcher);
  if (all === null) {
    const selected = await Promise.all(
      selectedProjects.map((project) =>
        fetchRepository(project, token, fetcher),
      ),
    );
    const seen = new Set<string>();
    const repositories: Repository[] = [];
    for (const repository of selected) {
      if (!repository || seen.has(repository.url.toLowerCase())) continue;
      seen.add(repository.url.toLowerCase());
      repositories.push(repository);
    }
    return {
      repositories,
      unavailable: selected.filter((repo) => repo === null).length,
      complete: false,
    };
  }

  const byUrl = new Map<string, Repository>();
  for (const repository of all) {
    const key = repository.url.toLowerCase();
    if (!byUrl.has(key)) byUrl.set(key, repository);
  }
  const selected = await Promise.all(
    selectedProjects.map(
      (project) =>
        byUrl.get(project.url.toLowerCase()) ??
        fetchRepository(project, token, fetcher),
    ),
  );
  const repositories: Repository[] = [];
  const seen = new Set<string>();
  selected.forEach((repository, index) => {
    if (!repository) return;
    const key = repository.url.toLowerCase();
    if (seen.has(key)) return;
    repositories.push({
      ...repository,
      featured: Boolean(selectedProjects[index].featured),
    });
    seen.add(key);
  });
  for (const repository of byUrl.values()) {
    const key = repository.url.toLowerCase();
    if (seen.has(key)) continue;
    repositories.push(repository);
    seen.add(key);
  }
  return {
    repositories,
    unavailable: selected.filter((repo) => repo === null).length,
    complete: true,
  };
}
