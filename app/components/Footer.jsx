import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <div className="w-full py-10 px-6 md:px-20 flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center md:items-start text-center md:text-left">
        {/* Logo */}
        <Image
          src={assets.logo}
          className="w-28 object-contain mb-6 md:mb-0"
          alt="profile_pic"
        />

        {/* Information & Social Media Section */}
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 md:mr-20">
          {/* Contact Information */}
          <div>
            <h1 className="font-bold">Information</h1>
            <ul className="mt-5 text-gray text-sm">
              <li className="py-1">📞 +32 468 18 3001</li>
              <li className="py-1">✉️ ellastouray@gmail.com</li>
              <li className="py-1">📍 Antwerpen, Belgium</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="font-bold">Social Media</h1>
            <ul className="mt-5 text-gray text-sm">
              <li className="py-1">
                <a
                  href="https://linkedin.com/in/ellas-touray"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  🔗 LinkedIn
                </a>
              </li>
              <li className="py-1">
                <a
                  href="https://instagram.com/ellasdesigns"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  📸 Instagram
                </a>
              </li>
              <li className="py-1">
                <a
                  href="https://dribbble.com/ellas"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  🎨 Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center w-full border-t border-gray py-5 text-gray text-sm px-6 md:px-20">
        <p className="text-center md:text-left">
          Designed and developed by
          <a
            href="https://portfoliosinosamateh.be"
            target="_blank"
            className="text-primary ml-1 hover:underline"
          >
            Sino Samateh
          </a>
        </p>
        <p className="text-center md:text-right mt-3 md:mt-0">
          {" "}
          Copyright ©2025
        </p>
      </div>
    </>
  );
};

export default Footer;
