import { animations } from "@/Data/animations";
import { motion } from "framer-motion";
import SidebarLink from "./SidebarLink";

const SidebarAnimation = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Sidebar({ setIsOpen }) {
  return (
    <motion.div
      variants={SidebarAnimation}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 h-full w-full sm:w-2/5 z-40 bg-black"
    >
      <div className="relative overflow-visible no-scrollbar h-full w-full flex flex-col gap-4">
        <div className="h-24"></div>
        {animations.map((animation, index) => {
          return (
            <SidebarLink
              key={index}
              animation={animation}
              index={index}
              setIsOpen={setIsOpen}
            />
          );
        })}
        <SidebarCurve />
      </div>
    </motion.div>
  );
}

function SidebarCurve() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className=" absolute h-full w-24 -left-24">
      <motion.path
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
