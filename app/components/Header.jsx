"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // GSAP Animation Timeline
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    tl.from(headerRef.current, { opacity: 0 })
      .from(textRef.current, { y: 50, opacity: 0 }, "-=0.5")
      .from(imageRef.current, { x: 50, opacity: 0 }, "-=0.5")
      // Using gsap.utils.toArray to ensure both buttons animate properly
      .from(gsap.utils.toArray(buttonsRef.current), {
        y: 30,
        opacity: 0,
        stagger: 1,
      });
  }, []);

  return (
    <div
      ref={headerRef}
      className="w-full py-28 md:py-36 px-6 md:px-20 h-[100vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left"
    >
      {/* Right Section (Image) */}
      <div
        ref={imageRef}
        className="flex justify-center md:mr-10 md:justify-end md:mt-0 md:w-1/2 order-1 md:order-2"
      >
        <Image src={assets.hero} alt="hero" className="w-[80%] md:w-[60%]" />
      </div>

      {/* Left Section (Text and Buttons) */}
      <div ref={textRef} className="md:w-2/3 order-2 md:order-1 mt-10 md:mt-5">
        <div className="">
          <h1 className="font-bold text-2xl md:text-3xl text-primary md:pb-5">
            Hello, I'm Ellas Touray
          </h1>
          <h2 className="text-4xl md:text-[80px] font-bold md:leading-[75px] ">
            Graphic Designer
          </h2>
          <p className="text-lightGray mt-5 text-sm md:text-base md:w-2/3">
            Transforming ideas into stunning visuals. Let's create something
            extraordinary together!
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
        >
          {/* LinkedIn Profile Button */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-primary px-5 py-2 rounded-md hover:md:bg-transparent bg-primary transition"
          >
            <Image
              src={assets.linkedin}
              alt="linkedin-icon"
              className="w-5 h-5 "
            />
            Let's connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
