export interface GithubProjectConfig {
  url: string;
  featured?: boolean;
}

export interface Repository {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  updatedAt: string;
  featured: boolean;
}

export interface CorporateProject {
  id: string;
  name: string;
  subtitle: string;
  company: string;
  icon: "fish" | "waves" | "trees";
  description: string;
  context: string;
  private: boolean;
  url?: string;
  technologies: string[];
  responsibilities: string[];
  challenges: string[];
  impact: string[];
  highlights: string[];
  result: string;
}
