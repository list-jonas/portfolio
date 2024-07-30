import Hero from "@/components/sections/01_hero/hero";
import About from "@/components/sections/02_about/about";
import TechStack from "@/components/sections/05_tech/tech-stack";
import Languages from "@/components/sections/06_lang/languages";
import Contact from "@/components/sections/08_contact/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="sm:container">
      <Hero />
      <Separator />
      <About />
      <Separator />
      <TechStack />
      <Separator />
      <Languages />
      <Separator />
      <Contact />
    </div>
  );
}
