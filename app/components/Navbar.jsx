"use client";
import { assets, navData } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// change the navbar to 80% in the middle with rounded corners and it get backs to full width once u scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center pb-10">
      <nav
        className={`  py-4 px-6 md:px-10 flex justify-between items-center shadow-md fixed z-50 transition-all ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md w-full border border-black/80"
            : "bg-black w-[90vw] md:w-[80vw] rounded-full mt-6 border  border-gray/35"
        }`}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Image className="w-28" src={assets.logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navData.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-300 hover:text-primary transition"
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <button className="border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
            <Link href="/contact">Contact</Link>
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[3.8rem] left-0 w-full bg-black/90 shadow-md flex flex-col px-7 py-5 md:hidden z-50">
            <ul className="flex flex-col gap-5 text-lg text-gray-300">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-primary transition"
                >
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-4 border border-primary px-4 py-2 rounded-md text-primary hover:bg-primary hover:text-white transition">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
