import { Highlighter } from "@/components/magicui/highlighter";
import Text from "@/components/text";
import { Separator } from "@/components/ui/separator";

export interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  underlined?: boolean;
}

const TimelineItem = ({
  title,
  subtitle,
  date,
  underlined,
}: TimelineItemProps) => {
  return (
    <>
      <Separator />
      <div className="flex flex-col md:flex-row justify-between my-10">
        <Text size="h3">
          {underlined ? (
            <Highlighter action="underline" color="#E8353D">
              {title}
            </Highlighter>
          ) : (
            title
          )}
        </Text>
        <span className="text-right flex flex-col">
          <Text className="text-md">{subtitle}</Text>
          <Text className="text-muted-foreground">{date}</Text>
        </span>
      </div>
    </>
  );
};

export default TimelineItem;
