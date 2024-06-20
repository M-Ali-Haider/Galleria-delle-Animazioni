"use client";
import Image from "next/image";
import nextConfig from "../../next.config";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Marquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <>
      <div className="w-full h-screen relative overflow-hidden">
        <Image
          className=" object-cover brightness-75 z-0"
          src={`${nextConfig.basePath}/images/bgdark.jpg`}
          alt="background image"
          fill
          loading="eager"
        />
        <div className="absolute bottom-20 text-white">
          <div
            ref={slider}
            className="relative font-semibold text-7xl sm:text-8xl md:text-9xl lg:text-[160px] flex items-center whitespace-nowrap"
          >
            <p ref={firstText} className="">
              Full Stack Developer -
            </p>
            <p ref={secondText} className="absolute left-full">
              Full Stack Developer -
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
