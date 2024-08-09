import BgGradient from "@/components/bg-gradient";
import Text from "@/components/text";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./languages.css";

const languages = [
  {
    name: "TypeScript",
    icon: "/images/skills/TypeScript.svg",
  },
  {
    name: "Python",
    icon: "/images/skills/Python-Dark.svg",
  },
  {
    name: "Go",
    icon: "/images/skills/GoLang.svg",
  },
  {
    name: "Java",
    icon: "/images/skills/Java-Dark.svg",
  },
  {
    name: "C#",
    icon: "/images/skills/CS.svg",
  },
  {
    name: "C++",
    icon: "/images/skills/CPP.svg",
  },
  {
    name: "JavaScript",
    icon: "/images/skills/JavaScript.svg",
  },
  {
    name: "Swift",
    icon: "/images/skills/Swift.svg",
  },
  {
    name: "Kotlin",
    icon: "/images/skills/Kotlin-Dark.svg",
  },
  {
    name: "Rust",
    icon: "/images/skills/Rust.svg",
  },
  {
    name: "PHP",
    icon: "/images/skills/PHP-Dark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/images/skills/PostgreSQL-Dark.svg",
  },
  {
    name: "MongoDB",
    icon: "/images/skills/MongoDB.svg",
  },
  {
    name: "HTML",
    icon: "/images/skills/HTML.svg",
  },
  {
    name: "CSS",
    icon: "/images/skills/CSS.svg",
  },
  {
    name: "Markdown",
    icon: "/images/skills/Markdown-Dark.svg",
  },
  {
    name: "Dart",
    icon: "/images/skills/Dart-Dark.svg",
  },
  {
    name: "NextJS",
    icon: "/images/skills/NextJS-Dark.svg",
  },
  {
    name: "TailwindCSS",
    icon: "/images/skills/TailwindCSS-Dark.svg",
  },
  {
    name: "Notion",
    icon: "/images/skills/Notion-Dark.svg",
  },
  {
    name: "Figma",
    icon: "/images/skills/Figma-Dark.svg",
  },
  {
    name: "Vercel",
    icon: "/images/skills/Vercel-Dark.svg",
  },
  {
    name: "Spring",
    icon: "/images/skills/Spring-Dark.svg",
  },
  {
    name: "Flask",
    icon: "/images/skills/Flask-Dark.svg",
  },
  {
    name: "RegEx",
    icon: "/images/skills/Regex-Dark.svg",
  },
  {
    name: "PyTorch",
    icon: "/images/skills/PyTorch-Dark.svg",
  },
  {
    name: "NodeJS",
    icon: "/images/skills/NodeJS-Dark.svg",
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
        <div className="animate-marquee whitespace-nowrap flex flex-row mx-0 my-3">
          {languages.map((language, index) => (
            <div
              key={index}
              className="px-2 h-[7rem] aspect-square language-logo"
            >
              <Image
                src={language.icon}
                height={128}
                width={128}
                alt={language.name}
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex flex-row mx-0 my-3">
          {languages.map((language, index) => (
            <div
              key={index}
              className="px-2 h-[7rem] aspect-square language-logo"
            >
              <Image
                src={language.icon}
                height={128}
                width={128}
                alt={language.name}
              />{" "}
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
