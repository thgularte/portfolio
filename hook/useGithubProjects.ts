import { getRepos } from "@/services/github.service";
import { useState, useEffect } from "react";

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

export function useRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    getRepos()
      .then((data) => {
        const filtered = data
          .filter((repo) => repo.name !== "thgularte") // retirar o repo de apresentação do github
        setRepos(filtered);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { repos, loading, error };
}
