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

      <Separator className="mt-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-6 first:pl-0 last:pr-0"
          >
            <div className="flex items-center justify-between gap-2">
              <Text
                size="h3"
                className="group-hover:underline underline-offset-4"
              >
                {repo.name}
              </Text>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Star className="w-4 h-4" />
                <Text className="text-md">{repo.stargazers_count}</Text>
              </span>
            </div>
            {repo.description && (
              <Text className="text-muted-foreground flex-1">
                {repo.description}
              </Text>
            )}
            <span className="flex items-center gap-3 text-muted-foreground mt-2">
              {repo.language && (
                <Text className="text-sm">{repo.language}</Text>
              )}
              <Github className="w-4 h-4 ml-auto" />
            </span>
          </a>
        ))}
      </div>
      <Separator />
    </section>
  );
};

export default OpenSource;
