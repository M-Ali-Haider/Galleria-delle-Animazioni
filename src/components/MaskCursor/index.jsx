"use client";

import { useState } from "react";
import styles from "./style.module.css";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";
export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

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
            A visual designer - with skills that haven't been replaced by A.I
            {"("}yet{")"} - making good shit only if paycheck is equally good.
          </p>
        </motion.div>
        <div className="w-full h-full flex items-center justify-center">
          <p className="max-w-[1000px]">
            I'm a <span className=" text-gray-700">selectively skilled</span>{" "}
            product designer with strong focus on producing high quality &
            impactful digital experience.
          </p>
        </div>
      </div>
    </>
  );
}
