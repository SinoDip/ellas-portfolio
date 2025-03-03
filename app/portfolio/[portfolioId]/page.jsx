"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { portfolioData } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

// Import Swiper for image slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkDetail = () => {
  const { portfolioId } = useParams();
  const [work, setWork] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (portfolioId) {
      const projectId = isNaN(portfolioId) ? portfolioId : Number(portfolioId);
      const foundProject = portfolioData.find(
        (project) => project.id === projectId
      );

      console.log("Found Project:", foundProject); // ✅ Debugging Log
      if (foundProject) {
        console.log("Project Images:", foundProject.images); // ✅ Log Images
      }

      setWork(foundProject);
    }
  }, [portfolioId]);

  if (!work) {
    return (
      <>
        <div className="pt-16 text-center mt-10">
          <h1 className="text-2xl font-bold">Project not found!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-full py-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Image Slider */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            {work?.images && (
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
              >
                {work.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`Slide ${index + 1}`}
                      width={800}
                      height={500}
                      className="object-cover w-full h-96 rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* Title & Description */}
          <div className="flex flex-col justify-center w-full md:w-1/2 text-white">
            <button
              onClick={() => router.back()}
              className="w-1/3 mb-10 bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-600"
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
      <Contact />
      <Footer />
    </>
  );
};

export default WorkDetail;
