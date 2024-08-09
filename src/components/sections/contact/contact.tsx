import Text from "@/components/text";
import { locales } from "@/lib/locales";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactItem, { ContactItemProps } from "./contact-item";

const Contact = () => {
  const t = useTranslations("Contact");

  const contact: ContactItemProps[] = [
    {
      id: 1,
      name: "Email",
      designation: t("emailDesignation"),
      color: "bg-red-400 dark:bg-red-500",
      href: "mailto:jonas.list.1289@gmail.com",
      element: <Mail />,
    },
    {
      id: 2,
      name: "LinkedIn",
      designation: t("linkedinDesignation"),
      color: "bg-blue-400 dark:bg-blue-500",
      href: "https://www.linkedin.com/in/jonas-list-740230289/",
      element: <Linkedin />,
    },
    {
      id: 3,
      name: "GitHub",
      designation: t("githubDesignation"),
      color: "bg-gray-200 dark:bg-gray-900",
      href: "https://github.com/list-jonas",
      element: <Github />,
    },
  ];

  return (
    <footer id="contact" className="pt-20 relative bg-secondary">
      <div className="container">
        <Text size="h2" variant="h2">
          {t("title")}
        </Text>
        <div className="mt-20 flex flex-row items-center justify-center my-8 w-full gap-4">
          {contact.map((item, index) => (
            <React.Fragment key={`contact-item-${index}`}>
              <ContactItem {...item} />
              {index !== contact.length - 1 && (
                <ChevronRight className="w-10 h-10" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-28 pb-4 flex flex-row justify-between">
          <Text>{t("copyright")}</Text>
          <div className="flex flex-row">
            <Link
              href="https://buymeacoffee.com/jonasl"
              target="blank"
              aria-label="Buy me a coffee"
              className="cursor-pointer mr-2 h-[20px]"
            >
              <Image
                src="/images/bmc-logo-yellow.png"
                alt="Buy me a coffee"
                width={24}
                height={22}
                className="rounded-sm h-[20px]"
              />
            </Link>
            {locales.map((lang) => (
              <Link
                key={lang.key}
                href={`/${lang.key}`}
                locale={lang.key}
                scroll={false}
                aria-label={lang.key}
                className="cursor-pointer h-[20px]"
              >
                <lang.icon className="h-[20px] rounded-sm mr-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
