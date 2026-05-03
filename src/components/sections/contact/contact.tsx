import Text from "@/components/text";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface ContactLink {
  name: string;
  designation: string;
  href: string;
  icon: React.ReactNode;
}

const Contact = () => {
  const t = useTranslations("Contact");

  const contact: ContactLink[] = [
    {
      name: "Email",
      designation: t("emailDesignation"),
      href: "mailto:jonas.list.1289@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      designation: t("linkedinDesignation"),
      href: "https://www.linkedin.com/in/jonas-list-740230289/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      designation: t("githubDesignation"),
      href: "https://github.com/list-jonas",
      icon: <Github className="w-5 h-5" />,
    },
  ];

  return (
    <footer id="contact" className="container py-20">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>

      <Separator className="mt-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
        {contact.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-6 first:pl-0 last:pr-0"
          >
            <div className="flex items-center justify-between gap-2 text-muted-foreground">
              {item.icon}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <Text
              size="h3"
              className="group-hover:underline underline-offset-4"
            >
              {item.name}
            </Text>
            <Text className="text-muted-foreground">{item.designation}</Text>
          </a>
        ))}
      </div>
      <Separator />

      <div className="mt-10 flex flex-row justify-end">
        <Text className="text-muted-foreground">{t("copyright")}</Text>
      </div>
    </footer>
  );
};

export default Contact;
