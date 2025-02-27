import { assets, WorksData } from "@/assets/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Works = () => {
  return (
    <>
      <div id="works" className="bg-lightDark w-full py-5 px-6 md:px-20 pt-20">
        <div className="flex flex-wrap justify-center md:justify-normal items-center">
          <div className="w-10 border-t-2 border-primary" />
          <span className="text-lg font-bold text-gray-700 ml-5">My Works</span>
        </div>
        <div className="flex flex-wrap w-full justify-center md:justify-between items-center">
          <h1 className="text-4xl font-bold text-center md:text-left mt-5">
            Some of my favorite <br /> projects.
          </h1>
          <Link className="mt-10 md:mt-0" href="/portfolio">
            <p className="border border-primary p-3 rounded-md md:hover:bg-primary md:hover:text-white transition-all cursor-pointer">
              View all projects
            </p>
          </Link>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-20">
          {WorksData.map((work, i) => (
            <div key={i} className="flex flex-col ">
              {/* Image Container */}
              <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>
              <h1 className="text-2xl font-bold md:text-left mt-5">
                {work.id}
              </h1>
              <p className="text-sm text-lightGray  md:text-left mt-2 ">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
