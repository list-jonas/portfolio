import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Experience from "@/components/sections/experience/experience";
import TechStack from "@/components/sections/tech/tech-stack";
import Languages from "@/components/sections/lang/languages";
import WhatIdo from "@/components/sections/what-i-do/what-i-do";
import Contact from "@/components/sections/contact/contact";
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

      <TechStack />
      <Separator />

      <Languages />
      <Separator />

      <Testimonials />
      <Separator />

      <WhatIdo />
      
      <Contact />
    </div>
  );
}
