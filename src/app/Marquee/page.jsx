"use client";
import Heading from "@/components/Heading";
import Marquee from "@/components/Marquee";
import { useEffect } from "react";

export default function MarqueePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Heading heading={"Marquee (GSAP)"} />
      <Marquee />
      <div className="w-full h-screen"></div>
    </>
  );
}
