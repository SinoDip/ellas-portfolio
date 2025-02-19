import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full py-10 px-6 md:px-20 bg-deepGray  border-l-[7px] border-primary">
        <div className="flex flex-wrap justify-center items-center md:justify-between text-center md:text-left">
          <div className="">
            <h1 className="md:text-[40px] text-2xl font-semibold">
              Have any project in mind ?
            </h1>
            <p className=" md:mt-3 text-sm md:text-base">
              Feel free to contact me or just say a friendly hello!
            </p>
          </div>
          <div className=" mt-10 md:mt-0">
            <button>
              <Link
                className="rounded-md border border-primary bg-primary p-3 md:hover:bg-transparent transition md:mr-20 "
                href="/contact"
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
