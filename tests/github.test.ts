import assert from "node:assert/strict";
import { test } from "node:test";
import {
  fetchPublicRepositories,
  fetchRepository,
  loadGithubProjects,
  parseGithubUrl,
  safeHomepage,
} from "../src/lib/github-core";

test("valida URLs e impede chamadas fora do GitHub", () => {
  assert.deepEqual(
    parseGithubUrl("https://github.com/thgularte/analise-sentimento.git/"),
    { owner: "thgularte", repository: "analise-sentimento" },
  );
  for (const url of [
    "https://github.com.evil.test/user/repo",
    "http://github.com/user/repo",
    "https://user:pass@github.com/user/repo",
    "https://github.com/user/repo/issues",
    "https://github.com/user/repo?token=secret",
    "not-a-url",
  ])
    assert.equal(parseGithubUrl(url), null);
  assert.equal(safeHomepage("javascript:alert(1)"), null);
  assert.equal(safeHomepage("https://example.com"), "https://example.com/");
});

const config = {
  url: "https://github.com/thgularte/analise-sentimento",
  featured: true,
};
const fixture = {
  name: "analise-sentimento",
  private: false,
  visibility: "public",
  description: "Pesquisa",
  homepage: "https://example.com",
  language: "Python",
  topics: ["nlp"],
  stargazers_count: 3,
  forks_count: 2,
  updated_at: "2026-09-01T00:00:00Z",
};

test("mapeia os dados públicos e configura revalidação", async () => {
  let options: RequestInit & { next?: { revalidate?: number | false } } = {};
  const fetcher: typeof fetch = async (_url, init) => {
    options = init || {};
    return Response.json(fixture);
  };
  const result = await fetchRepository(config, "test-token", fetcher);
  assert.equal(result?.name, fixture.name);
  assert.equal(result?.featured, true);
  assert.equal(result?.stars, 3);
  assert.equal(options.next?.revalidate, 3600);
  assert.ok(options.signal);
  assert.equal(
    new Headers(options.headers).get("Authorization"),
    "Bearer test-token",
  );
});

test("não exibe repositórios privados ou respostas inválidas", async () => {
  for (const body of [
    { ...fixture, private: true },
    { ...fixture, visibility: "private" },
    { name: "private" },
    { ...fixture, updated_at: "invalid" },
  ]) {
    assert.equal(
      await fetchRepository(config, undefined, async () => Response.json(body)),
      null,
    );
  }
});

test("falhas de API e timeout são isoladas", async () => {
  for (const status of [403, 404, 429, 500])
    assert.equal(
      await fetchRepository(
        config,
        undefined,
        async () => new Response(null, { status }),
      ),
      null,
    );
  assert.equal(
    await fetchRepository(config, undefined, async () => {
      throw new Error("network");
    }),
    null,
  );
});

const selectedProjects = [
  config,
  { url: "https://github.com/thgularte/calculator-c" },
  { url: "https://github.com/thgularte/gestao-financeira-analise-gastos" },
  { url: "https://github.com/thgularte/app-mobile_lojas" },
];

function publicRepo(name: string, overrides: Record<string, unknown> = {}) {
  return {
    ...fixture,
    name,
    html_url: `https://github.com/thgularte/${name}`,
    owner: { login: "thgularte" },
    ...overrides,
  };
}

test("lista todas as páginas e coloca os quatro selecionados primeiro", async () => {
  const calls: string[] = [];
  const fetcher: typeof fetch = async (input, init) => {
    const url = String(input);
    calls.push(url);
    assert.equal(
      new Headers(init?.headers).get("Authorization"),
      "Bearer test-token",
    );
    if (url.endsWith("page=1"))
      return Response.json(
        [
          publicRepo("extra-recente"),
          publicRepo("gestao-financeira-analise-gastos"),
          publicRepo("analise-sentimento"),
          publicRepo("privado", { private: true }),
          publicRepo("outro-dono", { owner: { login: "outro" } }),
        ],
        {
          headers: {
            link: '<https://api.github.com/users/thgularte/repos?page=2>; rel="next"',
          },
        },
      );
    if (url.endsWith("page=2"))
      return Response.json([
        publicRepo("app-mobile_lojas"),
        publicRepo("calculator-c"),
        publicRepo("extra-antigo"),
        publicRepo("EXTRA-RECENTE", {
          html_url: "https://github.com/thgularte/EXTRA-RECENTE",
        }),
      ]);
    throw new Error(`Consulta inesperada: ${url}`);
  };

  const result = await loadGithubProjects(
    "thgularte",
    selectedProjects,
    "test-token",
    fetcher,
  );
  assert.equal(result.complete, true);
  assert.equal(result.unavailable, 0);
  assert.deepEqual(
    result.repositories.map((repo) => repo.name),
    [
      "analise-sentimento",
      "calculator-c",
      "gestao-financeira-analise-gastos",
      "app-mobile_lojas",
      "extra-recente",
      "extra-antigo",
    ],
  );
  assert.equal(result.repositories[0].featured, true);
  assert.equal(result.repositories[4].featured, false);
  assert.equal(calls.length, 2);
  assert.match(calls[0], /type=owner&sort=updated&per_page=100&page=1$/);
});

test("falha na lista completa mantém os projetos selecionados", async () => {
  const fetcher: typeof fetch = async (input) => {
    const url = String(input);
    if (url.includes("/users/thgularte/repos?"))
      return new Response(null, { status: 403 });
    const name = url.split("/").at(-1)!;
    return Response.json(publicRepo(name));
  };
  const result = await loadGithubProjects(
    "thgularte",
    [...selectedProjects, selectedProjects[0]],
    undefined,
    fetcher,
  );
  assert.equal(result.complete, false);
  assert.equal(result.repositories.length, 4);
  assert.deepEqual(
    result.repositories.map((repo) => repo.name),
    selectedProjects.map((project) => project.url.split("/").at(-1)),
  );
  assert.equal(result.repositories[0].featured, true);
  assert.equal(
    await fetchPublicRepositories("../other", undefined, fetcher),
    null,
  );
});
