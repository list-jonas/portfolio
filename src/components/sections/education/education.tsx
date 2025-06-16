import Text from "@/components/text";
import { useTranslations } from "next-intl";
import TimelineItem, { TimelineItemProps } from "../shared/timeline-item";

const education: TimelineItemProps[] = [
  {
    title: "HTBLA Kaindorf",
    subtitle: "HTL",
    date: "2020-2025",
  },
  {
    title: "Bundesgymnasium Rein",
    subtitle: "Gymnasium",
    date: "2016-2020",
  },
  {
    title: "Volkschule Hitzendorf",
    subtitle: "Volkschule",
    date: "2012-2016",
  },
];

const Education = () => {
  const t = useTranslations("Education");

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      {education.map((item, index) => (
        <TimelineItem key={`edu-${index}`} {...item} />
      ))}
    </section>
  );
};

export default Education;