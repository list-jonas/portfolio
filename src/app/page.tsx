import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/01_hero/hero"));
const Education = dynamic(() => import("@/components/sections/02_education/education"));
const Contact = dynamic(() => import("@/components/sections/08_contact/contact"));
const Origin = dynamic(() => import("@/components/sections/03_origin/origin"));
const Passion = dynamic(() => import("@/components/sections/04_passion/passion"));
const TechStack = dynamic(() => import("@/components/sections/05_tech/tech-stack"));
const Languages = dynamic(() => import("@/components/sections/06_lang/languages"));
const WhatIdo = dynamic(() => import("@/components/sections/07_what-i-do/what-i-do"));

import { ChevronUpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-screen-lg w-full">
      <Hero />
      <Education />
      <Origin />
      <Passion />
      <TechStack />
      <Languages />
      <WhatIdo />
      <Contact />

      <div className="flex justify-center my-40">
        <a href="#top" className="text-4xl">
          <ChevronUpCircle size={50} className="text-muted-foreground" />
        </a>
      </div>
    </div>
  );
}
