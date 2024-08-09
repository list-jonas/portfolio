import Text from "@/components/text";
import { Separator } from "@/components/ui/separator";

export interface ExperienceItemProps {
  title: string;
  role: string;
  date: string;
}

const ExperienceItem = ({ title, role, date }: ExperienceItemProps) => {
  return (
    <>
      <Separator />
      <div className="flex flex-col md:flex-row justify-between my-10">
        <Text size="h3">{title}</Text>
        <span className="text-right flex flex-col">
          <Text className="text-md">{role}</Text>
          <Text className="text-muted-foreground">{date}</Text>
        </span>
      </div>
    </>
  );
};

export default ExperienceItem;
