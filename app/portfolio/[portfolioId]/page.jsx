"use client";

import { useRouter } from "next/navigation"; // Correct hook for navigation in app directory
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // To get dynamic route params
import { portfolioData } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

const WorkDetail = () => {
  const { portfolioId } = useParams(); // Get the portfolioId from the URL
  const [work, setWork] = useState(null); // State to store project details
  const router = useRouter(); // Use the correct router hook

  useEffect(() => {
    // Ensure portfolioId exists before trying to find the project
    if (portfolioId) {
      // Check if the id is a number or string; handle both cases
      const projectId = isNaN(portfolioId) ? portfolioId : Number(portfolioId);

      // Find the project that matches the portfolioId
      const foundProject = portfolioData.find(
        (project) => project.id === projectId
      );

      // Update the state with the found project
      setWork(foundProject);
    }
  }, [portfolioId]); // Re-run effect when portfolioId changes

  if (!work) {
    return (
      <>
        <Navbar />
        <div className="pt-16 text-center mt-10">
          <h1 className="text-2xl font-bold">Project not found!</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="w-full h-full py-32 px-6 md:px-20">
        {/* Go Back Button */}

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Image Section */}

          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={work.image}
              alt={work.title}
              width={800}
              height={500}
              className="object-cover w-full h-96 rounded-lg"
            />
          </div>

          {/* Title and Description Section */}
          <div className="flex flex-col justify-center w-full md:w-1/2 text-white">
            <button
              onClick={() => router.back()} // Go back to the previous page
              className=" w-1/3 mb-10 bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Go Back
            </button>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
              {work.title}
            </h1>
            <p className="text-gray-400 text-lg">{work.longDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
