"use client";

import { useEffect, useMemo, useState } from "react";
import BgGradient from "@/components/bg-gradient";
import Text from "@/components/text";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mario Körbler",
    role: "CEO · Körbler GmbH",
    quote:
      "Jonas combines initiative with a sharp technical mind. He elevated our internal tooling in just a few weeks and quickly became the go-to person for solving tricky problems.",
    avatar: "https://avatar.vercel.sh/mario",
  },
  {
    name: "Alexander Kunert",
    role: "Product Lead · LSAG Timestamp",
    quote:
      "He is an exceptional collaborator. Jonas led the frontend architecture and made sure our design system shipped on time while staying pixel perfect.",
    avatar: "https://avatar.vercel.sh/alexander",
  },
  {
    name: "Emma Wilson",
    role: "Project Manager · Shadow Share",
    quote:
      "From the very first sprint, Jonas delivered production-ready features. His communication is transparent and he never hesitates to propose smarter solutions.",
    avatar: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead · BestGrowth",
    quote:
      "Jonas has the rare ability to navigate both UX and backend concerns with ease. Our team shipped faster because of his ownership and clean code.",
    avatar: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Sarah Johnson",
    role: "HR · Leder & Schuh AG",
    quote:
      "Reliable, precise, and curious. Jonas made himself indispensable during his internship and raised the bar for future placements.",
    avatar: "https://avatar.vercel.sh/sarah",
  },
];

const Testimonials = () => {
  const t = useTranslations("Testimonials");
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => window.clearInterval(interval);
  }, [api]);

  const indicators = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <section className="py-20 container relative">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      <Text size="p" className="mb-10 max-w-3xl">
        {t("description")}
      </Text>

      <Carousel
        className="w-full"
        opts={{ align: "center", loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="pb-10">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              className="pl-4 md:basis-1/2 xl:basis-1/3"
            >
              <article className="relative h-full rounded-3xl border bg-accent/40 p-6 shadow-sm backdrop-blur-sm transition hover:bg-accent/60">
                <div className="mb-6 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {`“${testimonial.quote}”`}
                </p>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-6 border-none bg-background/70 shadow-lg hover:bg-background" />
        <CarouselNext className="hidden md:flex -right-6 border-none bg-background/70 shadow-lg hover:bg-background" />
      </Carousel>

      <div className="mt-8 flex justify-center gap-2">
        {indicators.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2.5 w-6 rounded-full transition",
              current === index
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-pressed={current === index}
          />
        ))}
      </div>

      <BgGradient
        bottom={0}
        right={-10}
        size={20}
        color="orange-500"
        opacity={0.1}
      />
    </section>
  );
};

export default Testimonials;
