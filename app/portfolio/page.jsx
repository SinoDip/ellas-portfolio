"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { assets, portfolioData } from "@/assets/assets";
import Image from "next/image";
import DecryptedText from "../reactbits/DecryptedText";
import CircularText from "../reactbits/CircularText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  // GSAP animation for the page
  useEffect(() => {
    // Animate the title and grid on load
    gsap.from(".title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".portfolio-item", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <>
      <div className="w-full h-full py-32 px-6 ">
        <div className="w-[80vw] mx-auto">
          <h1 className="title text-4xl md:text-5xl font-extrabold text-white mb-8">
            <CircularText
              text="MY*PORTFOLIO*PROJECTS*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, i) => (
              <div
                key={i}
                className="portfolio-item rounded-lg overflow-hidden shadow-lg bg-deepGray"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                      {project.shortDesc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
