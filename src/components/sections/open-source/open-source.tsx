"use client";

import Text from "@/components/text";
import { Separator } from "@/components/ui/separator";
import { Github, Star } from "lucide-react";
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
    fetch(
      "https://api.github.com/users/list-jonas/repos?per_page=10&sort=updated"
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((r: any) => !r.fork);
        const sorted = filtered.sort(
          (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted.slice(0, 3));
      })
      .catch(() => {
        /* silent error */
      });
  }, []);

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2">
        Open Source Contributions
      </Text>

      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Separator />
          <div className="flex flex-col md:flex-row justify-between my-10 gap-4">
            <div className="flex flex-col gap-2 md:max-w-[60%]">
              <Text
                size="h3"
                className="group-hover:underline underline-offset-4"
              >
                {repo.name}
              </Text>
              {repo.description && (
                <Text className="text-muted-foreground">
                  {repo.description}
                </Text>
              )}
            </div>
            <span className="text-right flex flex-col gap-2 items-end">
              <span className="flex items-center gap-3 text-muted-foreground">
                {repo.language && (
                  <Text className="text-md">{repo.language}</Text>
                )}
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <Text className="text-md">{repo.stargazers_count}</Text>
                </span>
                <Github className="w-4 h-4" />
              </span>
            </span>
          </div>
        </a>
      ))}
    </section>
  );
};

export default OpenSource;
