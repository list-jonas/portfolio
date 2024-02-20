"use client";

import * as React from "react";
import { motion } from "framer-motion";

const Responsive = () => (
  <motion.div
    className="bg-background w-[100px] aspect-square rounded-3xl m-auto"
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  />
);

export default Responsive;
