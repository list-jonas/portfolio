"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Particles from "@/components/magicui/particles";

const ParticlesOverlay = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#b6b6b6");

  useEffect(() => {
    setColor(theme === "dark" ? "#b6b6b6" : "#171819");
  }, [theme]);

  return (
    <div className="h-full w-full -z-10 max-sm:hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesOverlay;
