"use client";

import { m } from "framer-motion";
import { useRef } from "react";

const Responsive = () => {
  const constraintsRef = useRef(null);

  return (
    <m.div className="w-full h-full flex justify-center" ref={constraintsRef}>
      <m.div
        className="bg-accent-foreground w-[100px] aspect-square rounded-3xl m-auto"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        drag
        dragConstraints={constraintsRef}
      />
    </m.div>
  );
};

export default Responsive;
