import Hero from "@/components/sections/01_hero/hero";
import About from "@/components/sections/02_about/about";
import Experience from "@/components/sections/03_experience/experience";
import TechStack from "@/components/sections/05_tech/tech-stack";
import Languages from "@/components/sections/06_lang/languages";
import Contact from "@/components/sections/08_contact/contact";
import { Separator } from "@/components/ui/separator";
import { ChevronUpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen max-sm:px-2">
      <Hero />
      <Separator />

      <About />
      <Separator />

      <Experience />

      <TechStack />
      <Separator />

      <Languages />
      
      <Contact />

      <div className="flex justify-center my-40">
        <a href="#top" className="text-4xl">
          <ChevronUpCircle size={50} className="text-muted-foreground" />
        </a>
      </div>
    </div>
  );
}
