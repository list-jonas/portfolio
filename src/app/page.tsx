import Hero from "@/components/sections/01_hero/hero";
import Education from "@/components/sections/02_education/education";
import Contact from "@/components/sections/07_contact/contact";
import Origin from "@/components/sections/03_origin/origin";
import Passion from "@/components/sections/04_passion/passion";
import TechStack from "@/components/sections/05_tech/tech-stack";
import Languages from "@/components/sections/06_lang/languages";

export default function Home() {
  return (
    <div className="max-w-screen-lg">
      <Hero />
      <Education />
      <Origin />
      <Passion />
      <TechStack />
      <Languages />
      <Contact />
    </div>
  );
}
