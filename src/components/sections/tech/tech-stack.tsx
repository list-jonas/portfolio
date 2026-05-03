"use client";

import Text from "@/components/text";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
      <Text size="p">{t("description")}</Text>

      <Separator className="mt-10" />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 border-l">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-6 border-r border-b"
          >
            <Image
              className="filter-icon shrink-0"
              src={tech.icon}
              width={32}
              height={32}
              alt={tech.name}
            />
            <div className="min-w-0">
              <h4 className="text-md truncate">{tech.name}</h4>
              <p className="text-sm text-muted-foreground truncate">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
