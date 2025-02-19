"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: false,
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: false,
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="w-full h-full py-20 px-6 md:px-20 mt-6 bg-deepGray"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section (Image) */}
        <div
          ref={imageRef}
          className="md:w-1/2 flex justify-center md:justify-start"
        >
          <Image
            src={assets.aboutimg}
            alt="about-image"
            className="w-[80%] md:w-[60%] md:ml-10 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section (Text) */}
        <div
          ref={textRef}
          className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold text-primary">About Me</h1>
          <p className="text-sm md:text-base text-lightGray mt-5 leading-relaxed">
            Hi, I’m **Ellas Touray**, a passionate **Graphic Designer** with
            over three years of experience crafting unique visuals for brands. I
            specialize in digital and print media, creating designs that leave a
            lasting impact.
          </p>
          <p className="text-sm md:text-base text-lightGray mt-3 leading-relaxed">
            My creative journey started with a **multimedia and print technology
            background**, and I’m currently refining my skills at **AP
            University of Applied Sciences**. Let's collaborate and bring ideas
            to life!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button className="bg-primary px-5 py-2 rounded-md md:hover:bg-transparent md:border-2 md:border-primary transition">
              <span className="transition-all duration-300 hover:text-white hover:scale-105">
                Contact Me
              </span>
            </button>
            <button className="flex items-center text-lightGray">
              <Image
                className="mr-2"
                src={assets.download}
                alt="download-icon"
              />
              <span className="transition-transform duration-300 hover:text-primary">
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
