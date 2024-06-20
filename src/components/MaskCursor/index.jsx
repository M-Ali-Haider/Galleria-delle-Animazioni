"use client";

import { useState } from "react";
import styles from "./style.module.css";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";

const statement1 =
  "All the credit goes to Olivier Larose for teaching me these animations. Check him out on YouTube for to learn animations.";

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 40;

  return (
    <>
      <div className="w-screen h-screen relative text-3xl md:text-5xl font-bold">
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className={`${styles.mask} w-full h-full flex items-center justify-center absolute cursor-default`}
        >
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" max-w-[1000px]"
          >
            {statement1}
          </p>
        </motion.div>
        <div className="w-full h-full flex items-center justify-center">
          <p className="max-w-[1000px]">
            <span className=" text-gray-700">Hover Over</span> this paragraph to
            see the animation work. Original Designer of this animation is Minh
            Pahm on YouTube.
          </p>
        </div>
      </div>
    </>
  );
}
