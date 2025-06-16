import Text from "@/components/text";
import { useTranslations } from "next-intl";
import TimelineItem, { TimelineItemProps } from "../shared/timeline-item";

const workExperience: TimelineItemProps[] = [
  {
    title: "Körbler GmbH",
    subtitle: "Ferialpraktikum",
    date: "Sommer 2024",
  },
  {
    title: "Leder & Schuh AG",
    subtitle: "Ferialpraktikum",
    date: "Sommer 2023, 2022",
  },
  {
    title: "GL-Pharma",
    subtitle: "Ferialpraktikum",
    date: "Sommer 2021",
  },
];

const Work = () => {
  const t = useTranslations("Work");

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      {workExperience.map((item, index) => (
        <TimelineItem key={`work-${index}`} {...item} />
      ))}
    </section>
  );
};

export default Work;
