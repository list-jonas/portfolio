import dynamic from 'next/dynamic';
import { Separator } from "@/components/ui/separator";
import { Suspense } from 'react';

const Hero = dynamic(() => import("@/components/sections/hero/hero"));
const About = dynamic(() => import("@/components/sections/about/about"));
const Experience = dynamic(() => import("@/components/sections/experience/experience"));
const TechStack = dynamic(() => import("@/components/sections/tech/tech-stack"));
const Languages = dynamic(() => import("@/components/sections/lang/languages"));
const WhatIdo = dynamic(() => import("@/components/sections/what-i-do/what-i-do"));
const Contact = dynamic(() => import("@/components/sections/contact/contact"));
const Testimonials = dynamic(() => import("@/components/sections/testimonials/testimonials"));

export default function Home() {
  return (
    <div className="w-screen">
      <Hero />
      <Separator />

      <About />
      <Separator />

      <Experience />
      <Separator />

      <Suspense fallback={<>Tech Stack loading ...</>}>
        <TechStack />
      </Suspense>
      <Separator />

      <Suspense fallback={<>Skills in progress ...</>}>
        <Languages />
      </Suspense>
      <Separator />

      <Testimonials />
      <Separator />

      <Suspense fallback={<>What do I do? ...</>}>
        <WhatIdo />
      </Suspense>

      <Suspense fallback={<>Maybe wait with contacting me ...</>}>
        <Contact />
      </Suspense>
    </div>
  );
}