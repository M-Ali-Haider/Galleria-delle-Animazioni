import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { animatePageOut } from "./PageTransition";

export default function SidebarLink({ animation, index, setIsOpen }) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href, name) => {
    setIsOpen(false);
    const textTransition = document.getElementById("banner-2");
    textTransition.innerText = name;
    if (pathName != href) {
      animatePageOut(href, router, window.innerWidth, window.innerHeight);
    }
  };

  return (
    <motion.div
      key={index}
      variants={SidebarLinksAnimation}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      className="pl-7 md:pl-20"
    >
      <div
        onClick={() => {
          handleClick(animation.href, animation.name);
        }}
        className=" cursor-pointer"
        key={index}
      >
        <span className="text-white text-2xl md:text-3xl relative">
          {animation.name}
          {pathName === animation.href && (
            <span className="absolute -left-5 md:-left-8">&bull;</span>
          )}
        </span>
        <span className=" text-gray-400">{` (${animation.tech})`}</span>
      </div>
    </motion.div>
  );
}

const SidebarLinksAnimation = {
  initial: {
    x: "80px",
  },
  enter: (i) => ({
    x: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: "80px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
