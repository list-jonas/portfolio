import BgGradient from "@/components/bg-gradient";
import { Marquee } from "@/components/magicui/marquee";
import Text from "@/components/text";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const reviews = [
  {
    name: "Alexander Kunert",
    username: "@alexander",
    body: "Working with Jonas was an absolute pleasure. His attention to detail and technical expertise made our project a huge success.",
    img: "https://avatar.vercel.sh/alexander",
  },
  {
    name: "Mario Körbler",
    username: "@mario",
    body: "Jonas delivered exceptional work during his internship. His problem-solving skills and dedication were impressive.",
    img: "https://avatar.vercel.sh/mario",
  },
  {
    name: "Sarah Johnson",
    username: "@sarah",
    body: "Outstanding developer with great communication skills. Jonas consistently delivered high-quality code on time.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Chen",
    username: "@michael",
    body: "Jonas has a natural talent for creating intuitive user interfaces. His work exceeded our expectations.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emma Wilson",
    username: "@emma",
    body: "Reliable, skilled, and always willing to go the extra mile. Jonas is a valuable addition to any team.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "David Rodriguez",
    username: "@david",
    body: "Jonas brings fresh ideas and modern development practices. His contributions were instrumental to our success.",
    img: "https://avatar.vercel.sh/david",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  const t = useTranslations("Testimonials");

  return (
    <div className="py-20 container relative">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      <Text size="p" className="mb-8">
        {t("description")}
      </Text>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      <BgGradient
        bottom={0}
        right={-10}
        size={20}
        color="orange-500"
        opacity={0.1}
      />
    </div>
  );
};

export default Testimonials;
