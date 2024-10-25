"use client";

import Text from "@/components/text";
import { useTranslations } from "next-intl";

const techStack = [
  {
    name: "NextJs",
    description: "React Framework",
    icon: "/images/skills/nextdotjs.svg",
  },
  {
    name: "TypeScript",
    description: "Strongly Typed JavaScript",
    icon: "/images/skills/typescript.svg",
  },
  {
    name: "Git",
    description: "Version Control System",
    icon: "/images/skills/git.svg",
  },
  {
    name: "Docker",
    description: "Containerization Platform",
    icon: "/images/skills/docker.svg",
  },
  {
    name: "Prisma",
    description: "ORM for Node.js & TypeScript",
    icon: "/images/skills/prisma.svg",
  },
  {
    name: "Jest",
    description: "Unit Testing",
    icon: "/images/skills/jest.svg",
  },
  {
    name: "PostgreSQL",
    description: "Relational Database",
    icon: "/images/skills/postgresql.svg",
  },
  {
    name: "ChatGPT",
    description: "Speeds up development",
    icon: "/images/skills/openai.svg",
  },
  {
    name: "Figma",
    description: "UI Design",
    icon: "/images/skills/figma.svg",
  },
  {
    name: "Discord",
    description: "Communication",
    icon: "/images/skills/discord.svg",
  },
];

const TechStack = () => {
  const t = useTranslations("TechStack");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 container relative">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      <Text size="p" className="mb-10">
        {t("description")}
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="size-20 flex items-center justify-center rounded-md bg-accent">
              <object
                className="size-10 filter-icon"
                data={tech.icon}
                width="40"
                height="40"
              />
            </div>
            <div>
              <h4 className="text-lg">{tech.name}</h4>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
