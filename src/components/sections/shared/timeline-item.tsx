import { Highlighter } from "@/components/magicui/highlighter";
import Text from "@/components/text";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  underlined?: boolean;
  href?: string;
}

const TimelineItem = ({
  title,
  subtitle,
  date,
  underlined,
  href,
}: TimelineItemProps) => {
  const titleNode = underlined ? (
    <Highlighter action="highlight" color="#E8353D">
      {title}
    </Highlighter>
  ) : (
    title
  );

  return (
    <>
      <Separator />
      <div className="flex flex-col md:flex-row justify-between my-10">
        <Text size="h3">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:underline underline-offset-4"
            >
              {titleNode}
              <ArrowRight className="w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
            </a>
          ) : (
            titleNode
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
