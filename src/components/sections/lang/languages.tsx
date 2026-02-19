import BgGradient from "@/components/bg-gradient";
import Text from "@/components/text";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { useTranslations } from "next-intl";
import Image from "next/image";

const languages = [
  {
    name: "TypeScript",
    icon: "/images/skills/typescript.svg",
  },
  {
    name: "Python",
    icon: "/images/skills/python.svg",
  },
  {
    name: "Go",
    icon: "/images/skills/go.svg",
  },
  {
    name: "Java",
    icon: "/images/skills/java.svg",
  },
  {
    name: "JavaScript",
    icon: "/images/skills/javascript.svg",
  },
  {
    name: "PHP",
    icon: "/images/skills/php.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/images/skills/postgresql.svg",
  },
  {
    name: "MongoDB",
    icon: "/images/skills/mongodb.svg",
  },
  {
    name: "HTML",
    icon: "/images/skills/html5.svg",
  },
  {
    name: "CSS",
    icon: "/images/skills/css3.svg",
  },
  {
    name: "Markdown",
    icon: "/images/skills/markdown.svg",
  },
  {
    name: "NextJS",
    icon: "/images/skills/nextdotjs.svg",
  },
  {
    name: "TailwindCSS",
    icon: "/images/skills/tailwindcss.svg",
  },
  {
    name: "Figma",
    icon: "/images/skills/figma.svg",
  },
  {
    name: "Vercel",
    icon: "/images/skills/vercel.svg",
  },
  {
    name: "Spring",
    icon: "/images/skills/spring.svg",
  },
  {
    name: "NodeJS",
    icon: "/images/skills/nodedotjs.svg",
  },
  {
    name: "Shadcn/ui",
    icon: "/images/skills/shadcnui.svg",
  },
  {
    name: "Swift",
    icon: "/images/skills/swift.svg",
  },
  {
    name: "C++",
    icon: "/images/skills/cplusplus.svg",
  },
  {
    name: "C#",
    icon: "/images/skills/csharp.svg",
  },
];

const Languages = () => {
  const t = useTranslations("Languages");
  const midpoint = Math.ceil(languages.length / 2);
  const languagesRowA = languages.slice(0, midpoint);
  const languagesRowB = languages.slice(midpoint);

  return (
    <section className="relative py-20 flex flex-col w-full">
      <div className="container mb-12">
        <Text size="h2" variant="h2">
          {t("title")}
        </Text>
        <Text size="p">{t("description")}</Text>
      </div>

      <div className="relative w-full overflow-hidden xl:px-[10%]">
        <ScrollVelocityContainer className="w-full [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]">
          <ScrollVelocityRow baseVelocity={6} direction={1} className="py-3">
            {languagesRowA.map((language) => (
              <div
                key={language.name}
                className="mx-2 h-[7rem] w-[7rem] shrink-0 language-logo flex flex-col items-center justify-center"
              >
                <Image
                  className="size-16 opacity-30 filter-icon mb-2"
                  src={language.icon}
                  width={64}
                  height={64}
                  alt={language.name}
                />
                <p className="w-16 text-center text-sm">{language.name}</p>
              </div>
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-3">
            {languagesRowB.map((language) => (
              <div
                key={language.name}
                className="mx-2 h-[7rem] w-[7rem] shrink-0 language-logo flex flex-col items-center justify-center"
              >
                <Image
                  className="size-16 opacity-30 filter-icon mb-2"
                  src={language.icon}
                  width={64}
                  height={64}
                  alt={language.name}
                />
                <p className="w-16 text-center text-sm">{language.name}</p>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-background via-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/3 bg-gradient-to-l from-background via-background to-transparent" />
      </div>

      <BgGradient
        bottom={-5}
        right={-10}
        size={20}
        color="orange-500"
        opacity={0.1}
      />
    </section>
  );
};

export default Languages;
