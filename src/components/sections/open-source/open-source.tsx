"use client";

import Text from "@/components/text";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics?: string[];
}

const OpenSource = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch public repositories from GitHub
    fetch(
      "https://api.github.com/users/list-jonas/repos?per_page=10&sort=updated"
    )
      .then((res) => res.json())
      .then((data) => {
        // Only include non-fork repos and those with description
        const filtered = data.filter((r: any) => !r.fork);
        const sorted = filtered.sort(
          (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted);
      })
      .catch(() => {
        /* silent error */
      });
  }, []);

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2" className="mb-6">
        Open Source Contributions
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border p-6 hover:shadow-lg transition-shadow bg-accent/30 hover:bg-accent/50"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <div className="flex items-center gap-1 text-sm">
                <Github className="w-4 h-4" />
                {repo.stargazers_count}
              </div>
            </div>
            {repo.description && (
              <p className="text-muted-foreground mb-4">{repo.description}</p>
            )}
            <div className="flex flex-wrap gap-2 text-xs">
              {repo.language && (
                <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {repo.language}
                </span>
              )}
              {repo.topics?.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {topic}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
