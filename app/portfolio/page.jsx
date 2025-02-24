"use client";

import Link from "next/link";
import { assets, WorksData } from "@/assets/assets";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DecryptedText from "../reactbits/DecryptedText";

const Portfolio = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-full py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            <DecryptedText
              text="Customize me"
              speed={100}
              maxIterations={20}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              animateOn="view"
            />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {WorksData.map((project, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-lg  bg-deepGray"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                      {project.longDesc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Portfolio;
