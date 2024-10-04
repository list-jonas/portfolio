"use client";

import Text from "@/components/text";
import { useTranslations } from "next-intl";

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

      {/* https://simpleicons.org/ */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/nextdotjs.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">NextJs</h4>
            <p className="text-muted-foreground">React Framework</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10 rounded-lg"
              data="/icons/typescript.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">TypeScript</h4>
            <p className="text-muted-foreground">Strongly Typed JavaScript</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/git.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">Git</h4>
            <p className="text-muted-foreground">Version Control System</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/docker.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">Docker</h4>
            <p className="text-muted-foreground">Containerization Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/prisma.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">Prisma</h4>
            <p className="text-muted-foreground">
              ORM for Node.js &amp; TypeScript
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/jest.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">Jest</h4>
            <p className="text-muted-foreground">Unit Testing</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/postgresql.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">PostgreSQL</h4>
            <p className="text-muted-foreground">Relational Database</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-20 flex items-center justify-center rounded-md bg-accent">
            <object
              className="size-10"
              data="/icons/openai.svg"
              width="40"
              height="40"
            />
          </div>
          <div>
            <h4 className="text-lg">ChatGPT</h4>
            <p className="text-muted-foreground">Speeds up development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
