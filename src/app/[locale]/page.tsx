import LazyMotionWrapper from "@/components/lazy-motion-wrapper";
import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Education from "@/components/sections/education/education";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import Languages from "@/components/sections/lang/languages";
import OpenSource from "@/components/sections/open-source/open-source";
import TechStack from "@/components/sections/tech/tech-stack";
import Work from "@/components/sections/work/work";
import { Separator } from "@/components/ui/separator";
import Testimonials from "@/components/sections/testimonials/testimonials";

export default function Home() {
  return (
    <div className="w-screen">
      <Hero />
      <Separator />

      <About />
      <Separator />

      <Experience />
      <Separator />

      <LazyMotionWrapper>
        <TechStack />
      </LazyMotionWrapper>
      <Separator />

      <Languages />
      <Separator />

      <Education />
      <Separator />

      <Work />
      <Separator />

      {/* <LazyMotionWrapper>
        <Testimonials />
      </LazyMotionWrapper>
      <Separator /> */}

      <LazyMotionWrapper>
        <OpenSource />
      </LazyMotionWrapper>
      <Separator />

      <LazyMotionWrapper>
        <Contact />
      </LazyMotionWrapper>
    </div>
  );
}
