"use client";

import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ParticlesOverlay = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#b6b6b6");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setColor(theme === "dark" ? "#b6b6b6" : "#171819");
  }, [theme]);

  if (isMobile) {
    return null;
  }

  return (
    <div className="h-full w-full -z-10">
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
