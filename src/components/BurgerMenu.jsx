"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="fixed z-50 top-3 right-3 bg-black w-16 h-16 rounded-full flex flex-col justify-center items-center"
      >
        <div
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></div>
        <div
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}
