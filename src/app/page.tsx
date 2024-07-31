import Hero from "@/components/sections/01_hero/hero";
import About from "@/components/sections/02_about/about";
import Experience from "@/components/sections/03_experience/experience";
import TechStack from "@/components/sections/05_tech/tech-stack";
import Languages from "@/components/sections/06_lang/languages";
import WhatIdo from "@/components/sections/07_what-i-do/what-i-do";
import Contact from "@/components/sections/08_contact/contact";
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

      <WhatIdo />
      
      <Contact />
    </div>
  );
}
