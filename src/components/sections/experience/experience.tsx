import Text from "@/components/text";
import { useTranslations } from "next-intl";
import TimelineItem, { TimelineItemProps } from "../shared/timeline-item";

const experience: TimelineItemProps[] = [
  {
    title: "LSAG Timestamp",
    subtitle: "UI/UX Designer, Fullstack Developer",
    date: "2022 Jul - 2022 Aug",
  },
  {
    title: "Shadow Share",
    subtitle: "UI/UX Designer, Fullstack Developer",
    date: "Jul 2023 - Sep 2023",
  },
  {
    title: "One AI",
    subtitle: "Backend Developer",
    date: "Jun 2024 - Jul 2024",
  },
  {
    title: "BestGrowth",
    subtitle: "Fullstack Developer",
    date: "Jul 2024 - Now",
  },
];

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      {experience.map((item, index) => (
        <TimelineItem key={`exp-${index}`} {...item} />
      ))}
    </section>
  );
};

export default Experience;
