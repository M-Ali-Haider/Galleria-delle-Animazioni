"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
export default function MagneticGSAP({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      xTo(0);
      yTo(0);
    };

    ref.current.addEventListener("mousemove", mouseMove);
    ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", mouseMove);
        ref.current.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);
  return React.cloneElement(children, { ref: ref });
}
