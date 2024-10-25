import Text from "@/components/text";
import { useTranslations } from "next-intl";
import ExperienceItem, { ExperienceItemProps } from "./experience-item";

const experience: ExperienceItemProps[] = [
  {
    title: "LSAG Timestamp",
    role: "UI/UX Designer, Fullstack Developer",
    date: "2022 Jul - 2022 Aug",
  },
  {
    title: "Shadow Share",
    role: "UI/UX Designer, Fullstack Developer",
    date: "Jul 2023 - Sep 2023",
  },
  {
    title: "One AI",
    role: "Backend Developer",
    date: "Jun 2024 - Jul 2024",
  },
  {
    title: "BestGrowth",
    role: "Fullstack Developer",
    date: "Jul 2024 - Now",
  },
];

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <div className="py-20 container">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      {experience.map((item, index) => (
        <ExperienceItem key={`exp-${index}`} {...item} />
      ))}
    </div>
  );
};

export default Experience;
