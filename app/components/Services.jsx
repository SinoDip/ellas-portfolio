"use client";

import { ServicesData } from "@/assets/assets";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "../reactbits/DecryptedText";

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and slide-up animation for the title & description
    gsap.from([titleRef.current, textRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: false,
      },
    });

    // Staggered animations for service cards
    gsap.from(servicesRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "top 50%",
        scrub: false,
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      id="services"
      className="w-full h-full py-5 px-6 md:px-20 pt-20"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
        <h1
          ref={titleRef}
          className="text-4xl font-bold text-center md:text-left"
        >
          <DecryptedText
            text="3+ years of 
             experience"
            animateOn="view"
            speed={200}
            revealDirection="center"
          />
        </h1>
        <div
          ref={textRef}
          className="w-full text-center md:text-left md:w-[30%] mt-6 md:mt-0"
        >
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 border-t-2 border-primary" />
            <span className="text-lg font-bold text-primary ml-5">
              My Services
            </span>
          </div>
          <p className="text-sm text-lightGray">
            Discover the best services I offer, designed to ensure the success
            of your project
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {ServicesData.map((service, i) => (
          <div
            key={i}
            ref={(el) => (servicesRef.current[i] = el)}
            className="bg-lightDark p-6 rounded-lg shadow-lg transition-transform transform md:hover:scale-105 border-b-8 h-80 border-primary flex flex-col"
          >
            <Image src={service.image} alt={service.title} className="mt-5" />
            <h1 className="text-2xl font-bold text-center md:text-left mt-12">
              {service.title}
            </h1>
            <p className="text-sm text-lightGray text-center md:text-left mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
