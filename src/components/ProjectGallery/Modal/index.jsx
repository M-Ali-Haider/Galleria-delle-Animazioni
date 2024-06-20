import nextConfig from "../../../../next.config";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import styles from "../Project/style.module.css";
import { useEffect, useRef } from "react";
export default function Modal({ modal, projects }) {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.55,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.55,
      ease: "power3",
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  }, []);
  return (
    <>
      <motion.div
        ref={container}
        className="fixed top-1/2 left-1/2 w-[400px] h-[350px] overflow-hidden pointer-events-none"
        variants={modalAnimation}
        initial="initial"
        animate={active ? "enter" : "exit"}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className={`${styles.slider} w-full h-full absolute`}
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="relative h-full w-full flex items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <Image
                  src={`${nextConfig.basePath}/images/${project.src}`}
                  alt="modal image"
                  width={300}
                  height={0}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={modalAnimation}
        initial="initial"
        animate={active ? "enter" : "exit"}
        className="fixed top-1/2 left-1/2 w-[80px] h-[80px] flex items-center justify-center bg-[#455CE9] rounded-full pointer-events-none"
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        variants={modalAnimation}
        initial="initial"
        animate={active ? "enter" : "exit"}
        className="fixed top-1/2 left-1/2 w-[80px] h-[80px] flex items-center justify-center text-white font-semibold pointer-events-none"
      >
        View
      </motion.div>
    </>
  );
}

const modalAnimation = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
