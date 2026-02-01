type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    'https://api.github.com/users/thgularte/repos?sort=updated&per_page=100',
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      // cache bom pra portfolio
      next: { revalidate: 60 * 60 }, // 1h
    }
  );

  if (!res.ok) {
    throw new Error('Erro ao buscar repositórios');
  }

  return res.json();
}
