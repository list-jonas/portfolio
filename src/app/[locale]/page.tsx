import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import Languages from "@/components/sections/lang/languages";
import TechStack from "@/components/sections/tech/tech-stack";
import Testimonials from "@/components/sections/testimonials/testimonials";
import WhatIdo from "@/components/sections/what-i-do/what-i-do";
import { Separator } from "@/components/ui/separator";


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