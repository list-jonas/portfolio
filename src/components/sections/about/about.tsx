import { Highlighter } from "@/components/magicui/highlighter";
import Text from "@/components/text";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  // Calculate age based on birthday (08 Oct 2005)
  const birthDate = new Date(2005, 9, 8); // month is 0-indexed
  const age = Math.floor(
    (Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      <Text size="p" className="mb-4">
        {t("introduction", { age })}{" "}
        <Highlighter action="underline" color="#E8353D">
          {t("student")}
        </Highlighter>{" "}
        {t("from")}{" "}
        <Highlighter action="underline" color="#E8353D">
          {t("country")}
        </Highlighter>
        . {t("education")}{" "}
        <Highlighter action="underline" color="#E8353D">
          {t("school")}
        </Highlighter>
        , {t("specialization")}
      </Text>
      <Text size="p" className="mb-4">
        {t("passion")}
      </Text>
      <Text size="p" className="mb-4">
        {t("callToAction")}
      </Text>
    </section>
  );
};

export default About;
