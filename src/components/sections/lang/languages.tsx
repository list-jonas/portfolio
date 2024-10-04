import BgGradient from "@/components/bg-gradient";
import Text from "@/components/text";
import { useTranslations } from "next-intl";

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

  return (
    <section className="relative py-20 flex flex-col w-full">
      <div className="container mb-12">
        <Text size="h2" variant="h2">
          {t("title")}
        </Text>
        <Text size="p">{t("description")}</Text>
      </div>

      <div className="language-logo-list relative w-screen flex flex-row [mask-image:linear-gradient(_to_right,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_1)_20%,_rgba(0,_0,_0,_1)_80%,_rgba(0,_0,_0,_0)_)]">
        <div className="animate-marquee whitespace-nowrap flex flex-row mx-0 my-3 text-accent-foreground">
          {languages.map((language, index) => (
            <div
              key={index}
              className="px-2 h-[7rem] aspect-square language-logo"
            >
              <object
                className="size-16 opacity-30"
                data={language.icon}
                width="128"
                height="128"
              />
              <p className="w-16 text-center">{language.name}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex flex-row mx-0 my-3 text-accent-foreground">
          {languages.map((language, index) => (
            <div
              key={index}
              className="px-2 h-[7rem] aspect-square language-logo"
            >
              <object
                className="size-16 opacity-30"
                data={language.icon}
                width="128"
                height="128"
              />
              <p className="w-16 text-center">{language.name}</p>
              {/* filter grayscale-[100%] */}
            </div>
          ))}
        </div>
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
